//Exemplo de Gramatica
var grama = {1:"S -> F",        //S -> F
			2:"S -> (S+F)",     //S -> (S+F)
			3:"F -> a"};		//F -> a
			
//Entrada com os Terminais
var terminais = ["S", "F"];

//Entrada com os Não Terminais
var naoTerminais = ["(", "+", "a"];

//Entrada do Estado Inicial
var inicial = "S";

//Imprime Gramatica
function imprime(){
		for(i in grama){
				console.log(grama[i]);
		}
}

//Teste de impressao da gramatica
imprime();

//Mostra as produções dos Não Terminais
function mostra(A){
		for(i in grama){
				var aux = grama[i];
				if(aux[0] == A){
						console.log(grama[i])
				}
		}
}

//Teste de impressao das producoes
mostra("S");
//
mostra("F");

//First
function first(){
	for(i in grama){
		var aux = grama[i];
		for(j in terminais){
			if(aux[5] == terminais[j]){
				console.log(aux[0],": ",terminais[j]);
			}
		}
		for(j in naoTerminais){
			if(aux[5] == naoTerminais[j]){
				console.log(aux[0],": ",naoTerminais[j]);
			}
		}
	}
}

//Imprime os Firts
first();

//Follow
function follow(){
	
}
