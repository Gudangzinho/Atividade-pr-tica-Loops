
var idade = 0
var idadejovem = 0
var idadevelho = 0

while (idade > -99) {
    var idade = Number(prompt("Digite sua idade:"))
        if (idade > 0 && idade <= 21){
            idadejovem++
        }
        else if (idade > 21) {
            idadevelho++
        }
    }

alert(`Total de Jovens = ${idadejovem}`)
alert(`Total de Velhos = ${idadevelho}`)

// index.html roda o codigo
