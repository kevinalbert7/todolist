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

    list.innerHTML = ""
    
    tasks.forEach(function(task) {
        list.innerHTML = list.innerHTML + `
        
        <div class="line">           
        <div class="check">
        </div>
        
        <div class="list todoColor">   
            <p>${task.value} </p>
        </div>                       
        
        <div class="modifyMenu">
            <ul id="menu-demo2">
                <li><a href="#">Modifier</a>
                    <ul>
                        <li><a href="#">To do</a></li>
                        <li><a href="#">Doing</a></li>
                        <li><a href="#">Done</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        
        <div>
            <button class="deleteButton">
                <a href="#">Delete</a>
            </button>
        </div>

    </div>
    `
    })
        
    }



