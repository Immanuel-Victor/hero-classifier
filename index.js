const heroName = "Immanuel";
let points = 2000;
let elos = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]
let finalPhrase = ''

if(points <= 1000) {
  finalPhrase = 'O herói de nome ' + heroName + ' está no nível de ' + elos[0];
} else if (1000 < points && points <= 2000 ) {
   finalPhrase =  'O herói de nome ' + heroName + ' está no nível de ' + elos[1];
} else if (2000 < points && points <= 5000 ) {
   finalPhrase =  'O herói de nome ' + heroName + ' está no nível de ' + elos[2];
} else if (5000 < points && points  <= 7000 ) {
   finalPhrase =  'O herói de nome ' + heroName + ' está no nível de ' + elos[3];
} else if (7000 < points && points  <= 8000 ) {
   finalPhrase =  'O herói de nome ' + heroName + ' está no nível de ' + elos[4];
} else if (8000 < points && points  <= 9000 ) {
   finalPhrase =  'O herói de nome ' + heroName + ' está no nível de ' + elos[5];
} else if (9000 < points && points  <= 10000 ) {
   finalPhrase =  'O herói de nome ' + heroName + ' está no nível de ' + elos[6];
} else {
   finalPhrase =  'O herói de nome  ' + heroName +  'está no nível de ' + elos[7];
}

console.log(finalPhrase)
