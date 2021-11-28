module.exports = {
    main: (req,res) => {
        return res.render('index.ejs')
    },
    secondMain: (req,res) => {
        return res.render('index2.ejs')
    },
    admin: (req,res) => {
        return res.send('Hola admin: ' + req.query.user)
    }
}