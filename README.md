# QuickJS Types

> TypeScript definitions for the QuickJS Engine!

&nbsp; <!-- Create some extra space -->

[![Build & Publish Page](https://github.com/mgred/quickjs-types/actions/workflows/build_page.yaml/badge.svg?branch=main)](https://github.com/mgred/quickjs-types/actions/workflows/build_page.yaml)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Usage

Add a submodule to a project, e.g. `types/quickjs`:

```bash
git submodule add git@github.com:mgred/quickjs-types.git types/quickjs
```

Extend `tsconfig.json` to use types:

```json
{
  "compilerOptions": {
    "typeRoots": ["types"]
  }
}
```

## Tests

All tests live in `test.ts`.
To verify everyting passes, run:

```bash
tsc -p .
```

## License

Code in this repository is licensed under the [GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Todos

- [ ] Add more tests
- [ ] Add more documentation (comments)
