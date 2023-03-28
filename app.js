//imports

const express = require("express")
const app = express()




//static files

app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))

app.set('views', './views');
app.set('view engine', 'ejs');




// main page------------------------------------------
app.get("/", function(req,res){

    res.render("pages/index")
})




//about-----------------------------------------------
app.get("/about", function(req,res){

    res.render("pages/about")
})



// contato-----------------------------------------------
app.get("/contato", function(req,res){

    res.render("pages/contato")
})






//cuidador de idosos ----------------------------------------
app.get("/cuidador", function(req,res){

    res.render("pages/cuidador_de_idosos")
})






//informatica ----------------------------------------
app.get("/informatica", function(req,res){

    res.render("pages/informatica")
})




//informatica kids ----------------------------------------
app.get("/infkids", function(req,res){

    res.render("pages/inf_kids")
})







//preparatorio ----------------------------------------
app.get("/preparatorio", function(req,res){

    res.render("pages/preparatorio")
})





//pre-enem ----------------------------------------
app.get("/prenem", function(req,res){

    res.render("pages/prenem")
})






//administração ----------------------------------------
app.get("/adm", function(req,res){

    res.render("pages/administracao")
})






//autocad ----------------------------------------
app.get("/autocad", function(req,res){

    res.render("pages/autocad")
})







//auxiliar juridico ----------------------------------------
app.get("/auxjuridico", function(req,res){

    res.render("pages/auxiliar_juridico")
})








//empreendedorismo ----------------------------------------
app.get("/empreendedorismo", function(req,res){

    res.render("pages/empreendedorismo")
})






//ia ----------------------------------------
app.get("/ia", function(req,res){

    res.render("pages/ia")
})






//logistica ----------------------------------------
app.get("/logistica", function(req,res){

    res.render("pages/logistica")
})








//marketing ----------------------------------------
app.get("/marketing", function(req,res){

    res.render("pages/marketing")
})









//matricula ----------------------------------------
app.get("/matricula", function(req,res){

    res.render("pages/matricula")
})







//adobe ----------------------------------------
app.get("/adobe", function(req,res){

    res.render("pages/pacote_adobe")
})








//office ----------------------------------------
app.get("/office", function(req,res){

    res.render("pages/pacote_office")
})






//photoshop ----------------------------------------
app.get("/photoshop", function(req,res){

    res.render("pages/photoshop")
})









//prenem ----------------------------------------
app.get("/prenem", function(req,res){

    res.render("pages/prenem")
})









//programação ----------------------------------------
app.get("/programacao", function(req,res){

    res.render("pages/programacao")
})









//rh ----------------------------------------
app.get("/rh", function(req,res){

    res.render("pages/rh")
})










//secretariado ----------------------------------------
app.get("/secretariado", function(req,res){

    res.render("pages/secretariado")
})








//listen on port 5500------------------------------------
app.listen(5500,function(){
    console.log('servidor rodando')
})

