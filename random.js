var randomArray=["Lire le dictionnaire en entier", "Trier par taille toutes les vis de la boîte à outils","Lancer un faux débat sur Twitter", "Supprimer les mails inutiles","Tester tous les stylos de la maison","Laver les rideaux","Acheter un chat pour combler ma solitude" ]

function randomTask() {
var min = 0
var max = 5
var random = Math.floor(Math.random() * (max - min + 1) + min)

return array[random]
}