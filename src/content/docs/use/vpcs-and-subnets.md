---
title: VPCs and subnets
description: Private networks for VMs and databases.
sidebar:
  order: 1
---

A **VPC** is a private network of your own: one IPv4 range (a private `/16` to `/28`), kept apart from other tenants. A **subnet** is a slice of its VPC's range; VMs and databases get their address from a subnet and keep it.

- **Public subnets** reach the internet (outbound, through the router).
- **Private subnets** don't reach the internet. They can reach the platform's own S3 storage, so databases can back up.
- Everything in one VPC can reach everything else in it, subject to [firewalls](/use/firewalls/).

## A usual layout

One VPC per environment (`prod`, `staging`): web servers in a public subnet, databases and internal services in a private one.

## In the console

**Networking › VPCs** lists them; open one to add subnets. **Networking › Subnets** shows every subnet across your VPCs, with the addresses used and free. When you launch a VM or create a database without a VPC yet, you can create one from the same page.
