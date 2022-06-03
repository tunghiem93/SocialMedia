const aboutView = (req, res) => {
    res.render("./about/index", {
        data: '2112'
    });
}
module.exports =  {
    aboutView
};