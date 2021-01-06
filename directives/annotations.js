// ---------- Directives ---------- //
// -> São EXTENSÕES da linguagem HTML que permitem a impletação de novos comportamentos,
//    de forma DECLARATIVA
// -> Angular vai percorrer doc HTML em busca das diretivas, dentro dessas fronteiras 
//    é a onde ele vai atuar
// -> Executa um serviço chamado Compile, compila essa Diretiva e executa o comportamento 
//    desta Diretiva

// -> ngApp
//    Definindo fronteiras da aplicação

// -> ngController
//    Vinculando um elemento da View ao Controller

// -> ngBind
//    Substituindo o Elemento por uma Expressão, pega algo do $scope e exibe na View

// -> ngRepeat
//    Iterando sobre os itens de uma coleção ou de um objeto, array e objects

// -> ngModel
//    Vinculando uma propriedade ao $scope, inverso do ngBind/Expression Interpolation
//    pega algo da View e define no $scope, aplica nos inputs, selects e textarea

// -> two way data binding
//    Ciclo de notificação, angular trás embarcado desde de sua primeiras versões
//    Define e Atualiza a propriedade em $scope, e depois dispara ciclo de notificação
//    que alguns tipos de Diretivas estão escutando, ex: ngBind, ngRepeat

// -> ngClick
//    Atribuindo um comportamento ao evento, disparando evento a partir de um click

// -> ndDisabled
//    Desabilitando um elemento dinamicamente, ex: button, input

// -> ngOptions
//    Renderiza as opções de um select

// -> ngClass e ngStyle
//    Aplicando classes CSS e estilos dinamicamente
//    Da pra fazer um Classe ser aplicada em vários elementos, ng-class="classe1"
//    Da para fazer um Array de Classe para aplicar em vários elementos ao mesmo tempo,
//    ng-class="[classe1, classe2]"

// -> ngShow, ngHide e ngIf
//    Exibindo um elemento condicionalmente
//    ngShow e ngHide o elemento não deixará de existir, vai sofrer um hide/esconde
//    ngIf faz o elemento surgir quando tal condição acontecer, e sumir caso não seja
//    atendida a condição, melhor para performace

// -> ngInclude
//    Incluir conteúdo dinamicamente