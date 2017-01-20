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
        productName:"Carne - Picanha",
        productImage:"http://frigocentral.com.br/frigocentral/gerenciar/uploads/Produtos/picanha%20grill.bmp",
        productDescription:"A picanha é um corte tradicional de churrasco. É facilmente reconhecível por seu formato triangular e capa de gordura que a cobre por inteiro, e que não deve ser retirada para assar, pois alterará seu sabor e suculência. A picanha é uma carne que varia entre 1kg podendo chegar ate 2kg, conforme o tamanho do animal.  Deve ser servida ao ponto ou mal passada. // VALOR DO KG: R$ 59,99 // PESO APROXIMADO DA PEÇA: 1,450",
        productPrice:58.90,
        productOldPrice:89.90,
        productQut:55
      },
      {
        productId:1,
        productName: "Carne - Alcatra",
        productImage: "https://requentando.files.wordpress.com/2010/09/alcatra2.jpg",
        productDescription: "A alcatra na verdade engloba mais 5 peças (incluindo maminha e picanha) além desta mostrada na imagem acima. Saborosa, macia e com capa de gordura é excelente para churrascos em bifes grossos (2,5cm), mas também muito boa para bifes de cozinha e carne de panela.",
        productPrice: 64.40,
        productOldPrice: 89.60,
        productQut: 230
      },
      {
        productId:2,
        productName:"Carne - Bife de Chorizo",
        productImage:"https://www.feed.com.br/institucional/admin/wp-content/uploads/Bife_Ancho1.jpg",
        productDescription:"O Bife de Chorizo é o corte que consagrou a Argentina como ícone do churrasco mundial, ao lado do igualmente nobre bife ancho. Também faz parte do contrafilé, como o seu vizinho. Mas está localizado no centro da peça, num músculo que faz pouquíssimo esforço.",
        productPrice:139.90,
        productOldPrice:102.80,
        productQut:15
      },
      {
        productId:3,
        productName:"Carne - Filé Mignon",
        productImage:"https://senhorasnamoda.files.wordpress.com/2012/05/not_231302554070.jpg",
        productDescription:"O Filé mignon é um tipo de corte da carne bovina podendo ter também, outro tipo de carne junto, o cordão do filé mignon. É localizada na parte traseira do animal e representa, aproximadamente, 2,95% da carcaça. É o corte mais macio da carne bovina e quase não contém gordura.",
        productPrice:76.90,
        productOldPrice:89.80,
        productQut:84
      },
      {
        productId:4,
        productName:"Carne - Fraldinha",
        productImage:"http://portal.minervafoods.com/files/produtos/fraldinha_0.jpg",
        productDescription:"Com capa de gordura, a Fraldinha é um corte suculento, de textura inigualável e sabor marcante, sendo muito versátil na preparação, mas indicado especialmente para churrascos ao ser cortado em tiras grossas.",
        productPrice:58.90,
        productOldPrice:62.90,
        productQut:84
      },
      {
        productId:5,
        productName:"Queijo - Gouda",
        productImage:"http://2.bp.blogspot.com/-Tbd5KOSFjWY/To9CR487qrI/AAAAAAAAADk/0BlB_ByTh9Q/s1600/Gouda.jpg",
        productDescription:"O gouda é um queijo duro tradicional da Holanda, produzido com leite de vaca filtrado e pasteurizado. Não existe um tempo exato de maturação mas, quando jovem, apresenta sabor adocicado e defumado - nada parecido com o feito no Brasil, que além de ser mais suave é macio demais comparado ao original. No paladar, sua textura é untuosa.",
        productPrice:22.90,
        productOldPrice:29.80,
        productQut:12
      },
      {
        productId:6,
        productName:"Queijo - Roquefort",
        productImage:"http://montacasa.gudecor.com.br/blog/wp-content/uploads/2015/05/salada-de-frango-com-queijo.jpeg",
        productDescription:"Foi o primeiro queijo a receber o selo AOC (Appellation d'Origine Contrôlée) de denominação de origem controlada, em 1925. Feito com leite cru de ovelha, o roquefort é um queijo francês cremoso, picante e salgado; suas manchas verde-azuladas são produzidas pelo fungo Penicillium roqueforti.",
        productPrice:74.90,
        productOldPrice:89.80,
        productQut:84
      },
      {
        productId:7,
        productName:"Queijo - Ricota",
        productImage:"http://receitatodahora.com.br/wp-content/uploads/2016/02/ricota-caseira.jpg",
        productDescription:"Embora seja considerada queijo pela maioria das pessoas, os especialistas afirmam que a ricota não deveria receber esta denominação. Como ela é feita através do soro do leite, é considerada um subproduto da produção do queijo. A ricota pode ser feita com qualquer tipo de leite e tem sabor levemente ácido. Na culinária, é utilizada em preparos mais leves, por ter pouca gordura e sal.",
        productPrice:28.90,
        productOldPrice:34.80,
        productQut:84
      },
      {
        productId:8,
        productName:"Queijo - Gorgonzola",
        productImage:"http://www.clmais.com.br/clgourmet/wp-content/uploads/2014/11/queijo-gorgonzola.jpg",
        productDescription:"O gorgonzola é considerado o primeiro queijo azul da história e existe há mais de mil anos (tem origem no norte da Itália,na região da Lombardia). Conhecido por seu aroma e sabor intensos, o visual “mofado” deste queijo é originado pelo fungo Penicillium glaucum. O leite utilizado na produção é o de vaca, em geral pasteurizado. Quando maturado por menos tempo, cerca de dois meses, o gorgonzola apresenta sabor suave e textura cremosa - neste caso, ganha a classificação dolce; se o tempo de maturação for de três meses, o queijo se torna picante, com sabor e aroma mais intensos.",
        productPrice:34.90,
        productOldPrice:46.80,
        productQut:84
      },
      {
        productId:9,
        productName:"Queijo - Camembert de Normandie",
        productImage:"https://s-media-cache-ak0.pinimg.com/originals/ca/f6/f8/caf6f84a31e7008c306c8b395b623e36.jpg",
        productDescription:"O camembert é um queijo francês e pertence ao grupo dos queijos brancos macios. Em 1983, recebeu o selo AOC (Appellation d'Origine Contrôlée) de origem, que exige a utilização do leite cru da vaca Normanda em sua produção. Depois de 21 dias de maturação, o camembert de Normandie é revestido por uma capa branca de mofo por conta do fungo Penicillium candidum. O resultado é um queijo com aroma suave de cogumelos que combina bem com vinho espumante e preparações que levam maçãs. Comparado com o brie, o camembert tem sabor e aroma mais acentuados, além de ser mais cremoso.",
        productPrice:74.40,
        productOldPrice:95.00,
        productQut:84
      },
      {
        productId:10,
        productName:"Vinho - CASA VALDUGA | LEOPOLDINA PREMIUM MERLOT 750ML",
        productImage:"http://costibebidas.vteximg.com.br/arquivos/ids/210564-650-650/Leopoldina-Premium-Merlot.jpg",
        productDescription:"Com elegância, complexidade e personalidade, possui coloração rubi com tons violáceos e aromas com notas de amora, cacau, especiarias doces e baunilha. De acidez moderada, em boca é encorpado, com taninos macios e retrogosto longo com notas amadeiradas. Maturação por 8 meses em barricas de carvalho francês e posterior maturação (já engarrafado) em cave por 12 meses.",
        productPrice:119.99,
        productOldPrice:98.00,
        productQut:84
      },
      {
        productId:11,
        productName:"Vinho - Barontoli Toscana 2014",
        productImage:"https://images.vivino.com/thumbs/lUdMHSFNQkWDEL2A1CjDbQ_375x500.jpg",
        productDescription:"If Piedmont is the soul of Italian wine, Tuscany is its beating heart––and the wine world has fallen in love. Sangiovese, Italy’s most planted grape, has experienced a bit of a roller-coaster ride in production quality over the last century—it’s like a Phoenix that has risen from the ashes of jugged swill wines, popular in American restaurants throughout the 1970s, to the incredible expressions of Chianti and Brunello di Montalcino that we know today.Improved clonal selection in Tuscany is partially to thank for the grape’s renaissance , as are hillside vineyard sites that take full advantage of the region’s warm, direct sunlight. ",
        productPrice:98.00,
        productOldPrice:119.99,
        productQut:84
      },
      {
        productId:12,
        productName:"Vinho - La Belière Rouge Bordeaux 2009",
        productImage:"http://1.bp.blogspot.com/-R-DofQrStI4/TsB7N8cHJLI/AAAAAAAAExU/ZIlFx5Q4ykU/s1600/LaBeliere.JPG",
        productDescription:"É um corte em que predomina a Merlot (65%), completada com Cabernet Sauvignon (20%) e Cabernet Franc (15%), sem passagem por madeira. Na taça, coloração púrpura, límpido e com boa transparência. Aromas em boa intensidade, frutos vermelhos, ameixa, algo balsâmico, groselha e algumas especiarias. Álcool aparecendo de leve (13,5%). Na boca é leve, simples, repetindo intenso frutado (especialmente groselha), com taninos presentes, com alguma adstringência. A acidez está em boa dose, deixando o vinho com vocação gastronômica. Final mediano, deixando boca seca e lembrança frutada. É produzido pela tradicional Baron Philippe de Rothschild. ",
        productPrice:45.40,
        productOldPrice:59.00,
        productQut:84
      },
      {
        productId:13,
        productName:"Vinho - CRISTOFOLI | MOSCATO DE ALEXANDRIA 2016 | 750ML | 11,5% VOL",
        productImage:"http://jamwork.com.br/wp-content/uploads/2016/07/port_1920_moscato.jpg",
        productDescription:"A uva Moscato de Alexandria é extremamente delicada e perfumada, deste cheiro característico advém o seu nome, pois o seu aroma era usado para atrair abelhas e moscas “muchk”. A Moscato de Alexandria é uma variedade muito antiga, por ter sido cultivada no Egito Antigo há indícios de que Cleópatra bebida vinho Moscatel! Hoje elaboramos Moscato de Alexandria como um vinho rico em aromas florais e frutados, muito jovial, leve e refrescante.",
        productPrice:32.00,
        productOldPrice:51.00,
        productQut:84
      },
      {
        productId:14,
        productName:"Vinho - Figaro rouge 2014 | Mas de Daumas Gassac",
        productImage:"https://mistral2015.s3.amazonaws.com/products/28013/img_s_28013.png",
        productDescription:"Saboroso tinto produzido por Mas de Daumas Gassac no sul da França. Ótimo para o dia a dia.",
        productPrice:68.40,
        productOldPrice:83.00,
        productQut:84
      },
      {
        productId:15,
        productName:"Damasco seco",
        productImage:"http://www.mundoboaforma.com.br/wp-content/uploads/2014/07/damasco-620x330.jpg",
        productDescription:"Comer damasco seco pode fazer bem para a digestão, em principal ao considerar a sua alta taxa de fibra. Também é rico em vitamina C. Tem minerais,tais como: sódio, cálcio, magnésio, entre outros. Damascos secos são excelentes fontes de fibras alimentares. Especialmente ricos em fibras solúveis, do tipo que se liga aos ácidos graxos para incentivar a excreção de resíduos. Também ajudam a manter o intestino saudável, fazendo com que trato digestivo ocorra rapidamente.",
        productPrice:14.00,
        productOldPrice:21.00,
        productQut:84
      },
      {
        productId:16,
        productName:"Blueberry",
        productImage:"http://www.medicalnewstoday.com/content/images/articles/287/287710/blueberries.jpg",
        productDescription:"A blueberry, conhecida no Brasil como mirtilho, concentra todos esses nutrientes. Ideal para quem busca uma visão mais saudável e nítida.  Além dele, invista nos Peixes gordos como a sardinha, bacalhau, cavala e atum, são ricos em vitamina D que cuida da boa circulação sanguínea e, portanto, pelo aporte de oxigênio na retina. Eles impedem a oxidação da estrutura do olho.",
        productPrice:24.00,
        productOldPrice:30.00,
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
