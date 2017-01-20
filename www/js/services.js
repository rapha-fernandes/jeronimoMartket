angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('BlankService', [function(){

}])

.service('productService', [function(){
    var selectedProduct = {};
    var cart = [];
    var allProducts = [
        {
            productId:0,
            productName:"Pen Drive 64GB - Kingston",
            productImage:"http://images.tcdn.com.br/img/img_prod/325348/pen_drive_64gb_kingston_dt101g2_64gb_3844_3_20150223115418.jpg",
            productDescription:"Pen Drive Kingston 64gb Datatraveler 64gb Generation 4 Violeta - Todas as informações divulgadas são de responsabilidade do fabricante/fornecedor.",
            productPrice:58.90,
            productOldPrice:89.90,
            productQut:55
        },
        {
            productId:1,
            productName:"Taco de Golf (ferro) - Excel",
            productImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2A5GRrZtq3IWa3w_LzgB5_qvl040QFOkc_4j2jC7HpyygiaE&usqp=CAE",
            productDescription:"descrição",
            productPrice:337.40,
            productOldPrice:577.60,
            productQut:230
        },
        {
            productId:2,
            productName:"Cookies Original - Bauduco",
            productImage:"http://www.cosmedamiaocomercio.com.br/site/uploads/produto/34f846082992704cedffa5561f041c71.png",
            productDescription:"descrição",
            productPrice:5.80,
            productOldPrice:9.90,
            productQut:15
        },
        {
            productId:3,
            productName:"Arroz Integral Orgânico - Tio João",
            productImage:"http://www.paodeacucar.com/img/uploads/1/758/510758.jpg",
            productDescription:"descrição",
            productPrice:22.90,
            productOldPrice:29.80,
            productQut:84
        }
        ];

    var svc = {
        getProduct:function(){
            return allProducts;
        },

        selectProduct:function(p){
            selectedProduct = p;
        },

        getSelectedProduct:function(){
            return selectedProduct;
        },

        carregaCarrinho:function(p) {
            cart.push(p);
            console.log(cart);
        },

        getCarrinho:function() {
            return cart;
        }

    }


        return svc;
}])


.service('userInfo', [function(){
  var allUserInfo = {};

  var info = {

      getUser:function(){ //devolve os objetos contidos em allUserInfo no escopo das respectivas paginas
          return allUserInfo;
      },

      addUser:function(nome,email,senha,cpf,tel,endereco,cep){//valida os parametros passados e armazena no objeto allUserInfo
          if(nome != undefined ){ allUserInfo.userNome = nome;}
          if(email != undefined ){ allUserInfo.userEmail = email;}
          if(senha != undefined ){ allUserInfo.userSenha = senha;}
          if(cpf != undefined ){ allUserInfo.userCpf = cpf;}
          if(tel != undefined ){ allUserInfo.userTel = tel;}
          if(endereco != undefined ){ allUserInfo.userEndereco = endereco;}
          if(cep != undefined ){ allUserInfo.userCep = cep;}
          console.log(allUserInfo);
      }
  }
  return info;
}]);
