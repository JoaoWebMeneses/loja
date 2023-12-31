const router = require('express').Router()
const UserController = require('../controllers/UserController')
const multer = require('multer')
const crypto = require('crypto')

function generateNumericHash(input){
    const md5Hash = crypto.createHash('md5').update(input.toString()).digest('hex')
    const numericHash = md5Hash.replace(/[a-f]/gi, '') //remove as coisas não numéricas
    return numericHash
}
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"src/uploads")
    },
    filename: async function(req,file,cb){
        const timestamp = Date.now().toString();
        const numericHash = generateNumericHash(timestamp);
        cb(null, `${numericHash}-${file.originalname}`)
    }
})

const upload = multer({
    storage,
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(png|jpg|JPEG|PNG)$/)){
            return cb(Error("É permitido apenas imagens png e jpg"))
        }
        cb(null,true)
    }
})
router.post('/register',upload.single("image"),UserController.RegisterUser)

module.exports = router