---
title: Requirements
description: The servers, disks, USB sticks and network vBase needs.
sidebar:
  order: 2
---

## Servers

- **x86-64 with UEFI.** Secure Boot can stay on: vBase boots with signed components.
- **Virtualisation enabled** in the firmware (Intel VT-x or AMD-V).
- **Memory:** 8 GB runs a small lab; more lets you run more VMs. The control plane, Ceph and the router use part of it.
- **Network:** at least one port for management. A second port for the router's uplink keeps tenant traffic off your management network.

## Disks

- **A USB stick per server: 32 GB or larger**, USB 3, from a known brand. The server runs from it and keeps its settings on it (and, on the control-plane server, its database).
- **One or more SSDs** in the server for VM storage and Ceph. vBase erases a disk only after you confirm, from the console menu.
- For data that survives a disk failure, give Ceph **two or more disks**, ideally across two or more servers.

:::caution[Check second-hand disks]
Worn SSDs can accept writes and then fail to read them back. Check a used disk's health (its SMART wear indicator and error counts) before giving it to vBase.
:::

## Network

You'll need a fixed address for each server's management port, and a gateway and DNS server for it. See [Plan your network](/network/plan/).
