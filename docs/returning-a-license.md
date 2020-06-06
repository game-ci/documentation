# Returning a license

[![Actions status](https://github.com/webbertakken/unity-return-license/workflows/Actions%20%F0%9F%98%8E/badge.svg?event=push&branch=master)](https://github.com/webbertakken/unity-return-license/actions?query=branch%3Amaster+event%3Apush+workflow%3A"Actions%20%F0%9F%98%8E")

---

GitHub Action to [return a Unity license](https://github.com/marketplace/actions/unity-return-license).

Part of the [Unity Actions](https://github.com/webbertakken/unity-actions) collection.

---

### License types

- **Personal:** This step is not necessary, as Unity does not allow returning of
  personal licenses.

- **Professional:** Use this action to return your license and free up a spot
  towards the maximum number of active licenses.

### Documentation

See the
[Unity Actions](https://github.com/webbertakken/unity-actions)
collection repository for complete workflow documentation and reference
implementations.

## Usage

When your workflow has finished, or ends in a failure; return the license.

Add this step to your workflow:

```yaml
# Return License
- name: Return license
  uses: webbertakken/unity-return-license@v1
  if: always()
```

## More actions

Visit
[Unity Actions](https://github.com/webbertakken/unity-actions)
to find related actions for Unity.

Feel free to contribute.

## Licence

[MIT](./LICENSE)
