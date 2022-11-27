# github-to-bitbucket-backup-repo-updater
:computer: :shell: 🚧 (Planning)

## Requirements

- https://nodejs.org/en/blog/announcements/v19-release-announce/

- [Git](https://git-scm.com/)

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
  npm cache config set prefix /usr/local
  npm run build # execute ghbbupdater command in path
```

## Usage

```bash
  npm run start
  npm run start -- --help
  ghbbupdater --help
  ghbbupdater
  ghbbupdater --time 1 -w test
  npm run start -- --time 1 -w test
```

## Misc

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
