## Code Guidelines

## Branching conventions

Check our [Branching conventions - TBD]() document.

## Code style

The [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html) is the
basis for our coding style, with additional guidance here where that style guide is not aligned with
ES6 or TypeScript.

## Coding practices

### General
* Prefer writing out words instead of using abbreviations.
* Prefer *exact* names over short names (within reason). E.g., `labelPosition` is better than
`align` because the former much more exactly communicates what the property means.
* Except for `@Input` properties, use `is` and `has` prefixes for boolean properties / methods.
* Use PascalCase for type names.
* Do use PascalCase when naming classes.
* Do use PascalCase when naming interfaces.
* Do not use "I" as a prefix for interface names.
* Use PascalCase for enum values.
* Use lower camel case to name properties and methods.
* Do not use "_" as a prefix for private properties.
* Use whole words in names when possible.

#### Do's and Don'ts
Check [typescript documentation](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html) for do's and don'ts.