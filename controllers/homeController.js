const homeView = (req, res) => {
    res.render("./home/index", {
        data: '2112'
    });
}
module.exports =  {
    homeView
};