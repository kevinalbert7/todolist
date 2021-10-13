// ----------Fonction nouvelle tâche----------------

var list = document.getElementById("list")
var tasks = []


function onTaskSubmit() {
    var input = document.getElementById("name").value
    var task = {
        value: input,
        status: "To do",
    }
    tasks.push(task)
    displayList()
}       

function editStatus(index) {
    tasks[index].status = "doing"

        

    function displayList() {
        list.innerHTML = ""

        tasks.forEach(function(task) {
            list.innerHTML = list.innerHTML + `
            
            <div class="line">           
            
                <div id="doingSticker">
                    <img src="img/logo_Check.svg" alt="">
                    <div class="statusLabel ${task.status}Color">
                        <p>${task.status}</p>
                    </div>
                </div>
                
                
                <div class="list">   
                    <p>${task.value} </p>
                </div>                       
                
                <div class="modifyMenu">
                    <ul id="menu-demo2">
                        <li><a href="#">Modifier</a>
                            <ul>
                                <li onclick="editStatus('Todo')">To do</li>
                                <li onclick="editStatus('Doing')">Doing</li>
                                <li onclick="editStatus('Done')">Done</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <button class="deleteButton">
                        <p>Delete</p>
                    </button>
                </div>
    
            </div>
            `
        })
    }

    function editValue() {

    }

    


    function delete() {

    }