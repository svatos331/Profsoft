// Обработка событий на модальные окна
const setAddEventListener1 = (data) => {
    // Перебор все модальных кнопок удалить/изменить
    for (let index = 0; index < data.length; index++) {
        // кнопка модального окна "edit"
        document.getElementsByClassName("edit")[index].addEventListener("click", function (){
            document.getElementById("createFetch").classList.add("disNone")
            document.getElementById("editFetch").classList.remove("disNone")
            document.getElementById("titleModal").innerText = "Изменение пользователя"
            clearError();
            const currentId = parseInt(this.getAttribute("data-id"))
            const user = data.filter(v=> v.id === currentId)[0]
            const {id, username,name,phone,email,status,website} = user
            const {city, street,suite,zipcode} = user.address
            const {lat, lng} = user.address.geo
            const {catchPhrase,bs} = user.company
            document.getElementById("editFetch").setAttribute("data-id",id)
            document.getElementById("username").value = username
            document.getElementById("name").value = name
            document.getElementById("phone").value = phone
            document.getElementById("email").value = email
            document.getElementById("status").value = status
            document.getElementById("website").value = website
            document.getElementById("city").value = city
            document.getElementById("street").value = street
            document.getElementById("suite").value = suite
            document.getElementById("lat").value = lat
            document.getElementById("lng").value = lng
            document.getElementById("zipcode").value = zipcode
            document.getElementById("companyName").value = user.company.name
            document.getElementById("catchPhrase").value = catchPhrase
            document.getElementById("bs").value = bs
        })
        // кнопка модального окна "delete"
        document.getElementsByClassName("delete")[index].addEventListener("click", function (){
            const currentId = parseInt(this.getAttribute("data-id"))
            deleteFetch.setAttribute("data-id", currentId)
            nameUser.innerText = data.filter(v=> v.id === currentId)[0].name
        })
    }
}
// кнопка модального окна создания юзера
document.getElementById("createUser").addEventListener("click", function(){
    document.getElementById("createFetch").classList.remove("disNone")
    document.getElementById("editFetch").classList.add("disNone")
    document.getElementById("titleModal").innerText = "Создание пользователя"
    clearError();
    clearValue();
})
//-- удаление в модальном окне
deleteFetch.addEventListener("click", function (){
    deleteUserFetch(this.getAttribute("data-id"))
})
//--Изменение в модальном окне
editFetch.addEventListener("click", function (){
    const id = this.getAttribute("data-id")
    const data = {
        id: id,
        name: document.getElementById("name").value,
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        status: document.getElementById("status").value,
        address: {
            street: document.getElementById("street").value,
            suite: document.getElementById("suite").value,
            city: document.getElementById("city").value,
            zipcode: document.getElementById("zipcode").value,
            geo: {
                lat: document.getElementById("lat").value,
                lng: document.getElementById("lng").value,
            },
        },
        phone: document.getElementById("phone").value,
        website: document.getElementById("website").value,
        company: {
            name: document.getElementById("companyName").value,
            catchPhrase: document.getElementById("catchPhrase").value,
            bs: document.getElementById("bs").value,
        },
    };

    checkInputValue(document.getElementById("edit"))===false?  editUserFetch(data):null
})
//--Создание в модальном окне
createFetch.addEventListener("click", function (){
    checkInputValue(document.getElementById("edit"))===false?
        addUserFetch({
            name: document.getElementById("name").value,
            username: document.getElementById("username").value,
            email: document.getElementById("email").value,
            status: document.getElementById("status").value,
            address: {
                street: document.getElementById("street").value,
                suite: document.getElementById("suite").value,
                city: document.getElementById("city").value,
                zipcode: document.getElementById("zipcode").value,
                geo: {
                    lat: document.getElementById("lat").value,
                    lng: document.getElementById("lng").value,
                },
            },
            phone: document.getElementById("phone").value,
            website: document.getElementById("website").value,
            company: {
                name: document.getElementById("companyName").value,
                catchPhrase: document.getElementById("catchPhrase").value,
                bs: document.getElementById("bs").value,
            },
        })
        :null
})
// удаление ошибок в полях и очистка послей при закрытии модального окна
for (let i = 0; i < document.getElementsByClassName("clear").length; i++) {
    document.getElementsByClassName("clear")[i].addEventListener("click", function(){
        clearError();
        clearValue();
    })

}