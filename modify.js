var statusSticker = document.getElementsById("statusSticker")
var todo = document.getElementsById("todoSticker")
var doing = document.getElementsById("doingSticker")
var done = document.getElementsById("doneSticker")

function modifyStatus(statusTask) {
    if (statusTask ="Todo") {
        statusSticker.innerHTML =`
        <div id="todoSticker">
            <img src="img/logo_Check.svg" alt="">
            <div class="statusLabel  todoColor">
                <p>TO DO</p>
            </div>
        </div>
        `

    }
    if (statusTask ="Doing") {
        statusSticker.innerHTML=`
        <div id="doingSticker">
            <img src="img/logo_Check.svg" alt="">
            <div class="statusLabel doingColor">
                <p>DOING</p>
            </div>
        </div>
        `
    }
    if (statusTask ="Done") {
        statusSticker.innerHTML=`
        <div id="doneSticker">
            <img src="img/logo_Check.svg" alt="">
            <div class="statusLabel  doneColor">
                <p>DONE</p>
            </div>
        </div>
        `

    }
}


module.exports = {
    modifyStatus,
}
