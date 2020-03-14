module.exports = app => {

  const fs = require('fs'),
    path = require('path'),
    routerPath = path.resolve(__dirname),
    allFolder = fs.readdirSync(routerPath)

  allFolder.forEach(directory => {
    const routerFolder = routerPath + '/' + directory
    if (fs.lstatSync(routerFolder).isDirectory())
      fs.readdirSync(routerFolder).forEach(route => {
        if (route.indexOf('.js') > -1) {
          require(routerPath + '/' + directory + '/' + route)(app)
        }
      })
  });

  // register 404 filter for path not belong in any router
  app.use("*", (req, res) => {
    res.status(404).send("Welcome to The Hell :evil:")
  })
}
