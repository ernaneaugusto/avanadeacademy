// Exercício 2
console.log("### Exercício 2 ##");

function sumAll(numsArray){
    var total = 0;
    var min =  numsArray[0] < numsArray[1] ? numsArray[0] : numsArray[1];
    var max =  numsArray[0] > numsArray[1] ? numsArray[0] : numsArray[1];

    for(var i = min; i <= max; i++){
        total += i;
    }
    console.log(total);
}
sumAll([3, 1])

// Exercício 3
console.log("\n### Exercício 3 ##");
function destroyer(arrayValues, ...parameters){
    var itemsFilter = [];
    
    for(var i = 0; i < arrayValues.length; i++){
        if(parameters.indexOf(arrayValues[i]) === -1) {
            itemsFilter.push(arrayValues[i]);
        }
    }

    console.log(itemsFilter)
}

destroyer([1,2,3,1,2,3], 2,3);

// Exercício 1
console.log("\n### Exercício 4 ##");

function dropElement(arrayValues, anonymousFunction){
    var itemsFilter = [];
    
    for(var i = 0; i < arrayValues.length; i++){
        if(anonymousFunction(arrayValues[i])) {
            itemsFilter.push(arrayValues[i]);
        }
    }
    
    console.log(itemsFilter)
}

dropElement([1,34,4,5], function(value){ return value < 2 });

// Exercício 5
console.log("\n### Exercício 5 ##");

var Pessoa = function(name, matter){
    this.name = name;
    this.matter = matter;
}

var Professor = new Pessoa("Diego Pinho", "HTML, CS e JS");

Pessoa.prototype.ensinar = function(){
    console.log(this.name+" ensina "+this.matter+" na Avanade");
}

console.log(Professor.ensinar());
console.log("\n##### FIM #####\n");