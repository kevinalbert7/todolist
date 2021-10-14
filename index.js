var list = document.getElementById("list")
var tasks = []

// ----------Fonction nouvelle tâche----------------

function onTaskSubmit() {
    var input = document.getElementById("name").value
    var task = {
        value: input,
        status: "To do",
    }

    tasks.push(task)
    displayList()
}       

function displayList() {
    list.innerHTML = ``
  
    tasks.forEach(function(task, index) {
        list.innerHTML = list.innerHTML + `
      
            <div class="line">           
            
                <div class="statusSticker" id="doingSticker">
                    <img src="img/logo_Check.svg" alt="">
                    <div class="statusLabel ${task.status}Color">
                        <p>${task.status}</p>  
                    </div>
                </div>
                
                
                <div class="list">   
                    <p>${task.value} </p>
                </div>                       
                
                <div class="modifyMenu">
                    <div><a id="edit" href="#">Modifier</a></div>
                    <ul id="fleche">
                        <li onclick="editStatus('Todo')">To do</li>
                        <li onclick="editStatus('Doing')">Doing</li>
                        <li onclick="editStatus('Done')">Done</li>
                    </ul>
                </div>
            
                <div>
                    <button onClick="deleteButton()">
                        <p>Delete</p>
                    </button>
                </div>
                
            </div>

        `
    })
}

// -----------Fonction remove -------------//

function deleteButton() {
    tasks.splice(onTaskSubmit, 1)
    displayList()
}

// -----------Fonction tâches aléatoires -------------//
var randomArray = ["Apprendre le dictionnaire en entier", "Trier par taille toutes les vis de la boîte à outils","Lancer un faux débat sur Twitter", "Supprimer les mails inutiles","Tester tous les stylos de la maison","Pousser mémé dans les orties","Assembler toutes les paires de chaussettes", "Me faire cuire un oeuf"]

function random() {
    var min = 0
    var max = 7
    var random = Math.floor(Math.random() * (max - min + 1) + min)

    return randomArray[random]
}

var randomTask = random()

console.log (randomTask)

// -----------Fonction affichage des tâches aléatoires -------------//

function displayRandomTask() {
    var input = document.getElementById("randomButton")
   
    tasks.push(randomTask)
    displayList()
}


// function editStatus(index) {
//     tasks[index].status = "doing"
//     displayList()
//   }


  

