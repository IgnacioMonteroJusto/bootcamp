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


module.exports = {
    suma,
    resta,
    multi,
    div,
    div_rest
};