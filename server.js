const { app } = require('./app');

const PORT =5000;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})


module.exports = { server }