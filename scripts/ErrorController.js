// Отправка ошибки
const sendError = (Err) => {
    container.innerHTML = `<div style="
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        text-transform: uppercase;
        font-weight: bold;
        color: #aaadaf;
        ">${Err}</div>`
}
// удаление ошибок в полях
const clearError = () => {
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].classList.remove("err")
    }
}
// очистка послей
const clearValue = () => {
    for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
        document.getElementsByTagName("input")[i].value = ""
    }
}
// проверка на пусты поля
const checkInputValue = (currentObject) => {
    let boolError = false
    for (let i = 0; i < currentObject.getElementsByTagName("input").length; i++) {
        if(currentObject.getElementsByTagName("input")[i].value === ""){
            currentObject.getElementsByTagName("input")[i].classList.add("err")
            boolError = true
        }
    }
    return boolError
}