---
title: The server won't boot from the stick
description: The stick isn't offered, or vBase stops early.
sidebar:
  order: 4
---

- **Boot in UEFI mode.** vBase doesn't support legacy BIOS boot. Turn off CSM / legacy boot in the firmware if it's on.
- **Secure Boot can stay on.** If it's on and vBase is refused, check the firmware trusts Microsoft's UEFI certificate authority (most do by default; some servers call it "Microsoft UEFI CA" or "third-party CA").
- **Choose the stick in the boot menu** (on IBM System x: **F12**). Some servers list a USB stick twice: choose the UEFI entry.
- **Re-write the stick** with vBase Imager if it was written another way; Imager verifies what it writes.
- **Try the menu's other entries:** **vBase (safe graphics)** if the screen goes blank, **vBase (ignore saved state)** to start without the stick's saved settings (nothing is written).
