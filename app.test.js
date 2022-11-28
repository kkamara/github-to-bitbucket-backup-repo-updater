const { ok, } = require('node:assert')
const { mkdir, rm, } = require('node:fs/promises')
const { join, } = require('node:path')
const clone = require('git-clone/promise')
const { existsSync, } = require('node:fs')
const { log, } = require('node:console')

describe('Test app', () => {
  beforeEach(async () => {
    if (existsSync(join(__dirname, 'bitbucket-test'))) {
      return
    }
    const createBitbucketDir = await mkdir(
      join(__dirname, 'bitbucket-test'),
      { recursive: true, },
    )
    if (createBitbucketDir === undefined) {
      throw new Error('The bitbucket-test folder already exists in current directory.')
    }

    log(`Created directory: ${createBitbucketDir}`)
  // Created directory: bitbucket
  })
  afterEach(async () => {
    if (!existsSync(join(__dirname, 'bitbucket-test'))) {
      return
    }
    log('Removing directory', join(__dirname, 'bitbucket-test'))
    await rm(join(__dirname, 'bitbucket-test'), { recursive: true, force: true, retryDelay: 1000, })
    log(`Removed directory: ${join(__dirname, 'bitbucket-test')}`)
    // Created directory: bitbucket-test
  })
  describe('Repo cloning', async () => {
    it('should clone kelvinkamara.com repo', async () => {
      await clone(
        'https://github.com/kkamara/kelvinkamara.com',
        join(__dirname, 'bitbucket-test', 'kelvinkamara.com'),
      )

      ok(existsSync(join(__dirname, 'bitbucket-test', 'kelvinkamara.com')))
    })
  })
  describe('Repo cleanup', async () => {
    it('should remove kelvinkamara.com repo', async () => {
      await clone(
        'https://github.com/kkamara/kelvinkamara.com',
        join(__dirname, 'bitbucket-test', 'kelvinkamara.com'),
      )

      log('Removing directory', join(__dirname, 'bitbucket-test', 'kelvinkamara.com'))
      await rm(join(__dirname, 'bitbucket-test', 'kelvinkamara.com'), { recursive: true, force: true, retryDelay: 1000, })
      ok(true)
    // Created directory: bitbucket-test
    })
  })
})
