const express = require('express')
const app = express()

app.use(express.json())

const imei = require('imei');

app.get('/imeiValidation', (req,res) => {

    if(imei.isValid(req.body.imei)){
        res.send('imei is valid')
    }else{
        res.send('imei is not valid')
    }

})

app.listen(8080)