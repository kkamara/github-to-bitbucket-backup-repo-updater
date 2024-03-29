# github-to-bitbucket-backup-repo-updater

:computer: Compatible with Windows, MacOS & Linux.

## Quickstart

```bash
# Set a config.json in your current working directory at your terminal.
npm i github-to-bitbucket-backup-repo-updater
ghbbupdater --help
ghbbupdater
```

## Requirements

- [Node.js](https://nodejs.org)

- [Git](https://git-scm.com/).

## Installation

Update `config.json` with your github and bitbucket remote urls for your repos.

```json
{
  "repos": {
    "kelvinkamara.com": {
      "github": {
        "origin": "https://github.com/kkamara/kelvinkamara.com",
        "branch": "develop"
      },
      "bitbucket": {
        "origin": "git@bitbucket.org:kkamara2/kelvinkamara.com",
        "branch": "develop"
      }
    }
  }
}
```

```bash
  npm install
  chmod +x app.js
  npm cache config set prefix /usr/local # Ignore for Node.js 14.
  npm run build # execute ghbbupdater command in path
  # sudo npm run build for Node.js 14.
```

## Usage

```bash
  npm run start
  npm run start -- --help
  ghbbupdater --help
  ghbbupdater --version
  ghbbupdater
```

## Tests

```bash
  npm run test
```

## Misc

[new Github to bitbucket backup repo updater.](https://github.com/kkamara/ghbbupdater)

[See react boilerplate.](https://github.com/kkamara/react-boilerplate)

[See php scraper.](https://github.com/kkamara/php-scraper)

[See node react boilerplate.](https://github.com/kkamara/node-react-boilerplate)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
