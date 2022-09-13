/*
ATIVIDADE 4
Uma empresa desenvolveu uma pesquisa para saber as características psicológicas dos indivíduos de uma região. 
Para tanto, a cada uma das pessoas era perguntado: idade, sexo (1-feminino / 2-masculino / 3-Outros), e as opções (1, se a pessoa era calma; 2, se a pessoa era nervosa e 3, se a pessoa era agressiva). 
Pede-se para elaborar um sistema que permita ler os dados de 150 pessoas, calcule e mostre: (WHILE)
o número de pessoas calmas; 
o número de mulheres nervosas; 
o número de homens agressivos; 
o número de outros calmos;
o número de pessoas nervosas com mais de 40 anos; 
o número de pessoas calmas com menos de 18 anos.
*/

var contador = 0, pessoasCalmas = 0 , mulheresNervosas = 0, homensAgressivos = 0, outrosCalmos = 0,
    nervosoMais40 = 0, calmosMenos18 = 0, idade = 0, humor = 0;

while(contador <= 150) {
    idade = Number(prompt('Qual a sua idade ?'))
    sexo = Number(prompt('Qual o seu gênero ?\n 1 - Masculino\n 2 - Feminino\n 3 - Outros'))
    humor = Number(prompt('Com qual dessas personalidades você mais se identifica ?\n 1 - Calmo\n 2- Nervoso\n 3 - Agressivo'))

    if (humor == 1 ){
        pessoasCalmas++
    } else if (sexo == 2 && humor == 2){
        mulheresNervosas++
    } else if (sexo == 1 && humor == 3){
        homensAgressivos++
    } else if (sexo == 3 && humor == 1){
        outrosCalmos++
        pessoasCalmas++
    } else if (idade > 40 && humor == 2){
        nervosoMais40++
    }else if (idade < 18 && humor == 1){
        calmosMenos18++
        pessoasCalmas++
    }
    
    contador++
}

alert(
    `Coleta de dados\n
    Pessoas calmas: ${pessoasCalmas}\n
    Mulheres nervosas: ${mulheresNervosas}\n
    Homens agressivos: ${homensAgressivos}\n
    Outros calmos: ${outrosCalmos}\n
    Nervosos com mais de 40 anos: ${nervosoMais40}\n
    Calmos com menos de 18: ${calmosMenos18}`)


    // Codigo rodando no index2.html
