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
	console.log('Gramatica:\n');
	for(i in grama){
			console.log(grama[i]);
	}
	console.log('');
}

//Teste de impressao da gramatica
imprime();

//Mostra as produções dos Não Terminais
function mostra(A){
	console.log('Produções de: ', A);
	for(i in grama){
			var aux = grama[i];
			if(aux[0] == A){
					console.log(grama[i])
			}
	}
	console.log('');
}

//Teste de impressao das producoes
mostra("S");
mostra("F");

//First
function first(){
	console.log('First:\n');
	for(i in grama){
		var aux = grama[i];
		for(j in terminais){
			var aux2 = aux.split(" ");
			var aux3 = aux2[2].substring(0,1);
			if(aux3 == terminais[j]){
				console.log(aux[0],": ",terminais[j]);
			}
		}
		for(j in naoTerminais){
			var aux2 = aux.split(" ");
			var aux3 = aux2[2].substring(0,1);
			if(aux3 ==  naoTerminais[j]){
				console.log(aux[0],": ",naoTerminais[j]);
			}
		}
	}
	console.log('');
}

//Imprime os Firts
first();

//Follow
function follow(){
	console.log('Follow:\n');
	console.log(inicial, " :", "$");
	for(i in grama){
		var aux = grama[i];
		var aux2 = aux.split(" ");
		var aux3 = aux2[0]; //Inicio da Produção
		var aux4 = aux2[2]; //Produção
		if(aux4.length == 1){
			for(j in terminais){//Verifica se é terminal
				if(aux4 == terminais[j]){
					console.log(aux4, " :", "Follow(", aux3, ")");
				}
			}
		}
		else {
			var aux5 = aux4.length;
			for(var j = 0; j+1 < aux5; j++){
				for(k in terminais){
					if(aux4.substring(j,j+1) == terminais[k]){
						for(l in naoTerminais){
							if(aux4.substring(j+1,j+2) == naoTerminais[l]){
								console.log(aux4.substring(j,j+1), " :", aux4.substring(j+1,j+2));
							}
						}
						for(l in terminais){
							if(aux4.substring(j+1,j+2) == terminais[l]){
								console.log(aux4.substring(j,j+1), " :", "First(", aux4.substring(j+1,j+2), ")");
							}
						}
					}
				}
			}
		}
		for(j in terminais){
			if(aux4[aux5 -1] == terminais[j]){
				console.log(aux4[aux5 -1], " :", "Follow(", aux2[0], ")");
			}
		}
	}
	console.log('');
}

//Imprime os Follow
follow();
////
