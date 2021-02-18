// ---------- Forms Validating ---------- //

// -> ngRequired - Diretiva
//    Define um determinado campo como OBRIGATÓRIO

// -> $valid e $invalid - propriedades
//    Consultando a validade de um campo ou formulário

// -> $pristine e $dirty - propriedades
//    Verificando se um formulário ou campo já foi utilizando alguma vez
//    Se o campo ter $pristine = true, que dizer que aquele campo nunca foi tocado
//    Se o campo ter $dirty = true, que dizer que aquele campo foi tocado
//    E uma vez o campo $dirty = true, ele não volta para $pristine

// -> ngMinlength and ngMaxlength - Diretiva
//    Define o tamanho mínimo e máximo permitido

// -> $error - propriedade
//    Consultando os erros de um campo ou formulário
//    É um OBJETO que tem suas VALIDAÇÕES e seus respectivos STATUS

// -> ngPattern - Diretiva
//    Define uma RegExp(Expressão Regular) para validar o campo

// -> ngMessages - Diretiva, módulo EXTERNO do Angular
//    Exibição de mensagens
//    Tem que linkar o script angular-messages, e depois declarar nos [] de importanção de módulos