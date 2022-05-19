# Secrets

Secrets are transferred to workload containers as secrets via the built-in secrets system the provider being used supports.

## Kubernetes
secrets are created as native kuberentes secret objects and mounted to job containers as env variables.

## AWS
secrets are created as aws secret manager secrets and mounted to fargate tasks from secrets to env variables.
