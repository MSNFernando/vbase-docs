---
title: A service isn't running
description: A service on the server's home screen isn't OK.
sidebar:
  order: 2
---

The home screen lists the services each server runs. On the control-plane server: **vorc8r** (the API), **nginx** (the web server), **postgresql** (its database), the **vnode agent**, **libvirt** (VMs) and **ovs** (networking). Other servers run the agent, libvirt and ovs.

1. **Restart them:** **F2 › Restart management services**. VMs keep running.
2. **Read the logs:** **F4** shows the control plane's and the agent's recent log lines. The last error usually says what's wrong.
3. **Right after setup**, vorc8r can take a minute to start the first time.
4. **Still failing?** Restart the server (**F12**). If the problem stays, keep the log lines from F4 for support.
