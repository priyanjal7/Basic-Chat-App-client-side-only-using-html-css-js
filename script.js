let msginput = document.querySelector(".message input")
let sendbtn = document.querySelector(".message i")
let receivingcontainer = document.querySelector(".receivingcontainer")
let msgcontainer = document.querySelector(".msgcontainer")
sendbtn.addEventListener("click",function(){
    let msg = document.createElement("div")
    msg.classList.add("msg")
    let value = msginput.value
    msg.textContent = value
    msgcontainer.appendChild(msg)
    let receivingmsg = document.createElement("div")
    receivingmsg.classList.add("messageone")
    receivingmsg.textContent = value
    receivingcontainer.appendChild(receivingmsg)
    msginput.value = ""
})