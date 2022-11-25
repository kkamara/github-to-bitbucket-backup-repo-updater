# github-to-bitbucket-backup-repo-updater
🚧 (Planning)

## Requirements

- https://nodejs.org/en/blog/announcements/v19-release-announce/

## Installation

```bash
  npm install
  chmod +x app.js
  npm cache config set prefix /usr/local
  npm link # execute ghbbupdater command in path
```

## Usage

```bash
  ghbbupdater --test 1 -w test
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

