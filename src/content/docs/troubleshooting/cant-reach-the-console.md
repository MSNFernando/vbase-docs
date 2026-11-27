---
title: Can't reach the web console
description: The browser can't open vStrata.
sidebar:
  order: 1
---

1. **Check the address.** The server's screen shows it under "Manage this node and its VMs in a browser". Use `https://`, not `http://`.
2. **Accept the certificate warning.** The certificate is self-signed for now; browsers warn once.
3. **Check the services.** The home screen lists them. Every one should show **OK**. If one doesn't, see [A service isn't running](/troubleshooting/services/).
4. **Check the network.** From your computer, `ping` the address. If it doesn't answer, check the server's cable and the management settings in **F2 › Configure management network**, and that your computer can reach that network.
5. **Setup not finished?** If the server shows the setup wizard, finish it first: the console starts when setup completes.
