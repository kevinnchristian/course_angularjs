// ---------- Interceptors ---------- //

// -> Um INTERCEPTOR é um tipo de serviço que permite a INTERCEPTAÇÃO DAS REQUISIÇÕES
//    E RESPOSTAS do serviço $http

// -> Momento em que se pode INTERCEPTAR um REQUEST or RESPONSE:
//      - request
//      - requestError
//      - response
//      - responseError

// -> Configurar INTERCEPTOR
//      - O serviço $http possui um ARRAY DE INTERCEPTORS que podem ser configurados
//        na inicialização da aplicação
//
//      - TIMESTAMP INTERCEPTOR
//          > Adiciona uma marcação contendo um TIMESTAMP em todas as REQUESTS
//          > Ajuda a burlar mecânismos de CACHEAMENTO ou problemas de CACHES, que
//            por ventura existam
//          > Com estes TIMESTAMPS pode marca as REQUESTS e deixa-las uma DIFERENTE
//            das OUTRAS por meio de um PARAMS no meio de uma QUERY STRING
//
//      - ERROR INTERCEPTOR
//          > Exibe a tela de erro padrão caso uma requisição HTTP receba um status
//            code 404 como resposta
//          > $q é a implementação de promises/deferred, usado aqui para rejeitar
//            a promise que foi feita
//
//      - LOADING INTERCEPTOR
//          > Exibe uma imagem de loading enquanto tiver uma requisição em andamento