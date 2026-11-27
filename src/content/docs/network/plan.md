---
title: Plan your network
description: Management network, router uplink and public addresses for vBase.
---

vBase uses three kinds of network. Plan the addresses before you install.

## Management network

Each server's management port, with a **fixed address**. The web console, the API and SSH are reached here, and the servers talk to each other here.

- Use a network (or VLAN) of its own that only administrators reach.
- The setup wizard asks for the address, gateway and DNS server.

## The router's uplink

vBase runs its router (VyOS) as a VM. Its uplink connects the tenants' private networks to the internet.

- A second server port for it keeps tenant traffic off the management network.
- **Give the router a fixed address** on its uplink network (a DHCP reservation on your firewall is fine). Routes to it must not change when a lease renews.

## Public addresses

For services reached from the internet (floating IPs, the HTTPS edge), route public addresses to the router's uplink address. The router answers for them; your firewall only needs a static route per address (or range) and to allow the traffic through.

## Between servers

With two or more servers, a direct, fast link between them (10 Gb/s or more) carries the private networks' tunnels and Ceph's copies, so they don't compete with management traffic.

## Example

One small layout, with a UniFi gateway in front:

| Network | VLAN | Addresses | Used for |
|---|---|---|---|
| Management | 250 | `10.250.0.0/24`, servers at `.10`, `.11` | console, API, SSH |
| Router uplink | 251 | `10.251.0.0/30`, router at `.2` | tenant traffic to the internet |
| Public | (routed) | a small public range, routed to `10.251.0.2` | floating IPs, the edge |
| Server to server | (direct cable) | private | tunnels, Ceph |

The private networks tenants create (VPCs) use their own ranges, chosen in the console. They must not overlap the ranges above; vBase refuses ones that do.
