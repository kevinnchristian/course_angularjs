// ---------- Increasing Performance---------- //

// -> Sempre defina o TRACK BY quando utilizar NG-REPEAT e NG-OPTIONS, quando usamos
//    track by temos um grade ganho de performance
//      > Sem track by temos uma renderização dos elementos da DOM
//      > Com track by essa renderização dos elementos da DOM não acontece, e traz
//        apenas o elemento que é novo
//
// -> Analise o impacto de aplicar os FILTERS diretamente na view
//      > Recomendado retirar o FILTERS da VIEW e colocar na CONTROLLER
//      > Porque o TWO WAY DATA BIND baseado RENDERING CHECK-IN, ele fica REAVALIANDO
//        as INTERPOLAÇÔES e chama toda vez os FILTERS
//
// -> Pense bem antes de utilizar ng-if ou ng-show
//      > ng-if faz iterações com a DOM
//      > ng-show atribui display none ou não para o elemento da DOM