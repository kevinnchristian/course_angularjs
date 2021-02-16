// ---------- Single Page ---------- //

// -> Single-Page Application é uma aplicação que realiza suas transições dentro
//    de uma mesma página, carregando seus componentes de forma dinâmica utilizando AJAX.

// -> ngRoute - módulo do framework que fornece serviços para realizar o roteamento
//    de páginas.
//
//    -> $routeProvider - configurar rotas, e configurar uma rota padrão caso nenhuma
//       seja encontrada.
//          - when (path, route)
//          - otherwise (path)  
//
//    -> route object - objeto de configuração de cada rota, permite configurar
//       diversos aspectos do roteamento.
//
//    -> ngView - diretiva utilizada para renderizar o template da rota acessada.
//
//    -> resolve - resolver dependências necessárias 