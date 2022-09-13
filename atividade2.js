
var par = 0
var impar = 0
var i = 0

for (var i = 0; i <= 10; i++) {
    if (i % 2 == 0)
    par++
    
}
for (var i = 0; i <= 10; i++) {
    if (i % 2 != 0)
    impar++
    
}
console.log(`Quantidade de números pares: ${par}`)
console.log(`Quantidade de números impar: ${impar}`)