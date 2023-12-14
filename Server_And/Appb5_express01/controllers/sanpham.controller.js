exports.listPage = (req, res, next)=>{
    //render ra view
    let tieuDe = "List"
    res.render('sanPham/listSP', {tieuDe: tieuDe});
}
exports.addPage = (req, res, next)=>{
    res.render('sanPham/addSP', {tieuDe: 'Add'});
}

//Quay sang file route de nhung controller