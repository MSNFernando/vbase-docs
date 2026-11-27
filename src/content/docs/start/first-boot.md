---
title: First boot
description: Boot a server from the stick and set it up with the setup wizard.
sidebar:
  order: 4
---

Plug the stick into the server and boot from it (on IBM System x, press **F12** and choose the USB device). The vBase boot menu starts **vBase** on its own after 5 seconds, then the setup wizard opens on the server's screen.

## The setup wizard

1. **Welcome.** Press Enter.
2. **Hostname** for this server, for example `vbase-node-01`.
3. **What does this node run?**
   - **control-plane**: the first (or only) server. It runs the web console and API, and VMs.
   - **node**: an extra hypervisor that joins an existing control plane.
4. **Management network interface:** the port connected to your management network.
5. **IP address** in CIDR form (`10.250.0.10/24`), then the **default gateway** and the **DNS server**.
6. **Password for the `vbase` account** (at least 8 characters, twice). It's the server's own login, for the console and SSH.
7. **Apply this configuration?** Check it and choose **Yes**, then press **OK** on "Applying configuration".

:::note
While the network is applied, messages such as `systemd-networkd is not running` can appear at the bottom of the screen. They're harmless: the network comes up a moment later.
:::

When it's done, **Setup Complete** shows the addresses of the console, the API and SSH.

## Control plane: next steps

[Set the web console password and sign in](/start/sign-in/).

## Extra nodes

A **node** needs a join string from the control plane: in the web console, **Hosts › Add host**. Paste it into the console menu's **Join a control plane**, or run:

```sh
sudo vnode join '<join string>'
```

The node then appears under **Hosts** in the web console.

## After a reboot

The server boots straight to the console menu: the wizard runs only once. The home screen shows the server's address and whether each service is running. See [the console menu](/operate/console-menu/).
