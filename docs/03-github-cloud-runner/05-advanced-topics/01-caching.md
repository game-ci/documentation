# Caching

## What is cached now

- LFS files
- Unity Library folder

## Development roadmap

- Full project working directory support
- Optional lz4 compression or faster (but larger storage requirements) tar archiving
- Branch is used as cache key, new branch always misses cache once, we can make a best guess here
  and try and recover a recent valid cache entry
