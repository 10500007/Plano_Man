
var n1 = document.querySelector('.col_4__lin_2').textContent
var n2 = document.querySelector('.col_4__lin_3').textContent
var n3 = document.querySelector('.col_4__lin_4').textContent
var n4 = document.querySelector('.col_4__lin_5').textContent
var n5 = document.querySelector('.col_4__lin_6').textContent

var array_n = [n1,n2,n3,n4,n5]

var maior = Math.max.apply(null, array_n);
console.log(maior)
console.log(array_n)

if (n1 == maior){

 console.log('n1 maior')

}else if(n2 == maior){

document.querySelector('.col_4__lin_3').classList.add('teste')  

}else if(n3 == maior){

console.log('n3 maior')

}else if(n4 == maior){

console.log('n4 maior')

}else if(n5 == maior){

console.log('n5 maior')

}