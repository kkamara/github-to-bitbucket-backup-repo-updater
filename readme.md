# github-to-bitbucket-backup-repo-updater
🚧 (Planning)

## Requirements

- https://nodejs.org/en/blog/announcements/v19-release-announce/

## Installation

Update `config.json` with your github and bitbucket remote urls for your repos.

```json
{
  "origins": {
    "https://github.com/kkamara/kelvinkamara.com": "git@bitbucket.org:kkamara2/kelvinkamara.com"
  }
}
```

```bash
  npm install
  chmod +x app.js
  npm cache config set prefix /usr/local
  npm link # execute ghbbupdater command in path
```

## Usage

```bash
  ghbbupdater --time 1 -w test
```

## Building notes

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
