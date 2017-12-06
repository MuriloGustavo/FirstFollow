# FirstFollow

Alunos: Murilo Gustavo
        Taynar Sousa 

Construção de um analisador LL

Deve se entrar uma gramativa com por exemplo:

//Exemplo de Gramatica
var grama = {1:"S -> F", 2:"S -> (S+F)", 3:"F -> a"};
            
Com um conjunto de Terminais e Não Terminais como mostrado abaixo referente ao exemplo acima 

//Entrada com os Terminais
var terminais = [ "S", "F"];

//Entrada com os Não Terminais
var naoTerminais = ["(", ")", "+", "a"];

O simbolo inicial
//Entrada do Estado Inicial
var inicial = "S";

A cada simbolo Não Terminal deve-se adicionar a função mostrar(X), que sevirá para mostrar a produção dos simbolos Não Terminais

//Exemplo
mostrar("S");
mostrar("F");

E copiar o restante das funções e chamar cada uma.
Fazer a execução de todo o codigo no console do navegador, lembrando que alterações na gramatica implicam em alterações
nos conjuntos e simbolo inicial.
