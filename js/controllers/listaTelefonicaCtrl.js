angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter){
    $scope.app = "Lista Telefonica";
    $scope.contatos = [
      {nome: $filter('uppercase')("Pedro"), telefone: "9999278525", data: new Date(), operadora: {nome: "Oi", codigo: 14}, cor: "blue"},
      {nome: "Ana", telefone: "9999278522", data: new Date(), operadora: {nome: "Vivo", codigo: 15}, cor: "red"},
      {nome: "Maria", telefone: "9999278520", data: new Date(), operadora: {nome: "Tim", codigo: 41}, cor: "green"},
    ];
    $scope.operadoras = [
      {nome: "Oi", codigo: 14, preco: 2},
      {nome: "Vivo", codigo: 15, preco: 1},
      {nome: "Tim", codigo: 41, preco: 3}
    ];
    $scope.adicionarContato = function (contato){
      $scope.contatos.push(angular.copy(contato));
      delete $scope.contato;
      $scope.contatoForm.$setPristine();
    };
    $scope.apagarContatos = function (contatos){
      $scope.contatos = contatos.filter(function (contato){
        if(!contato.selecionado) return contato;
      });
    };
    $scope.isContatoSelecionado = function (contatos){
      return contatos.some(function (contato){
        return contato.selecionado;
      })
    };
    $scope.ordenarPor = function (campo) {
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
});
