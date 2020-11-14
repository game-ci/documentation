# Troubleshooting

Below you'll find a collection of answers to commonly reported problems.

## My workflow isn't working because

### Scripts have compiler errors.

#### Error

```console
Scripts have compiler errors.
(Filename: ./Runtime/Utilities/Argv.cpp Line: 361)

Aborting batchmode due to failure:
Scripts have compiler errors.
```

#### Solution

Likely you have a missing script or assembly.

Make sure your branch is clean and all files are indeed present:

- No accidentally ignored files (i.e. ignored `.tmp` might match text mesh pro);
- No tracked files that you expected to be ignored;
- All packages listed;
- No pre-build steps that change your project differently from how that happens locally;

A good way to verify this, is to (locally) clone the Unity project in a new folder and run the build from there.
