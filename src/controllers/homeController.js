const getHomepage = (req, res) => {
    res.send('Hello World!')
}

const getSample = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getSample,

}