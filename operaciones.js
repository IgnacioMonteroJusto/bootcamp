const suma = (a, b) =>{
    return a + b;
};

const resta = (a, b) =>{
    return a - b;
};

const multi = (a, b) =>{
    if(a == 0 || b == 0){
        return 0;
    }
    return a * b;
};

const div = (a, b) =>{
    
    if(b == 0){
        throw new Error("div by 0");
    }
    return a / b;
};

const div_rest = (a, b) =>{
    
    if(a == 0){
        throw new Error("Nothing to divide");
    }
    
    if(b == 0){
        throw new Error("div by 0");
    }
    return a % b;
};

const mcm_mcd = (a, b, type_return) => {
    
    if(a == 0 || b == 0){
        throw new Error("Cannot take minimun common of zero.")
    }
    
    let mcm = 0;
    let mcd = 0;
    let div_a = 0;
    let div_b = 0;
    let resto = 0;
    let finish = true;
    
    div_a = a;
    div_b = b;
    if(b > a){
        div_a = b;
        div_b = a;
    }
    
    while(finish){
            
        resto = div_a % div_b;
        div_a = div_b;
        div_b = resto;
        if(resto === 0){
            mcd = div_a;
            mcm = (a * b) / mcd;
            finish = false;
        }
    }
    
    if(type_return === "mcm"){
        return mcm;
    }
    
    if(type_return === "mcd"){
        return mcd;
    }
    
};

const prime = (number) => {
    
    let aux = 1;
    let tag_prime = true;
    let repetitions = 0;
    while(aux <= number){
        if(number % aux === 0){
            repetitions++;
            if(repetitions > 2){
                return false;
            }
        }
        aux++;
    }   
    
    return tag_prime;
};

const co_prime = (num_a, num_b) => {
    
    let aux = 1;
    let repetitions = 0;
    let a_prime = [];
    let b_prime = [];
    while(aux <= num_a){
        if(num_a % aux === 0){
            repetitions++;
            if(aux !== 1)a_prime.push(aux);
        }
        aux++;
    }
    
    aux = 1;
    while(aux <= num_b){
        if(num_b % aux === 0){
            repetitions++;
            if(aux !== 1){
                if(a_prime.indexOf(aux) === -1){
                    //si no existe en el array de primos del 
                    //numero anterior lo metemos en su array
                    b_prime.push(aux);
                }else{
                    //si existe no son coprimos
                    return false;
                }
            }
        }
        aux++;
    }
    
    return true;
};

const square = (num) => {
    if(num === 0){
        throw new Error("No square root for 0");
    }
    if(num < 0){
        throw new Error("No square root for negative numbers");
    }
    
    let i = 1;
    let square = 1;
    while(square <= num){
        square = i * i;
        i++;
    }
    
    return square;
};

const logarithm_10 = (number) => {
    
    const base = 10;
    const max_decimals = 3;
    
    let times = 0;
    let times_dec = 0;
    let aux = number;
    let aux_decimal = "";
    let result;
    
    if(number === 0){
        throw new Error("No logarithm for zero.");
    }
    
    //factorizamos el numero
    do{
        aux = (aux / base).toFixed(3);
        times++;
    }while(aux > base);
    
    result = times;
    times = 0;
    //parte decimal. Limitado a tres
    if(aux % base === 0){
        return result;
    }
    do{
        //sacaremos 3 decimales
        //console.log("aux primero = ",aux);
        let p = 0;
        do{
            aux = Math.pow(aux, base).toFixed(3);
            //console.log("pow hasta mayor 10 = ", aux);
            p++;
        }while(aux < base);
        
        if(p > 0){
            while((p - 1) > 0){
                aux_decimal +="0";
                p--;
            }
        }
        
        times_dec   = 0;
        do{
            aux = (aux / base).toFixed(3);
            times_dec++;

        }while(aux > base);
        aux_decimal += times_dec;
        times++;
        
    }while(times < max_decimals);
    
    result = result +"."+ aux_decimal;
    result= parseFloat(result).toFixed(3);
    
    console.log(`log 10 ${number} = `, result);    
    return result;
};


/*
 * Params:
 * expo: exponential number
 */
const expo_e = (expo) => {
    
    const e = 2.718281828459045;
    let number = e;
    let i = 1;
    
    while(i < expo){
        number = number * e;
        i++;
    }
    return number;
}

const number_round = (decimal, n_decimal) => {
    
    let aux_number = decimal.toString().split(".")[0];
    let aux_decimal = decimal.toString().split(".")[1];
    let number = aux_number+"."+aux_decimal;
    number = parseFloat(number).toFixed(n_decimal);
    
    return number;
};

module.exports = {
    suma,
    resta,
    multi,
    div,
    div_rest,
    mcm_mcd,
    prime,
    co_prime,
    square,
    logarithm_10,
    expo_e,
    number_round
};