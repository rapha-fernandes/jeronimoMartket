angular.module('app.controllers', [])


.controller('homeCtrl', ['$scope', '$stateParams', 'productService', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService, $state ) {
    $scope.products = productService.getProduct();
    if (productService.getCarrinho().length == 0) {
      $scope.productsQut = 0;
    }

    $scope.addCart = function(item){
        productService.carregaCarrinho(item);
        $scope.productsQut = productService.getCarrinho().length;
    }

    $scope.descricao = function (item) {
        productService.selectProduct(item);
        $state.go('menu.item');
    }


}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$state','userInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, userInfo) {
    $scope.infoSignUp = userInfo.getUser();
    // console.log
    $scope.login = function(user,password){
        //console.log("User: " + user + " Senha: " + password);
        // if(user == userInfo.infoSignUp.userName && password == userInfo.infoSignUp.userMail){
        if (user == 'admin'&& password == 'admin') {
            //Redirecionar para a pagina Home
            //console.log("Login realizado com sucesso!!!");
            $scope.error = false;
            $state.go("menu.home");
        }else{
            $scope.error = true;
            //exibir mensagem de erro
            console.log("Username e/ou Password incorretos");
        }


    }
}])

.controller('signupCtrl', ['$scope', '$stateParams', '$state', 'userInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, userInfo) {
    $scope.signup = function(name,email,password){//função vinculada ao btn signup
        // console.log(name + " - " + email + " - " + password);
        userInfo.addUser(name,email,password);
        $state.go("menu.home");
    };


}])

.controller('itemCtrl', ['$scope', '$stateParams', '$state', 'productService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, productService) {
  $scope.product = productService.getSelectedProduct();

  $scope.addCart = function(item){
      productService.carregaCarrinho(item);
  }

  $scope.vaiPraHome = function() {
    $state.go("menu.home");
  }

}])

.controller('carrinhoCtrl', ['$scope', '$stateParams', 'productService',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, productService) {
  $scope.products = productService.getCarrinho();
  $scope.total = 0;

  for(var i=0 ; i<$scope.products.length ; i++){
    // console.log($scope.products[i].productPrice);
    $scope.total += $scope.products[i].productPrice;
  };
}])

.controller('contatoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('profileCtrl', ['$scope', '$stateParams', 'userInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, userInfo) {
  $scope.info = userInfo.getUser();


}])

.controller('formCtrl', ['$scope', '$stateParams', 'userInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, userInfo) {
  $scope.nome = userInfo.getUser();
  $scope.email = userInfo.getUser();
  $scope.senha = userInfo.getUser();
  $scope.cpf = userInfo.getUser();
  $scope.tel = userInfo.getUser();
  $scope.endereco = userInfo.getUser();
  $scope.cep = userInfo.getUser();

  $scope.enviarDadosCadastrais = function(nome,email,senha,cpf,tel,endereco,cep) {
    userInfo.addUser(nome,email,senha,cpf,tel,endereco,cep);
  }

}])
