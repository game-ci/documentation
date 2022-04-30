## Custom Hooks

```yaml
- commands: |
    echo "hello world!"
  name: example hook
  hook: # Options: before, after or all
    - before
```

Extra hooks

- should retry hook
- init hook
- cleanup hook
