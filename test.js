
// 0

// function filterStatus(event, index) {
//     var input = document.getElementById("checkboxFilter")

// 1

//     tasks.forEach(function(task) {
        var toDo = tasks.filter(function(task) {
            return task.status === status;
        });
        var Doing = tasks.filter(function(task) {
            return task.status === status;
        });
        var Done = tasks.filter(function(task) {
            return task.status === status;
        });
//     })
// }
  
// 2

var filterTaches = objetTaches.filter(function(objetTache){
    return objetTache.status === status
})

var taskFilter = tasks.filter(function(task) {
    return task.status === status
})

//  3


function filterStatus(status) {
    
    
    var filterTask = tasks.filter(function(task){
        return task.status === status
    })
    displayList()
}

// 4


var filterTaches = objetTaches.filter(function(objetTache){
    return objetTache.status === status
})
