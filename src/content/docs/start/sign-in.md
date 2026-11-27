---
title: Sign in to the web console
description: Sign in to vStrata with the password setup gave you.
sidebar:
  order: 5
---

The web console (vStrata) is at the address Setup Complete showed, for example `https://10.250.0.10/`.

1. Open it in a browser. The certificate is self-signed for now: accept the browser's warning once.
2. Sign in as `admin@onecomet.local` with the password Setup Complete showed.

## No password, or lost it?

On the server's screen:

1. Press **F2** (Configure).
2. Choose **Reset web admin password**.
3. Choose `admin@onecomet.local` and enter a new password (at least 12 characters), twice.

The user is signed out everywhere and signs in with the new password.

:::note[vBase 2026.1.0]
2026.1.0 doesn't show a password at the end of setup: set one this way before signing in the first time.
:::

:::tip[Two different accounts]
The **web console** account (`admin@onecomet.local` and the people you invite) is for vStrata in the browser. The **`vbase`** account is the server's own login for its console and SSH. Changing one doesn't change the other: each has its own item in the console menu.
:::
