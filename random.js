var randomArray = ["Lire le dictionnaire en entier", "Trier par taille toutes les vis de la boîte à outils","Lancer un faux débat sur Twitter", "Supprimer les mails inutiles","Tester tous les stylos de la maison","Pousser mémé dans les orties","Assembler toutes les paires de chaussettes", "Me faire cuire un oeuf"]

function random() {
var min = 0
var max = 7
var random = Math.floor(Math.random() * (max - min + 1) + min)

return randomArray[random]
}

var randomTask = random()

console.log (randomTask)