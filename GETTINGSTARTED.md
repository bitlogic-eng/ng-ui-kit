## Getting Started with NG UI KIT Components

Before start using this library, make sure to have configured your NPM client to use the NPM private registry. 

  * Repository: [Nexus](https://nexus.uesiglo21.edu.ar/#browse/browse:npm-private:%40s21).
  * Be sure to have a file `.npmrc` with the follow line
      ```sh
      @bitlogic:registry=https://nexus.uesiglo21.edu.ar/repository/npm-private/
      ```

## Environment

1. Install  [nodejs](https://nodejs.org/) (tested with v14.15.4 or later)
  npm (version 6.14.10 or later)
2. Install [Angular-CLI](https://github.com/angular/angular-cli) (tested with 11 or later)


## Development

Before start developing the library, make sure you have ``npm version v6.14+`` installed.

### Creating a new component

  1. Run the following commands:

      ```sh
      ng g module components/hello
      ng g component components/hello
      ```

  2. These commands should be generated the following files (project/bitlogic/scr/lib/components):

      * hello.component.html
      * hello.component.scss
      * hello.component.spect.ts
      * hello.component.ts
      * hello.modules.ts

      Have fun coding your component!

  3. Exports the component (`src/public-api.ts`)

      The file src/public-api.ts is intended to enumerate and expose specific functionality for external use
      
      Add the following lines at this file

          export * from './lib/components/hello/hello.module';
          export * from './lib/components/hello/hello.component';

  
  4. Exports the component (`scr/lib/components/hello/hello.module.ts`)

        ```ts
          @NgModule({
            ...
            exports: [
              HelloComponent
            ]

          })  
        ```

  5. Exports the component (`src/lib/bitlogic.module.ts`)


      ```ts
      ...

      import { HelloModule } from './components/hello/hello.module';

      ...

        exports: [
          ...
          HelloModule    
        ]

      ```


Now you're ready to build the library and make your new component ready for publishing!

## Linters

The preferred language to use for development is TypeScript, but still we could find some scripts as part of development tools written in JavaScript.
To lint the project, `*.ts` and `*.js` files, run the following command:

    ```bash
    $ npm run lint
    ```

## Testing

To launch the test suite with coverage, run
    ```bash
    $ npm test
    ```

This command will launch the browsers configured, execute the test suite and collect coverage. The browser will exit as soon as the execution finishes.

To debug the tests, run the following command, and the browser will remain open,

    ```bash
    $ npm run test:debug
    ```

The tests are executed via [Karma](https://karma-runner.github.io) test runner, and will be written with [Jasmine](https://jasmine.github.io/).


## Building

To generate a build.

```bash
$ npm run build
```

If want to generate a build for watch.

```bash
$ npm run build-w
```


## Publishing

Before pubish a new version of the library, generate a [release version - TBD].

To publish the components library to the NPM private registry, first a build must be generated,
```bash
# run the following on the project root
$ npm run build
```

Then, publish the library,
```bash
# move to the dist folder
$ cd dist/bitlogic
# publish it
$ npm publish
```

## Demo library Components setup

To easily try out the library components and build a demo web app, run the following commands:

1. Enable syslink to package folder ([Ref. npm-link](https://docs.npmjs.com/cli/v7/commands/npm-link))

    ```bash
    # Create a symbolic link to the dist folder after the first build execution
    $ npm run symlink
    ```

2. Clone https://code.ues21.edu.ar/ui-lab/ng-ui-kit-demo

    ```bash
    $ git clone git@code.ues21.edu.ar:ui-lab/ng-ui-kit-demo.git .
    ```

3. In the ng-ui-kit-demo run following commads

    ```bash
    $ npm link @bitlogic/ng-ui-kit
    ```

4. Run the demo app

    ```bash
    $ npm start
    # Check localhost:4200
    ```
