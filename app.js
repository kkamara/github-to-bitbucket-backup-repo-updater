#!/usr/bin/env node
const { chdir, } = require('node:process')
const { join, } = require('node:path')
const { mkdir, rm, readdir, } = require('node:fs/promises')
const { existsSync, } = require('node:fs')
const { spawn, exec, } = require('node:child_process')
const { log, error, } = require('node:console')
const cli = require('cli'), options = cli.parse({
  time: [ 't', 'An access time', 'time', false],                 // -t, --time TIME   An access time
  work: [ 'w', 'What kind of work to do', 'string', 'sleep' ]  //     --work STRING What kind of work to do
})
const clone = require('git-clone/promise')
const config = require('./config.json')

const run = async () => {
  try {
    log(cli.parse(), options)
    log(cli.parse().time, options.work)
    /*
      "repos": {
        "kelvinkamara.com": {
          "github": {
            "origin": "https://github.com/kkamara/kelvinkamara.com",
            "branch": "develop"
          },
          "bitbucket": { ... }
     */
    // log(config.repos)

    log('Making bitbucket directory:', join(__dirname, 'bitbucket'))

    log('Directory already exists?', existsSync(join(__dirname, 'bitbucket')))

    try {
      const createBitbucketDir = await mkdir(
        join(__dirname, 'bitbucket'),
        { recursive: true, },
      )
      if (createBitbucketDir === undefined) {
        throw new Error('The bitbucket folder already exists in current directory.')
      }

      log(`Created directory: ${createBitbucketDir}`)
    // Created directory: bitbucket
    } catch (err) {
      throw new Error('The bitbucket folder already exists in current directory.')
    }

    for (const repoName in config.repos) {
      log(`Updating repo: ${repoName}`)
      
      await clone(
        config.repos[repoName].github.origin,
        join(__dirname, 'bitbucket', repoName),
      )

      chdir(join(__dirname, 'bitbucket', repoName))
      
      await new Promise((resolve, reject) => {
        exec(
          `git remote add bitbucket ${config.repos[repoName].bitbucket.origin}`, 
          (err, stdout, stderr) => {
          if (err) return reject(err)
          log(`Git replied: ${stdout}`)
          resolve()
        })
      })

      log(`Pushing to bitbucket ${config.repos[repoName].bitbucket.branch}`)

      await new Promise((resolve, reject) => {
        exec(
          `git push bitbucket ${config.repos[repoName].bitbucket.branch}`, 
          (err, stdout, stderr) => {
          if (err) return reject(err)
          log(`Git replied: ${stdout}`)
          resolve()
        })
      })

      chdir(join(__dirname, '..', '..'))

      await repoCleanup(repoName)

      log(`Successfully updated repo: ${repoName}`)
    }

    await cleanup()
  } catch (err) {
    error(err.message)
  }
}

const pwd = async () => {
  await new Promise((resolve, reject) => {
    const pwd = spawn("pwd")
    pwd.stdout.on("data", data => {
      log(`In current directory: ${data}`)
      resolve()
    })
    pwd.on("error", err => {
      reject(err)
    })
  })
}

const updateRepo = async () => {}

const repoCleanup = async (repoName) => {
  try {
    log('Removing directory', join(__dirname, 'bitbucket', repoName))
    await rm(join(__dirname, 'bitbucket', repoName), { recursive: true, force: true, retryDelay: 1000, })
    log(`Removed directory: ${join(__dirname, 'bitbucket', repoName)}`)
  // Created directory: bitbucket
  } catch (err) {
    throw new Error(`Error encountered when removing ${join(__dirname, 'bitbucket', repoName)}.`)
  }
}

const cleanup = async () => {
  try {
    log('Removing directory', join(__dirname, 'bitbucket'))
    await rm(join(__dirname, 'bitbucket'), { recursive: true, force: true, retryDelay: 1000, })
    log(`Removed directory: ${join(__dirname, 'bitbucket')}`)
  // Created directory: bitbucket
  } catch (err) {
    throw new Error('The bitbucket folder is missing in current directory.')
  }
}

run()
