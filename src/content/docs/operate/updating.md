---
title: Updating vBase
description: Moving a server to a newer vBase release.
sidebar:
  order: 3
---

:::caution[No in-place updates yet]
vBase can't update itself yet. Writing a newer release to the stick sets the server up from scratch: the stick holds the server's settings and, on the control-plane server, its database.
:::

Updates from the web console are being built next: the control plane and node agents updated in place with automatic rollback, then the server's system image with a fallback to the previous one if it doesn't come up.

Until then, treat a newer release as a new installation, and keep your test servers separate from anything you depend on.
