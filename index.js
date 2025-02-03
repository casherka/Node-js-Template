import express from 'express'
import chalk from 'chalk'

import urls from './urls.js'

const port = 80

const webSite = express()

urls.forEach((element) => {
    webSite.get(element.url, (req, res) => {
        element.func(res)
    })
})

webSite.listen(port, () => {
    console.log("Server started on: " + chalk.blue("http://127.0.0.1:" + port))
})