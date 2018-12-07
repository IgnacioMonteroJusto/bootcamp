const suma = (a, b) =>{
    return a + b;
};

const resta = (a, b) =>{
    return a - b;
};

const multi = (a, b) =>{
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

const expo = (a, b) => {
    
    if(a == 0){
        throw new Error("No exponential for 0");
    }
    
    if(b < 0){
        throw new Error("No negative exponential");
    }
    
    return Math.pow(a, b);
}

const square = (a) => {
    if(a == 0){
        throw new Error("No square root for 0");
    }
    return Math.sqrt(a);
};



module.exports = {
    suma,
    resta,
    multi,
    div,
    div_rest,
    square,
    expo
};