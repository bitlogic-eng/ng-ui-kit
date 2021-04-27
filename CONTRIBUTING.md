# Contributing to NG UI KIT Components

## Trusted Commiters

- Usubiaga, Juan <juan.usubiaga@bitlogic.io>


## Where do I start?

Check the [Getting started](GETTINGSTARTED.md) guidelines to start contributing with the project.

## <a name="code-guidelines"></a> Conventions
If you want to contribute with the project, please, follow our [Code guidelines](CODING_STANDARDS.md)

## <a name="issue"></a> Found an Issue?
If you find a bug in the source code or a mistake in the documentation, you can help us by
[submitting an issue](#submit-issue) to our GitHub Repository. Including an issue
reproduction is the absolute best way to help the team quickly
diagnose the problem. Screenshots are also helpful.

You can help the team even more and [submit a Pull Request](#submit-pr) with a fix.

## <a name="feature"></a> Want a Feature?
You can *request* a new feature by [submitting an issue](#submit-issue) to our GitHub Repository. If you would like to *implement* a new feature, please submit an issue with
a proposal for your work first, to be sure that we can use it.
Please consider what kind of change it is:

* For a **Major Feature**, first open an issue and outline your proposal so that it can be
discussed. This will also allow us to better coordinate our efforts, prevent duplication of work,
and help you to craft the change so that it is successfully accepted into the project.
* **Small Features** can be crafted and directly [submitted as a Pull Request](#submit-pr).

### <a name="submit-issue"></a> Submitting an Issue
We keep track of the issues in the github Issues tab.
Before you submit an issue, please check the issues list, maybe has been already reported.

If your issue appears to be a bug, and hasn't been reported, open a new issue.
Help us to maximize the effort we can spend fixing issues and adding new
features by not reporting duplicate issues.  Providing the following information will increase the
chances of your issue being dealt with quickly:

* **Overview of the Issue** - Brief description about the issue
* **Versions** - which versions of Ng UI KIT Lib are affected
    (e.g. 0.6.12-alpha.5)
* **Motivation for or Use Case** - explain what are you trying to do and why the current behavior
    is a bug for you
* **Browsers and Operating System** - is this a problem with all browsers?
* **Reproduce the Error** - provide unambiguous set of steps to reproduce the issue
* **Screenshots** - Due to the visual nature of Ng Components, screenshots can help the team
    triage issues far more quickly than a text description.
* **Related Issues** - has a similar issue been reported before?
* **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
    causing the problem (line of code or commit)

### <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

- Create a branch from the master with the following name convention: `feature/[issueId]-short-description`.
- Push the just created branch
- Create a Pull Request (PR) and push changes periodically (so everybody can track/review the progress of the contribution)
- Run the demo project to be sure that all changes are working.
- Ask some reviewer to review and merge your changes when it is ready


Try to use the PR as main source of collaboration, keeping all discussion in the PR comments.
Pushing frequently and asking for feedback will increase the chances to make a successful PR.

## Build process

The builds run automatically by [CI - TBD] on every PRs and merge into master.

## Commit Message Format ([Semantic Commit Messages](https://www.conventionalcommits.org/en/v1.0.0/))
Use "Semantic Commit Messages", each commit message consists of a **header**, a **body** and a **footer**.  The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory, and the **body** and a **footer** is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing tests or correcting existing tests
* **build**: Changes that affect the build system, CI configuration or external dependencies
            (example scopes: gulp, broccoli, npm)
* **chore**: Other changes that don't modify `src` or `test` files

### Scope
The scope could be anything specifying place of the commit change. For example
`toolbar`, `button`, etc.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
reference Jira issues that this commit **Closes**.

```
Closes #234
```
In case of multiplese issues use semicolon between issues.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.


## Sprint schedule

TBD

## Road map

[UI Kit - Portal Alumno](https://xd.adobe.com/view/813c75e4-e982-42ee-9f0e-38f3265a30e7-d46f/)


## Helpful links

* For build process check [TBD]().
* For more info check our [Wiki]().
