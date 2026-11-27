---
title: Release notes
description: What changed in each vBase release.
---

Releases are on [vbase-releases](https://github.com/MSNFernando/vbase-releases/releases), with their checksums. Version numbers are `YEAR.MINOR.PATCH`: the year the release line started, then feature releases, then fixes.

## 2026.1.0 (27 November 2026)

- **Networking:** VPCs and subnets with DHCP; outbound internet for public subnets; private subnets reach platform S3 only. **Firewalls** on every VM's port, with a default firewall per VPC.
- **Managed PostgreSQL:** database servers in your VPC, databases and users inside them, a query editor, **continuous backups** and **point-in-time restore**.
- **API tokens**, and `llms.txt` describing the API for AI tools.
- A refreshed web console with a live dashboard.

Known limits: no in-place updates; set the web console password from the console menu after setup.

## 0.1 (26 November 2026)

The first release: VMs (Linux and Windows) on local storage or Ceph, block volumes, S3 object storage, networking between servers, and the console menu.
