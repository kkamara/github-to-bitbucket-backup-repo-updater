#!/usr/bin/env node
const { join, } = require('node:path')
const { mkdir, rm, readdir, } = require('node:fs/promises')
const { existsSync, } = require('node:fs')
const { spawn } = require('node:child_process')
const { log, error, } = require('node:console')
const cli = require('cli'), options = cli.parse({
  time: [ 't', 'An access time', 'time', false],                 // -t, --time TIME   An access time
  work: [ 'w', 'What kind of work to do', 'string', 'sleep' ]  //     --work STRING What kind of work to do
})
const config = require('./config.json')

const run = async () => {
  try {
    log(cli.parse(), options)
    log(cli.parse().time, options.work)
    // log(config.repos)
    
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

    log('Making bitbucket directory:', join(__dirname, 'bitbucket'))

    log('Directory already exists?', existsSync(join(__dirname, 'bitbucket')))

    try {
      const createBitbucketDir = await mkdir(join(__dirname, 'bitbucket'), { recursive: true, })
      if (createBitbucketDir === undefined) {
        throw new Error('The bitbucket folder already exists in current directory.')
      }

      log(`Created directory: ${createBitbucketDir}`)
    // Created directory: bitbucket
    } catch (err) {
      throw new Error('The bitbucket folder already exists in current directory.')
    }

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

    await cleanup()
  } catch (err) {
    error(err.message)
  }
}

const updateRepo = async () => {}

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
