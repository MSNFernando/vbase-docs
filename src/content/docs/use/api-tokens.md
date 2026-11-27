---
title: API tokens
description: Use the vBase API from scripts and AI tools.
sidebar:
  order: 4
---

Everything in the web console is also in the **API** at `https://<console>/api/v1/`. Scripts and AI tools sign in with an **API token**.

1. In the console, **Settings › API tokens › Create token**.
2. Give it a name, the **least role** the work needs (viewer to look, operator to build, admin to delete or manage databases) and a short lifetime.
3. Copy the token: it's shown once.

Send it as a bearer token:

```sh
curl -H "Authorization: Bearer vbt_…" https://<console>/api/v1/me
```

A token belongs to one tenant and can't do more than its role allows. Revoke it in the same place when it's no longer needed.

## For AI tools

Your console serves **`/llms.txt`**: a description of the API and how to use it safely, written for AI assistants. Point your assistant at it along with a token.
