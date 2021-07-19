# QuickJS Types

> TypeScript definitions for the QuickJS Engine!

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

[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Todos

- Add more tests
- Add more documentation (comments)
