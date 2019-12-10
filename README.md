# clausmartinsen.no

> Code for the personal homepage of Claus Martinsen.

![CI status](https://github.com/clauswrm/clausmartinsen.no/workflows/Node%20CI/badge.svg)
![codecov](https://codecov.io/gh/clauswrm/clausmartinsen.no/branch/master/graph/badge.svg?token=Z92v0sNSh3)
![Heroku](https://heroku-badge.herokuapp.com/?app=clausmartinsen-no&style=flat&svg=1)
![Uptime Robot ratio (30 days)](https://img.shields.io/uptimerobot/ratio/m783891447-1ce4e18a3ab77fe3d9e7a11a)
![Dependencies](https://david-dm.org/clauswrm/clausmartinsen.no.svg)
![License](https://img.shields.io/github/license/clauswrm/clausmartinsen.no)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

This is the code for my personal homepage where I experiment with different technologies for my own fun and learning. The website can be found at <https://clausmartinsen.no>.

## Development

### Getting started

The steps needed to start developing on the project are as follows:

```shell
git clone https://github.com/clauswrm/clausmartinsen.no.git
cd clausmartinsen.no/
npm install
```

Now you have a fully functional project for development.

To run the project locally in development mode simply run:

```shell
npm start
```

The default port is `3000`.

### Commiting and CI

The project uses [ESLint][eslint] and [Prettier][prettier] to make code style and formatting consistent. Tests should also be written whenever possible. This is enforced by CI when code is pushed to the repository. Therefore, before you push your changes, make sure to run the following commands:

```shell
npm test
npm run lint
npm run format-check
```

Make sure they return no errors.

The complete CI configuration is found in [node_ci.yml][ci].

## Deploying

The project is configured to automatically deploy to [Heroku][heroku] from the `master`-branch after successful CI. There the project is served using the [mars/create-react-app-buildpack][buildpack].

In a manual deployment, you would need to run `npm build` to generate the static files and serve them with a web server (like [NGINX][nginx]).

## Links

* Project homepage: <https://clausmartinsen.no>
* Repository: <https://github.com/clauswrm/clausmartinsen.no>

## Licensing

The code in this project is licensed under MIT license.

[ci]: <https://github.com/clauswrm/clausmartinsen.no/blob/master/.github/workflows/node_ci.yml> "Node CI"
[eslint]: <https://eslint.org/> "ESLint"
[prettier]: <https://prettier.io/> "Prettier"
[heroku]: <https://heroku.com/> "Heroku"
[nginx]: <https://www.nginx.com/> "NGINX"
[buildpack]: <https://github.com/mars/create-react-app-buildpack> "create-react-app-buildpack"
