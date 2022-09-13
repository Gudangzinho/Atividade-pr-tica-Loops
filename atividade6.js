// ATIVIDADE 6
// Escrever um programa que receba vários números inteiros no teclado. E no final imprimir a média 
// dos números múltiplos de 3. Para sair digitar 0(zero).(DO...WHILE)


var media = 0
var num 
var i = 0
var m = 0

     do {
        num = Number(prompt("Digite um numero:"))
        if ( num % 3 == 0 && num != 0 )   
         { i = num + i;  m++ }
        media=i/m
      
    } while ( num != 0  )

    alert(`total = ${media}`)

        
