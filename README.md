# github-to-bitbucket-backup-repo-updater

💻 (2022) Compatible with Windows, MacOS & Linux.

## Requirements

* [Python3](https://www.python.org/)

## Installation

```bash
  make install
```

Update `config.json` with your github and bitbucket remote urls for your repos, including your branches.

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

## Usage

```bash
  make go
```

## Tests

```bash
  make test
```

## Misc

[See python react boilerplate.](https://github.com/kkamara/python-react-boilerplate)

[See python docker skeleton.](https://github.com/kkamara/python-docker-skeleton)

[See python for finance.](https://github.com/kkamara/python-for-finance)

[See python selenium.](https://github.com/kkamara/python-selenium)

[See react boilerplate.](https://github.com/kkamara/react-boilerplate)

[See desktop react boilerplate.](https://github.com/kkamara/desktop-react-boilerplate)

### Planning notes

```bash
  mkdir bitbucket
  cd bitbucket
  git clone https://github.com/kkamara/php-scraper
  cd php-scraper
  git remote set-url origin git@bitbucket.org:kkamara2/php-scraper
  git push
```

```json
{
  "origins": {
    "https://github.com/kkamara/kelvinkamara.com": "git@bitbucket.org:kkamara2/kelvinkamara.com"
  }
}

```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
