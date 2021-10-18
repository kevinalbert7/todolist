var input = document.getElementById("name")
var list = document.getElementById("list")
var tasks = []
var checkboxStatus = []

// ----------Fonction nouvelle tâche---------------- // 
function onTaskSubmit()  {
    var task = {
        value: input.value,
        status: "To do",
    }
    tasks.push(task)

    displayList(tasks)
    input.value = ``
}   

// ---------- Modifier ---------------- // 
function addForm(index) {
     var form = document.getElementById(`taskTitle${index}`)
     console.log("addform", form)
     form.innerHTML = ``
     form.innerHTML = form.innerHTML + `
        <form onsubmit="sendForm(${index}); return false;">
            <input id="inputTitle${index}" class="editFormInput" type="text" required >
            <button type="submit" class="editFormButton">Send</button>
        </form>
    `
}

function sendForm(index) {
    var input = document.getElementById(`inputTitle${index}`)
    tasks[index].value = input.value
    
    displayList(tasks)
}

// ---------- Fonction Display ---------------- // 
function displayList() {
    list.innerHTML = ``
    var options = ["To do", "Doing", "Done"]
    
    tasks.forEach(function(task, index) {
        
    var statusClass = getStatusClass(task.status)
    var optionsElements = options.map(function(option) {
            if (task.status === option) {
                return `<option value="${option}" selected>${option}</option>`
            }
            return `<option value="${option}">${option}</option>`
        }) 
        
        list.innerHTML = list.innerHTML + `
            <div class="line">           
                <div class="statusSticker">
                    <img src="img/logo_${statusClass}.png" alt="">
                    <select class="statusMenu ${statusClass}" id="statusMenu" onchange="editStatus(event, ${index})">
                        ${optionsElements}
                    </select>
                </div>
                <div class="list" id="taskTitle${index}">   
                    <p>${task.value}</p>
                </div>    
                <div class="lineButtons">
                    <button id="editValue" onclick="addForm(${index})"><img src="img/logo_pencil.svg">Edit</button>
                    <button onClick="deleteLine(${index})"><img src="img/logo_Delete-01.svg">Delete</button>  
                </div>
            </div>
            `
        })
}
    
// -----------Fonction remove -------------//
function deleteLine(onClick) {
    tasks.splice(onClick, 1)

    displayList(tasks)
}

// -----------Fonction tâches aléatoires -------------//
var randomArray = ["Apprendre par coeur le dictionnaire", 
                    "Trier par taille toutes les vis de la boîte à outils",
                    "Lancer un faux débat sur Twitter", 
                    "Supprimer les mails inutiles",
                    "Tester tous les stylos de la maison",
                    "Pousser mémé dans les orties",
                    "Assembler toutes les paires de chaussettes",
                    "Me faire cuire un oeuf"]

function random() {
    var min = 0
    var max = 7
    var random = Math.floor(Math.random() * (max - min + 1) + min)
    
    return randomArray[random]
}

// -----------Fonction affichage des tâches aléatoires -------------//
var randomAction = random()

function displayRandomTask() {
    var input = document.getElementById("randomBtn").value
    var randomTask = {
        value: random(),
        status: "To do",
    }
    tasks.push(randomTask)

    displayList(tasks)
}

// ----------Fonction edit status ---------------- // 
function editStatus(event, index,) {
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
    
    displayList(tasks)
}

// ----------Fonction couleur status ---------------- // 
function getStatusClass(status) {
    if (status === "To do") {
        return "todoColor"
    } else if (status === "Doing") {
        return "doingColor"
    } else if (status === "Done") {
        return "doneColor"
    }
}



// ----------Fonction filter ---------------- // 
function enter(elem){
    elem.style.backgroundColor = '#FF0000';
}

function filterStatus(status) {
    var filterTask = tasks.filter(function(task) {
        return task.status === status
    })

    displayList(filteredTasks)
}