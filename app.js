#!/usr/bin/env node
const { spawn } = require('node:child_process')
const { log, } = require('node:console')
const cli = require('cli'), options = cli.parse({
time: [ 't', 'An access time', 'time', false],                 // -t, --time TIME   An access time
work: [ 'w', 'What kind of work to do', 'string', 'sleep' ]  //     --work STRING What kind of work to do
})

const run = () => {
  log(cli.parse(), options)
  log(cli.parse().time, options.work)
  
  const ls = spawn("ls", ["-la"])

  ls.stdout.on("data", data => {
      console.log(`stdout: ${data}`)
  })

  ls.stderr.on("data", data => {
      console.log(`stderr: ${data}`)
  })

  ls.on('error', (error) => {
      console.log(`error: ${error.message}`)
  })

  ls.on("close", code => {
      console.log(`child process exited with code ${code}`)
  })
}

run()
