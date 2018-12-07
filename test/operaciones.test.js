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
        a = 0;
        b = 0;
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
    });
    
    describe("Multi op:", () => {
        it("test resta", () => {
            
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
                assert.ok(true);
            }

        });
    });
    
    describe("Mod op:", () => {
        it("Div resto", () => {
            try{
                op.div_rest(a, b);
                assert.ok(false);
            }catch(e){
                assert.ok(true);
            }

        });
        
        it("Div_rest nothing to divide", () => {
            try{
                op.div_rest(0, b);
                assert.ok(false);
            }catch(e){
                assert.ok(true);
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
               assert.ok(true);
           }
       });
       
       it("Square correct", () =>{
           try{
               let res = op.square(a);
               assert.equal(res, Math.sqrt(a));
           }catch(e){
               assert.ok(true);
           }
       });
       
    });
    
    describe("Expo op:", () => {
        it("Exponential", () =>{
           let iter = getIntRandom(1, 20);
           a = getIntRandom(1, 20);
           b = getIntRandom(2, 10);
           let res = op.expo(a,b);
           assert.equal(res, Math.pow(a,b));
        });
       
        it("Negative Exponential", () =>{
            try{
                let iter = getIntRandom(1, 20);
                a = getIntRandom(1, 20);
                b = getIntRandom(2, 10);
                let res = op.expo(a,-b);
                assert.ok(false);
           }catch(e){
                assert.ok(true);
           }
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