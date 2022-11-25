#!/usr/bin/env node
const { spawn } = require('node:child_process')
const { log, } = require('node:console')
const cli = require('cli'), options = cli.parse({
  time: [ 't', 'An access time', 'time', false],                 // -t, --time TIME   An access time
  work: [ 'w', 'What kind of work to do', 'string', 'sleep' ]  //     --work STRING What kind of work to do
})
const config = require('./config.json')

const run = () => {
  log(cli.parse(), options)
  log(cli.parse().time, options.work)
  log(config)
  
  const ls = spawn("ls", ["-la"])

  ls.stdout.on("data", data => {
    log(`stdout: ${data}`)
  })

  ls.stderr.on("data", data => {
    log(`stderr: ${data}`)
  })

  ls.on('error', (error) => {
    log(`error: ${error.message}`)
  })

  ls.on("close", code => {
    log(`child process exited with code ${code}`)
  })
}

const updateRepo = () => {}

const cleanup = () => {}

run()
