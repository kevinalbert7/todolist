var list = document.getElementById("list")
var tasks = []
var checkboxStatus = []

// ----------Fonction nouvelle tâche---------------- // 

function onTaskSubmit()  {
    var input = document.getElementById("name").value
    var task = {
        value: input,
        status: "To do",
    }
    tasks.push(task)
    displayList()
}   

// ----------Fonction edit value ---------------- // 
function edit(titre) {
    var task = {
        value: titre,
        status: "TO DO",
    }
    tasks.push(task)
    displayList()
}

// ----------Fonction edit status ---------------- // 
function editStatus(event, index) {
    console.log("//////////////////////////////////")
    //event variable fourni par evenement "onchange"
    console.log(event)
    console.log(index)
    // var select = document.getElementById("statusMenu").value
    // console.log(select)
    var task = tasks[index]
    console.log(task)
    // pour récupérer valeur de select event.target.value (target=objet)
    task.status = event.target.value
    console.log(task)
   
    displayList()
}
  
// ----------Fonction filter ---------------- // 
function filterStatus() {
    var checkboxes = document.getElementById("checkboxFilter")
    var status = {
       checkbox
    }
    
    checkboxStatus.push(task)
}


// ---------- Fonction Display ---------------- // 

function displayList() {
    list.innerHTML = ``
    var options = ["To do", "Done", "Doing"]

    tasks.forEach(function(task, index) {
    
        var optionsElements = options.map(function(option) {
            if (task.status === option) {
                return `<option class="todoColor" value="${option}" selected>${option}</option>`
            }

            return `<option class="todoColor" value="${option}">${option}</option>`
        }) 

        list.innerHTML = list.innerHTML + `
    
            <div class="line">           
            
                <div class="statusSticker">
                    <img src="img/logo_Uncheck.png" alt="">
                    <div class="statusMenu">
                    <select name="status" id="statusMenu" onchange="editStatus(event, ${index})">
                        ${optionsElements}
                    </select>
                    </div>
                </div>
                
                <div class="list">   
                    <p>${task.value} </p>
                </div>    
                
                <div class="lineButtons">

                    <button id="editValue" onclick="edit()">
                        <p>Edit</p>
                    </button>

                    <button onClick="deleteLine(${index})">
                        <p>Delete</p>
                    </button>
                    
                </div>

            </div>
        </div>
        `
    })
}

// -----------Fonction remove -------------//

function deleteLine(onclick) {
    tasks.splice(onclick, 1)
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





  

