# NG UI KIT, Angular Component to Siglo 21.

Welcome to ng-ui-kit, a common UI component library. This library exposes a set of common UI component for angular, in order to be used as building blocks that help and accelerate the developing process of siglo 21 web applications
This library is a work in progress. Please check out our list of
[issues](https://code.ues21.edu.ar/ui-lab/ng-ui-kit/-/issues). Feel free to make comments there.


**Team Leads/Commiters:**

- Usubiaga, Juan <juan.usubiaga@bitlogic.io>

## Table of Contents

- [Getting started](#getting-started)
- [How to use the library](#how-to-use-the-library)
- [Contributing to the project](#contributing-to-the-project)
- [You've found a bug?](#youve-found-a-bug)
- [Contact](#contact)
- [Licence](#licence)

## Getting started

See the [Getting Started Guide](GETTINGSTARTED.md) if you're interested to develop new components.

If you'd like to contribute, you must follow our [contributing guidelines](CONTRIBUTING.md).

If you want to see the components working, try it with a live [demo - TBD].


## How to use the library

Before start using this library, make sure to have configured your NPM client to use the NPM private registry. Follow this [documentation]()
NPM private registry [Nexus](https://nexus.uesiglo21.edu.ar/#browse/browse:npm-private:%40bitlogic)

To install this library, run:

```bash
$ npm install @bitlogic/ng-ui-kit
```

and then from your Angular `AppModule`:

```typescript
...
// Import the module
import { BitlogicModule } from '@bitlogic/ng-ui-kit';

@NgModule({
  ...
  imports: [
    ...
    // Specify library as an import
    BitlogicModule
  ],

  ...
})
export class AppModule { }
```

Once the library is imported, you can use its components, directives and pipes in your Angular application, for example, to use the totalizer component:

```html
<!-- You can now use your library component in app.component.html -->
<bit-toolbar version="{{currentVersion}}" title="{{title}}" currentDate="{{currentDate}}" (openProfile)="onOpenProfile()"></bit-toolbar>    
```

Please, take a look at the `demo` Angular app for a complete list and detailed usage for all of the available components.

## Contributing to the project

Please check our [Contributing process](CONTRIBUTING.md) Process.

## You've found a bug?

Please check our [Contributing process](CONTRIBUTING.md) Process.

## Contact

Contact us in [Teams]()

## License

Copyright (c) 2021 Bitlogic, LLC.  All rights reserved.
