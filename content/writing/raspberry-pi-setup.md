---
title: Setting Up a Raspberry Pi
date: "2022-06-28"
tags: ["raspberry pi", "linux"]
---

## Hardware
- Raspberry Pi
- Micro SD Card
- Micro SD Card Adapter
- PC or Mac

## Software
- Rapberry Pi Imager (Installed on your computer)

## The Process
1. Use your adapter to plug your micro SD card into your computer.
2. Open Rapsberry Pi Imager
3. Select your OS

I'd suggest "Raspberry Pi OS". The regular version for a GIU and the lite version for no GUI.

4. Select your storage device. That being your micro SD card.
5. Click on the settings cog.
    1. Enable SSH and allow password authentication
    2. Set a username and password
    3. Configure wireless LAN and input your Wi-Fi details.
    4. Deselect all the settings under "Persistent settings". I've found these to cause issues verifying the installation.
6. Click "WRITE" and wait.
7. Once everything is complete, plug the micro SD card into your Raspberry Pi and power it on.
8. After a minute or so, open your Wi-Fi routers settings (Open 192.168.1.1 in your browser.). Find the Raspberry Pi in the list of connected devices and note down its IP address.
9. You can SSH onto the raspberry pi with `pi@192.168.1.40`. Just change "pi" with the username you chose and the ip address with your Raspberry Pis address.
