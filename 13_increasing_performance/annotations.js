// ---------- Increasing Performance---------- //

// -> Excesoo de interação com a DOM e principalmente pelo desperdício de tempo 
//    processando coisas desnecessárias, por conta da forma como o ciclo de notificação
//    do framework, também conhecido como DIGEST CYCLE, funciona
//
// -> ⚠ Cuidado com as EXPRESSIONS, principalmente as EXPRESSIONS que utilizam funções complexas
//
// -> Opte pelo ONE-TIME BIND sempre que fizer sentido
//    > ONE-TIME :: - recebeu o VALOR, agora o ANGULAR tira o WATCHER e não se preocupa mais com ele
//
//    > mude o comportamento padrão com ng-model-options ele vem junto com one-time bind 