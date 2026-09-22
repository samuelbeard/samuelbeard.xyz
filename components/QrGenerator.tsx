"use client";

import QRCode from "qrcode";
import { useEffect, useRef, useState } from "react";

export default function QrGenerator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [value, setValue] = useState("https://samuelbeard.xyz");
  const [ready, setReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const text = value.trim();
    if (!text) {
      canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
      setReady(false);
      setError(null);
      return;
    }

    let cancelled = false;

    QRCode.toCanvas(canvas, text, {
      width: 512,
      margin: 2,
      errorCorrectionLevel: "M",
    })
      .then(() => {
        if (cancelled) return;
        // The library sets an inline pixel size. Keep the bitmap large for
        // the PNG, and scale the preview to the card.
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        setReady(true);
        setError(null);
      })
      .catch(() => {
        if (cancelled) return;
        canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
        setReady(false);
        setError("That text is too long to encode as a QR code.");
      });

    return () => {
      cancelled = true;
    };
  }, [value]);

  function download() {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return;

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qr-code.png";
    link.click();
  }

  const label = value.trim();

  return (
    <>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">Text or URL</span>
        <textarea
          value={value}
          onChange={(event) => setValue(event.target.value)}
          rows={3}
          placeholder="https://samuelbeard.xyz"
          className="w-full resize-none rounded-2xl border bg-white/70 p-4 shadow-sm outline-none focus:ring-2 focus:ring-ring"
        />
      </label>

      <div className="flex w-full flex-col items-center gap-4 overflow-hidden rounded-2xl border bg-white/70 p-6 shadow">
        <div className="relative aspect-square w-full max-w-64">
          <canvas
            ref={canvasRef}
            width={512}
            height={512}
            role="img"
            aria-label={ready ? `QR code for ${label}` : "QR code preview"}
            className={`h-full w-full ${ready ? "" : "invisible"}`}
          />
          {ready ? null : (
            <p className="absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-muted-foreground">
              {error ?? "Type something to generate a code."}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={download}
          disabled={!ready}
          className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Download PNG
        </button>
      </div>
    </>
  );
}
