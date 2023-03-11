const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "", { // nessa linha aponta os parametros para onde eles vao
    host: "localhost",
    dialect: "mysql" // nessa linha aponta o o banco que vai, se o outro banco por exemplo firestore, o nome ali seria firestore
})

sequelize.authenticate().then(function(){
    console.log("conexão realizada com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})
const agendamentos = sequelize.define("tabela1",{ // daqui para baixa cria uma tabela no banco de dados, e os campos e os tipos dos campos, se tiver com o nodemon rodando, só salvar o projeto dps que a estrutra estiver pronta
    // o sequilize já cria o ID e coloca como auto-increment, automático e tambem salva o tempo que a pessoa foi salva 
    nome:{
        type: Sequelize.STRING
    },
    
    endereco:{
        type: Sequelize.STRING
    },
    
    bairro:{
        type: Sequelize.STRING
    },
    
    cep:{
        type: Sequelize.INTEGER
    },
    
    estado:{
        type: Sequelize.STRING
    },
    
    observacao:{
        type: Sequelize.TEXT
    },
})

agendamentos.sync({force: true}) // essa linha cria dnv o msm campo caso ja tenha sido criado antes, não duplica ela forca o apagamento e cria dnv, dxa essa linha comentada para não ficar recriando a msm coisa dnv pq demora

agendamentos.create({

    nome:"Polas",
    endereco:"rua alfredo",
    bairro:"jardim",
    cep: 4328974,  //se algum número começa com 0 o bd descarta o 0 na hora de salvar
    cidade: "SP",
    estado: "sp"
})
