# Returning a license

Manually returning a license is **usually never necessary**,
unless when running into an _unrecoverable error_ while having a license active.

## Basic setup

You may use [Unity - Return license](https://github.com/marketplace/actions/unity-return-license)
to return your license and free up a spot towards the maximum number of active licenses.

Add this step to your workflow:

```yaml
# Return License
- name: Return license
  uses: webbertakken/unity-return-license@v1
  if: always()
```

> _**Note:** Unity does not allow returning of personal licenses._
