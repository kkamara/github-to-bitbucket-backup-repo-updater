install:
	poetry install

test:
	poetry run pytest

test-coverage:
	poetry run pytest --cov=github_to_bitbucket_backup_repo_updater --cov-report xml

lint:
	poetry run flake8 github_to_bitbucket_backup_repo_updater

selfcheck:
	poetry check

check: selfcheck test lint

build: check
	poetry build

go: 
	poetry run github-to-bitbucket-backup-repo-updater

.PHONY: install test lint selfcheck check build
