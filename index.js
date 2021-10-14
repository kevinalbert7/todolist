var list = document.getElementById("list")
var tasks = []



// ----------Fonction nouvelle tâche---------------- // 

function onTaskSubmit() {
    var input = document.getElementById("name").value
    var task = {
        value: input,
        status: "TO DO",
    }
    tasks.push(task)
    displayList()
}   

// ----------Fonction edit value ---------------- // 
function remove(index) {

}

// ----------Fonction edit status---------------- // 
// function editStatus(index) {
//     tasks[index].status = "doing"
//     displayList()
// }

function displayList() {
    list.innerHTML = ``
  
    tasks.forEach(function(task, index) {
        list.innerHTML = list.innerHTML + `
      
            <div class="line">           
            
                <div class="statusSticker" id="statusSticker">
                    <img src="img/logo_Uncheck.png" alt="">
                    <div class="StatusMenu">
                    <select name="status" id="statusMenu">
                            <option value="Todo" onclick="editStatus('Todo')">To do</option>
                            <option value="Doing" onclick="editStatus('Doing')">Doing</option>
                            <option value="Done" onclick="editStatus('Done')">Done</option>
                    </select>
                    </div>
                </div>
                
                <div class="list">   
                    <p>${task.value} </p>
                </div>    
                
                <div class="lineButtons">

                    <button id="editValue" onClick="editValue()">
                        <p>Edit</p>
                    </button>

                    <button onClick="deleteButton()">
                        <p>Delete</p>
                    </button>
                    
                </div>

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
var randomArray = ["Apprendre par coeur le dictionnaire", "Trier par taille toutes les vis de la boîte à outils","Lancer un faux débat sur Twitter", "Supprimer les mails inutiles","Tester tous les stylos de la maison","Pousser mémé dans les orties","Assembler toutes les paires de chaussettes", "Me faire cuire un oeuf"]

function random() {
    var min = 0
    var max = 7
    var random = Math.floor(Math.random() * (max - min + 1) + min)

    return randomArray[random]
}

// -----------Fonction affichage des tâches aléatoires -------------//
var randomAction = random()

function displayRandomTask() {
    var randomTask = {
        value: randomAction,
        status: "TO DO",
    }
    tasks.push(randomTask)
    displayList()
}





  

