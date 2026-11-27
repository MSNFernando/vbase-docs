---
title: Firewalls
description: Control what can reach each VM, even inside one subnet.
sidebar:
  order: 2
---

A **firewall** (a security group) is a set of rules that decides what may reach a VM and what it may send. Firewalls are enforced on **each VM's own network port**, so they apply between VMs in the same subnet as well as from other subnets and the internet.

- **Inbound is denied** unless a rule allows it. **Outbound** is what the rules allow.
- **Replies always get through**: allow inbound HTTPS and the answers go back out without an outbound rule.
- A VM can't send as another VM's address, so a rule that trusts a firewall's members can't be fooled.
- A VM has **one to five** firewalls; their rules add up.

## Rules

Each rule has a **protocol** (TCP, UDP, ICMP or all), a **port** or range for TCP and UDP (`443`, `8000-8100`, or all), and a **peer**:

- an **address range**, such as `203.0.113.0/24` or one address; or
- **another firewall** in the same VPC, meaning every VM in it, kept up to date as VMs come and go.

## The default firewall

Every VPC has a **default** firewall: inbound from its own members, all outbound. VMs get it unless you choose others. It can't be deleted.

## A usual setup

A firewall per tier, each allowing only what the next tier needs:

| Firewall | Inbound |
|---|---|
| `web` | TCP 443 and 80 from anywhere (`0.0.0.0/0`) |
| `app` | TCP 8080 from the `web` firewall |
| `db` | TCP 5432 from the `app` firewall |

Changes apply within seconds, without restarting anything. Choose a VM's firewalls when you launch it, or change them on its page.

:::note
Managed databases aren't filtered by firewalls yet: they're reachable from their own VPC only.
:::
