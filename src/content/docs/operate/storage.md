---
title: Storage
description: Set up a server's disks for VM storage and Ceph.
sidebar:
  order: 2
---

Until a server's disks are set up, its home screen shows **VM storage: not set up**. Set them up from **F2 › Storage**, or with the `vbase-storage` command.

## Disk layouts

A disk is always erased first, after you confirm:

| Layout | The disk holds |
|---|---|
| `pool` | the whole disk is local VM storage |
| `split` | part local VM storage (60 GiB by default), the rest for Ceph |
| `ceph` | the whole disk for Ceph |

Swap and the system journal move onto the first disk too, so the USB stick isn't worn out by them.

## Ceph

Ceph keeps VM disks, volumes and object storage on several disks at once, so one failing doesn't lose data. Its steps, in order:

```sh
sudo vbase-storage prepare --disk /dev/sdX --layout ceph --yes   # each Ceph disk
sudo vbase-storage ceph-bootstrap   # create the cluster on this server
sudo vbase-storage ceph-add-osds    # use the prepared disks
sudo vbase-storage rbd-setup        # the pool for VM disks and volumes
sudo vbase-storage rgw-setup        # S3 object storage (HTTPS)
sudo vbase-storage status           # check
```

Each step can be run again safely: it does only what's missing.

:::note
Managing disks and Ceph from the web console, and joining several servers into one cluster, are being built. Until then, use the console menu or the command above.
:::
