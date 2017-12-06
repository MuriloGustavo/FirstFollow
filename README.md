# FirstFollow

Aluno: Murilo Gustavo
       Taynar Sousa 

Construção de um analisador LL

Deve se entra uma gramativa com por exemplo:

//Exemplo de Gramatica
var grama = {1:"S -> F", 2:"S -> (S+F)", 3:"F -> a"};
            
Com um conjunto de Terminais

//Entrada com os Terminais
var terminais = [ "S", "F"];

Um conjunto de Não Terminais

//Entrada com os Não Terminais
var naoTerminais = ["(", ")", "+", "a"];

O simbolo inicial
//Entrada do Estado Inicial
var inicial = "S";

E copiar o restante das funções e chamar cada uma.
Fazer a execução de todo o codigo no console do navegador, lembrando que alterações na gramatica implicam em alterações
nos conjuntos e simbolo inicial.
