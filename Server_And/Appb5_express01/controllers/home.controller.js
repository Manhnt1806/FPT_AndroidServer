exports.homePage = (req, res, next)=>{
    //xem query
    // console.log(req.query);
    // $username='';
    // if(typeof (req.query.username) != 'undefined'){
    //     $username = req.query.username
    // }
    //render ra view
    let tieuDe = "Trang chu website"
    res.render('home/home-page', {tieuDe: tieuDe/*, username: username*/});
}
exports.contactPage = (req, res, next)=>{
    console.log(req.params)
    let nhom_lien_he = req.params.nhom
    res.render('home/contact', {tieuDe: 'Trang lien he', ten_nhom: nhom_lien_he});
}

//Quay sang file route de nhung controller