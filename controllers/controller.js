const defaultcontroller =  (req, res) => {
    // const data = await dataBase.findOne({ _id: req.cookies.userId });
    if(req.cookies.userId){
        res.render('index')
    }else{
        res.redirect('login');
    }
    
}

module.exports = {defaultcontroller};