const { name } = require('ejs');
const express = require('express');
const app = express();

app.use(express.static('public/'));

app.get('/',(req,res)=>{


    res.render('Home.ejs');

})

app.get('/About',(req,res)=>{
    res.render('About.ejs');

    const obj={
        "id":1,
         "name":"Tanuja"
        
    }

    const result={data:obj}

    res.render('about.ejs',result)
})

app.get('/Contact',(req,res)=>{
    res.render('Contact.ejs')

})

app.use((req,res)=>{
     res.send("<h1>404 Page Not Found</h1>")
})
const PORT=3000
const HOST='127.0.0.1'

app.listen(PORT,HOST,()=>{
    console.log(`Server is running ... on http://${HOST}:${PORT}`)
})

