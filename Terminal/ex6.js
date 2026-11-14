const imts = ["Railson", "Moisés", "Samuel", "Flávio"]

    for(let i = 0; i < imts.length; i++){
        nomes(imts[i])
    }
    
    function nomes(nome){
        return console.log(`Bem vindo, ${nome}!`)
    }