# Caching

## What is cached now

- LFS files
- Unity Library folder

## Development roadmap

- Full project working directory support
- Selectively skip caching when hashed cache selection doesn't change
- `tar` supports various types of compression. This will be exposed as an option in the Cloud Runner
  API.
- Branch is used as cache key, new branch always misses cache once
