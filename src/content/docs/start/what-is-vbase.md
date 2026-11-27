---
title: What is vBase?
description: A private cloud platform that runs on your own servers.
sidebar:
  order: 1
---

vBase turns ordinary x86-64 servers into a private cloud, with the services you'd expect from a public one:

- **Virtual machines**, Linux and Windows, with consoles in the browser, snapshots and copies.
- **Private networks**: VPCs and subnets, outbound internet, and firewalls on every VM.
- **Storage**: block volumes and S3-compatible object storage on Ceph, spread over the servers' own disks.
- **Managed PostgreSQL** with continuous backups and point-in-time restore.
- **vStrata**, the web console, and an **API** for scripts and AI tools.

## How it fits together

- Each server boots and runs from a **USB stick** written with [vBase Imager](/start/write-the-stick/). Its own disks hold VM storage and Ceph.
- One server runs the **control plane**: the web console, the API and the database that tracks everything, like vCenter. Every server is also a **hypervisor** that runs VMs, so the first server can be the only one.
- A **router** (VyOS, run by vBase as a VM) connects the private networks to the internet and to each other.
- Several **tenants** (teams or customers) can share one cloud, each with their own VMs, networks and users.

Ready? Start with the [requirements](/start/requirements/).
