# QuickJS Types

> TypeScript definitions for the QuickJS Engine!

## Use

Add a submodule to a project:

```bash
mkdir -p types/quickjs
git submodule add htts://github.com/mgred/quickjs-types types/quickjs
```

Extend `tsconfig.json` to use types:

```json
{
  "typeRoots": ["types"],
  "types": ["quickjs"]
}
```

## Tests

```bash
make test
```

## License

[GNU General Public License v3](https://www.gnu.org/licenses/gpl-3.0.en.html)

## Todos

- Add more tests
