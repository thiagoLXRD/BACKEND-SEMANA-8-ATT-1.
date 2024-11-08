const express = require('express')
const jwt = require("jsonwebtoken");
const app = express()
app.use(express.json())


require('dotenv').config()

app.listen(8080, () => {
    console.log('opa doutor o servidor pronto na porta 8080')
})



app.get("/token", async (req, res) => {
    numero = Math.random()

    const payload = {
        numero: numero
    };
    const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' })
    res.json({ accessToken: token })

});