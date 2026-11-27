---
title: Write the USB stick
description: Download vBase and write it to a USB stick with vBase Imager.
sidebar:
  order: 3
---

**vBase Imager** downloads a vBase release, checks it, writes it to a USB stick and reads it back to make sure it's right.

1. Download vBase Imager from its [releases page](https://github.com/MSNFernando/vbase-imager/releases/latest):
   - **Windows:** `vbase-imager-<version>-windows-x64.exe`. Nothing to install: run it and allow administrator rights.
   - **macOS:** the `.dmg`. **Linux:** the `.AppImage` for x86_64 or ARM64.
2. **Release:** choose a vBase release. The newest is first.
3. **USB stick:** choose the stick. Only removable drives are listed, and sticks under 32 GB are refused. Tick the box to confirm it can be erased.
4. **Write.** vBase Imager downloads the release, checks its SHA-256, writes the stick and verifies it. A stick that doesn't read back exactly as written is reported as failed.

:::note[Unsigned for now]
vBase Imager isn't code-signed yet, so Windows SmartScreen and macOS Gatekeeper warn when you open it.
:::

## Without vBase Imager

Download `vbase-<version>.img.xz` from [vbase-releases](https://github.com/MSNFernando/vbase-releases/releases), check it against `SHA256SUMS`, and write it with balenaEtcher, Rufus (DD mode), or:

```sh
sha256sum -c SHA256SUMS --ignore-missing
xzcat vbase-<version>.img.xz | sudo dd of=/dev/sdX bs=4M conv=fsync status=progress
```

Next: [first boot](/start/first-boot/).
