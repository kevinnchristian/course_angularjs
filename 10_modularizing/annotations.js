// ---------- Modularizing ---------- //

// -> Módulo em ANGULAR é uma coleção de componentes, ou seja, um conjunto de:
//      -> Controllers;
//      -> Directives;
//      -> Filters;
//      -> Services.
//    entre outros tipos de componente utilizados pela aplicação.

// -> !!!CUIDADO!!! - Salvar modulo por exemplo em uma var app; ele pode ser em
//    algum momento ser sobrescrita, pois trata-se de uma VARIÁVEL GLOBAL

// -> Motivos para usar módulos: REUSO; ORGANIZAÇÃO; PERFORMANCE; ISOLAMENTO.

// -> Como fazer para criar módulos que façam referência para templates externos
//    em HTML?
//      -> answer: 
//         - $templateCache: utilizado para [armazenar em cache] do template na primeira
//           vez em que esse template é carregado!
//           $templateCache.put('templateName', 'template code.....'); 
//
//         - posso criar templates com tag <script></script>:
//           <script type="text/ng-template" id="templateName"> template code ... </script>

// -> Como um módulo é inicializado?
//      -> answer:
//         - incializado usando um bloco chamado [run]
//           app.run(function () {});
//         - pode ter quantos blocos você precise(vários)