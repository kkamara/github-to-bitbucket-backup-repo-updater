# nodejs-github-to-bitbucket-backup-repo-updater

:computer: Compatible with Windows, MacOS & Linux.

## Quickstart for MacOs & Linux Machines

```bash
# Set a config.json in your current working directory at your terminal.
npm i nodejs-github-to-bitbucket-backup-repo-updater
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
        "branch": "main"
      },
      "bitbucket": {
        "origin": "git@bitbucket.org:kkamara2/kelvinkamara.com",
        "branch": "main"
      }
    }
  }
}
```

```bash
  npm install
```

#### Using a MacOs or Linux Machine?

```bash
  chmod +x app.js
  npm cache config set prefix /usr/local # Ignore for Node.js 14.
  npm run build # execute ghbbupdater command in path
  # sudo npm run build for Node.js 14.
  ghbbupdater --help
```

## Usage

```bash
  npm run start
  npm run start -- --help
```

## Tests

```bash
  npm run test
```

## Misc

[See Github to Bitbucket Backup Repo Updater](https://github.com/kkamara/php-github-to-bitbucket-backup-repo-updater) made with PHP.

[See PHP ReactJS Boilerplate](https://github.com/kkamara/php-reactjs-boilerplate).

[See ReactJS Boilerplate](https://github.com/kkamara/reactjs-boilerplate).

[See PHP Scraper](https://github.com/kkamara/php-scraper).

[See NodeJS ReactJS Boilerplate](https://github.com/kkamara/nodejs-reactjs-boilerplate).

[PHP Docker Skeleton](https://github.com/kkamara/php-docker-skeleton).

[Python Docker Skeleton](https://github.com/kkamara/python-docker-skeleton).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
