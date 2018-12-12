const assert = require("assert");//libreria de nodejs

const op = require("../operaciones")

/*
 * Modulos basicos Mocha
 * 
 * describe -> para describir los test completos
 * it -> para ejecutar cada test en concreto
 */

let a;
let b;
 
before(() => {
    //console.log("Before", a, b);
    a = 0;
    b = 0;
});

describe("Operaciones", () => {
    
    beforeEach(() => {
        
        a = getIntRandom(0, 1000);
        b = getIntRandom(1000, 2000);
    });
    
    afterEach(() => {
        //console.log("aftereach");
        a = getIntRandom(0, 1000);
        b = getIntRandom(1000, 2000);
    });
    
    describe("Suma op:", () => {
        it("test suma", () => {
            //console.log(a, b);
            let res = op.suma(a,b);

            assert.ok(res >= 0);//evalua condicion devolviendo booleano
            assert.equal(res, a + b);//comprueba dos valores introducidos
            //assert();//comprueba que el valor no sea distinto de nll
        });
        
        it("test suma result neg", () => {
            //console.log(a, b);
            let res = op.suma(a, -b);
            assert.equal(res, a + (-b));
            
        });
        
        it("Test suma neg numbers", () => {
            //console.log(a, b);
            let res = op.suma(-a, -b);
            assert.equal(res, (-a) + (-b));
            
        });
    });
        
    describe("Resta op:", () => {
        it("test resta", () => {
            //console.log(a, b);
            let res = op.resta(a, b);
            assert.equal(res, a - b);
            
        });
        
        it("Test resta second neg", () => {
            //console.log(a, b);
            let res = op.resta(a, -b);
            assert.equal(res, a - (-b));
            
        });
        
        it("Test resta both neg", () => {
            //console.log(a, b);
            let res = op.resta(-a, -b);
            assert.equal(res, (-a) - (-b));
            
        });
    });
    
    describe("Multi op:", () => {
        it("Test multi", () => {
            let res = op.multi(a, b);
            assert.equal(res, a * b);
        });
        
        it("Test multi by first param 0", () => {
            a = 0;
            let res = op.multi(a, b);
            assert.equal(res, a * b);
        });
        
        it("Test multi by second param 0", () => {
            b = 0;
            let res = op.multi(a, b);
            assert.equal(res, a * b);
        });
                
    });
    
    describe("Div op:", () => {
        it("test div 0", () => {
            try{
                op.div(a, 0);
                assert.ok(false);
            }catch(e){
                //console.log(e.message);
                assert.ok(true);
            }

        });
        
        it("test div ", () => {
            try{
                op.div(b, a);
                assert.ok(false);
            }catch(e){
                //console.log(e.message);
                assert.ok(true);
            }

        });
    });
    
    describe("Div_rest op:", () => {
        it("Div resto", () => {
            try{
                let res = op.div_rest(a, b);
                assert.equal(res, a % b);
            }catch(e){
                //console.log(e.message);
                assert.ok(true);
            }

        });
        
        it("Div_rest nothing to divide", () => {
            try{
                op.div_rest(0, b);
                assert.ok(false);
            }catch(e){
                //console.log(e.message);
                assert.ok(true);
            }

        });
        
    });
    
    describe("MCM:", () => {
        it("Minimo comun", () => {
            try{
                a = 1500;
                b = 176;
                let mcm = op.mcm_mcd(a, b,'mcm');
                let mcd = op.mcm_mcd(a, b,'mcd');
                assert.equal(mcm, (a * b)/ mcd);
            }catch(e){
                assert.ok(true);
            }
        });
        
        it("Minimo comun con 0", () => {
            try{
                a = 0;
                b = 0;
                op.mcm_mcd(a, b,'mcm');
                assert.ok(false);
            }catch(e){
                assert.ok(true);
            }
        });
    });
    
    describe("MCD:", () => {
        it("Maximo comun divisor", () => {
            a = 1500;
            b = 176;
            let res = op.mcm_mcd(a, b, 'mcd');
            let mcm = op.mcm_mcd(a, b, 'mcm');
            assert.equal(res, (a * b)/ mcm);
            
        });
    });
    
    describe("Primos:", () => {
        it("Numero primo", () => {
            a = getIntRandom(0, 1000);
            let res = op.prime(a);
            if(res){
                assert.equal(res, true);
            }else{
                assert.equal(res, false);
            }
            
        });
    });
    
    describe("Co-Primos:", () => {
        it("Numeros coprimos", () => {
            a = getIntRandom(0, 1000);
            b = getIntRandom(0, 1000);
            let res = op.co_prime(a, b);
            if(res){
                assert.equal(res, true);
            }else{
                assert.equal(res, false);
            }
            
        });
    });
    
    describe("Square op:", () => {
       it("Cero square", () =>{
           try{
               a = 0;
               op.square(a);
               assert.ok(false);
           }catch(e){
               //console.log(e.message);
               assert.ok(true);
           }
       });
       
       it("Square correct", () =>{
           try{
               let res = op.square(a);
               assert.equal(res, Math.sqrt(a));
           }catch(e){
               //console.log(e.message);
               assert.ok(true);
           }
       });
       
       it("Square negative number", () =>{
           try{
               op.square(-a);
               assert.ok(false);
           }catch(e){
               //console.log(e.message);
               assert.ok(true);
           }
       });
       
    });
    
    describe("Expo E:", () => {
        it("Exponential", () =>{
            a = getIntRandom(2, 10);
            const e = 2.718281828459045;
            let res = op.expo_e(a);
            
            if(e - res < 0.02){
                assert.ok(true);
            }else{
                assert.ok(false);
            }
            
        });
              
    });
    
    describe("Logarithm 10:", () => {
        it("Test Logarithm", () =>{
            a = getIntRandom(1, 2000);
            //a = 1235;
            let res = op.logarithm_10(a);
            let real = Math.log10(a).toFixed(3);
            
            assert.equal(res, real);
            
            
        });
              
    });
    
    describe("Number Round:", () => {
        it("Round by n decimal", () => {
            a = 1500.123456789;
            b = getFloatRandom(0.000000001, 99.999999999);
            let num_dec = getIntRandom(1, 6);
            let res = op.number_round(a, num_dec);            
            assert.equal(res, a.toFixed(num_dec));
        });
    });
    
});

after(() => {
    console.log("After", a, b);
    a = undefined;
    b = undefined;
});

function getIntRandom(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}

function getFloatRandom(min, max) {
    return (Math.random()* (max - min));
}