// Получение текста по статусу юзера
const getColorTittle = (status) => {
    if(status ==="1") return "АВТОРИЗИРОВАН";
    if(status ==="2") return "ОТМЕНА";
    if(status ==="3") return "НЕАВТОРИЗИРОВАН";
}
// Получение цвета по статусу юзера
const getColorStatus = (status) => {
    if(status ==="1") return "green";
    if(status ==="2") return " ";
    if(status ==="3") return "red";
}