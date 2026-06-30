
const {usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}=require('../controllers/usuarios');
const { Router } = require('express');
const router = Router();


        router.get('/',usuariosGet);
        router.put('/:id',usuariosPut);
        router.post('/',usuariosPost);
        router.delete('/',usuariosDelete);
        router.patch('/',usuariosPatch);

            res.status(500).json({
                msg:'delete API'})
    
        router.patch('/',(req,res)=>{
            res.status(500).json({
                msg:'patch API'})
        });


module.exports= router;