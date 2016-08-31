## Documentation
You can see below the API reference of this module.

### `packageJson(input, version, callback)`
Fetches the `package.json` file contents from `npm` or a git repository.

#### Params
- **String** `input`: The package `npm` name or git url. The git urls are friendly, being parsed by [`git-source`](https://github.com/IonicaBizau/git-source).
- **String** `version`: The `npm` package version or a git sha/tag/branch/etc.
- **Function** `callback`: The callback function.

