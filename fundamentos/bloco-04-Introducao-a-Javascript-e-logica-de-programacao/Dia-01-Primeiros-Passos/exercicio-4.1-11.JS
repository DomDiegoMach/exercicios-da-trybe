//11 - Exercício - Cálculo do salário líquido

let salarioBruto = 3000;
let aliquotaInss;
let Ir;

if(salarioBruto>=5189.82){
    aliquotaInss = 570.88;
}else if(salarioBruto>=2594.93){
    aliquotaInss = salarioBruto*0.11;
}else if(salarioBruto>=1556.95){
    aliquotaInss = salarioBruto*0.09;
}else if(salarioBruto<1556.95){
    aliquotaInss = salarioBruto*0.08;
}
let salarioBase = salarioBruto-aliquotaInss;

if(salarioBase>=4664.68){
    Ir = (salarioBase*0.275)-869.36;

}else if(salarioBase>=3751.06){
    Ir = (salarioBase*0.225)-636.13;

}else if(salarioBase>=2826.66){
    Ir = (salarioBase*0.150)-354.80;

}else if(salarioBase>=1903.99){
    Ir = (salarioBase*0.075)-142.80;

}else if(salarioBase<1556.99){
    Ir = 0;
}
let salarioLiquido = salarioBase-Ir;
console.log(salarioLiquido);