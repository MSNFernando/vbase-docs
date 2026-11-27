---
title: Databases and backups
description: Managed PostgreSQL with continuous backups and point-in-time restore.
sidebar:
  order: 3
---

**Databases** gives you a PostgreSQL server of your own, in a subnet of your VPC, managed by vBase.

- The **admin password** is shown once when the server is created. vBase doesn't keep it: if it's lost, set a new one.
- Inside a server, create **databases** and **users**, and give each user read or read-write access to the databases it needs. Give each application its own user rather than the admin password.
- The **query editor** runs SQL from the browser: read-only by default, with write mode for operators. Every run is in the activity log.

## Backups

A new database has backups from the start:

- Every change is **archived continuously** (at least once a minute).
- A **daily backup** at the database's backup hour: full on Sundays, differential otherwise.
- Backups are **encrypted**, stored in the database's own bucket on the platform's S3 storage, and **kept 7 days**.
- **Back up now** takes one more at any time.

## Restore

A restore makes a **new database** from another one's backups. The original carries on unchanged.

1. Open the database, then **Backups › Restore…**
2. Choose **the latest** (everything archived, within about a minute of now) or **a moment in time**: any second in the range shown, for example just before a mistake.
3. Name the new database and choose its subnet.

The new database has everything the original had at that moment, its own backups, and a new admin password, shown once. Check it, then move your application over.

:::caution
Deleting a database deletes its backups too. To keep a copy, restore it to a new database first.
:::
