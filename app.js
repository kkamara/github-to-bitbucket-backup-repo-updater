#!/usr/bin/env node
const { chdir, } = require('node:process')
const { join, } = require('node:path')
const { mkdir, rm, readdir, } = require('node:fs/promises')
const { existsSync, } = require('node:fs')
const { spawn } = require('node:child_process')
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
    // log(config.repos)
    
    await pwd()

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

    await clone(
      'https://github.com/kkamara/node-react-boilerplate',
      join(__dirname, 'bitbucket', 'node-react-boilerplate'),
    )

    chdir(join(__dirname, 'bitbucket', 'node-react-boilerplate'))

    await pwd()

    const addRemote = require('git-add-remote')()
    addRemote(
      'bitbucket', 
      'git@bitbucket.org:kkamara2/node-react-boilerplate', 
      function(err) {
        if (err) return log(err)
      }
    )

    const git = spawn("git", ['push', 'bitbucket', 'main',]);

    await new Promise((resolve, reject) => {
      git.stdout.on("data", data => {
         log(`Git replied: ${data}`)
         resolve()
      })
      git.on("error", err => {
         reject(err)
      })
    })

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
