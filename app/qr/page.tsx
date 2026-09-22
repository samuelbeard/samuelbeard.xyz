import QrGenerator from "@/components/QrGenerator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "QR code",
  description: "Generate a QR code and download it as a PNG.",
};

export default function QrPage() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col justify-center gap-6 p-6">
      <div>
        <h1 className="text-3xl font-bold">QR code</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          The code updates as you type.
        </p>
      </div>
      <QrGenerator />
    </div>
  );
}
