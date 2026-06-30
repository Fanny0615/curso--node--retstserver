const { response } = require('express');
const usuariosGet = (req,res= response)=>{
    const {q,nombre = "No especificado",apikey, page=1, limit }=req.query;
            res.json({
                msg:'get API- controlador',
                q,
                nombre,
                apikey,
                page,
                limit
            })
}
const usuariosPost = (req,res= response)=>{
    const {nombre,edad}=req.body;
    res.json({
        msg:'post API- ',
        nombre,
        edad
    })
}
const usuariosPut = (req,res= response)=>{
    const id=req.params.id;
    res.json({
        msg:'put API- ',
        id})
}
const usuariosDelete = (req,res= response)=>{
    res.json({
        msg:'delete API-'})
}
const usuariosPatch = (req,res= response)=>{
    res.json({
        msg:'patch API- '})
}



module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}