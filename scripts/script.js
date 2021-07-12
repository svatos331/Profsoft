// // запрос на сервер
// document.addEventListener("DOMContentLoaded", function (){
//
//     (async function(){
//         if ('serviceWorker' in navigator) {
//             try {
//                 const reg = await navigator.serviceWorker.register('/serviceWorker.js')
//             } catch (e) {
//                 console.log('Service worker register fail')
//             }
//         }
//     })()
//     // GET
//     const getFetch = async function fetchAsinc(setAddEventListenerBool){
//         try{
//             const response = await fetch("https://hxhby.sse.codesandbox.io/users")
//             const data = await response.json()
//             renderColumns(data)
//             setAddEventListenerBool === true?  setAddEventListener1(data): null
//             startGo()
//         }
//
//         catch(err) {
//             sendError("https://hxhby.sse.codesandbox.io/users")
//             console.log(`err: ${err}`)
//         }
//         finally {
//             // document.getElementById('spiner').classList.add("disNone")
//         }
//     }
//     // DELETE
//     const deleteUserFetch = async function fetchAsinc(id){
//         try{
//             const response = await fetch(`https://hxhby.sse.codesandbox.io/delete/${id}`)
//             getFetch(true)
//         }
//         catch(err) {
//             sendError("Ошибка удаления")
//             console.log(`err: ${err}`)
//         }
//         finally {
//
//         }
//     }
//     // PUT
//     const editUserFetch = async function fetchAsinc(data){
//         clearError()
//         try{
//             const response = await fetch("https://hxhby.sse.codesandbox.io/user/edit", {
//               method: "PUT",
//               body: JSON.stringify(data),
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             });
//             setTimeout(() => getFetch(true), 2000)
//         }
//         catch(err) {
//             sendError("Ошибка создания")
//             console.log(`err: ${err}`)
//         }
//         finally {
//         }
//     }
//     // POST
//     const addUserFetch = async function fetchAsinc(data){
//         clearError()
//         try{
//             const response = await fetch("https://hxhby.sse.codesandbox.io/user/add", {
//               method: "POST",
//               body: JSON.stringify(data),
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             });
//             setTimeout(() => getFetch(true), 2000)
//         }
//         catch(err) {
//             sendError("Ошибка создания")
//             console.log(`err: ${err}`)
//         }
//         finally {
//         }
//     }
//
//
//
//
//
//     // рендер таблицы
//     const renderColumns = (data) => {
//     data.length === 0? sendError("Нет юзеров"):
//         container.innerHTML = ' '
//         data.forEach((v,index) => {
//             container.innerHTML +=`
//                     <div class="data-group">
//             <div class="row">
//                 <div class="data-expands">
//                     <div class="col-lg-2 col-md-1">
//                     ${v.username}
//                     </div>
//                     <div class="col-lg-7 col-md-7">
//                         <span class="title">${v.name}</span>
//                     </div>
//                     <div class="col-lg-3 col-md-4">
//
//                             <div class="statusPoint ${getColorStatus(v.status)} uppercase"><strong><i class="fa fa-exclamation-circle"></i> ${getColorTittle(v.status)}</strong>  <!--green, red, __-->
//                     <span class="row-toggle">
//                     <span class="horizontal"></span>
//                     <span class="vertical"></span>
//                     </span>
//                     </div>
//                     </div>
//                     <div class="expandable">
//                     <div class="row">
//                     <div class="col-lg-9 col-md-7 wrapperDesc">
//                     <p>
//                     Адрес: ${v.address?.city}, ${v.address?.street}, ${v.address?.suite}
//
//                      <a href=""></a>
//
//                      <br/>
//                     geo: <a href="https://www.google.ru/maps/place/${v.address?.geo.lat}, ${v.address?.geo.lng}"> ${v.address?.geo.lat}, ${v.address?.geo.lng}</a>
//                     </p>
//                     <p>
//                     Компания: ${v.company?.name},<br/>
//                     Занимается:  ${v.company?.bs},<br/>
//                     Отрасль:  ${v.company?.catchPhrase},<br/>
//                     </p>
//                     </div>
//                     <div class="col-lg-3 col-md-4">
//                     <div class="row">
//                     <div class="col-xs-12 visible-sm visible-xs"><hr></div>
//                     <div class="col-xs-6">email</div>
//                     <div class="col-xs-6 text-right">${v.email}</div>
//                     <div class="col-xs-6">phone</div>
//                     <div class="col-xs-6 text-right">${v.phone}</div>
//                     <div class="col-xs-12"><hr></div>
//                     <div class="col-xs-6">website</div>
//                     <div class="col-xs-6 text-right"><a href='http://${v.website}/'>${v.website}</a> </div>
//                     <div class="col-xs-12">
//                     <hr>
//                     </div>
//                     <div  class="col-xs-6"><button data-id="${v.id}" type="button" class="delete btn btn-danger" data-toggle="modal" data-target="#delete">Удалить</button></div>
//                     <div  class="col-xs-6"><button data-id="${v.id}" type="button" class="edit btn btn-warning" data-toggle="modal" data-target="#edit">Изменить</button></div>
//                     </div>
//                     </div>
//                     </div>
//                     </div>
//                     </div>
//                     </div>
//                     </div>`
//         })
//
//     }
//     // Обработка событий на модальные окна
//     const setAddEventListener1 = (data) => {
//             // Перебор все модальных кнопок удалить/изменить
//         for (let index = 0; index < data.length; index++) {
//             // кнопка модального окна "edit"
//             document.getElementsByClassName("edit")[index].addEventListener("click", function (){
//                 document.getElementById("createFetch").classList.add("disNone")
//                 document.getElementById("editFetch").classList.remove("disNone")
//                 document.getElementById("titleModal").innerText = "Изменение пользователя"
//                 clearError();
//                 const currentId = parseInt(this.getAttribute("data-id"))
//                 const user = data.filter(v=> v.id === currentId)[0]
//                 const {id, username,name,phone,email,status,website} = user
//                 const {city, street,suite,zipcode} = user.address
//                 const {lat, lng} = user.address.geo
//                 const {catchPhrase,bs} = user.company
//                 document.getElementById("editFetch").setAttribute("data-id",id)
//                 document.getElementById("username").value = username
//                 document.getElementById("name").value = name
//                 document.getElementById("phone").value = phone
//                 document.getElementById("email").value = email
//                 document.getElementById("status").value = status
//                 document.getElementById("website").value = website
//                 document.getElementById("city").value = city
//                 document.getElementById("street").value = street
//                 document.getElementById("suite").value = suite
//                 document.getElementById("lat").value = lat
//                 document.getElementById("lng").value = lng
//                 document.getElementById("zipcode").value = zipcode
//                 document.getElementById("companyName").value = user.company.name
//                 document.getElementById("catchPhrase").value = catchPhrase
//                 document.getElementById("bs").value = bs
//             })
//             // кнопка модального окна "delete"
//             document.getElementsByClassName("delete")[index].addEventListener("click", function (){
//                 const currentId = parseInt(this.getAttribute("data-id"))
//                 deleteFetch.setAttribute("data-id", currentId)
//                 nameUser.innerText = data.filter(v=> v.id === currentId)[0].name
//             })
//         }
//     }
//         //Обработка событий для запросов на сервер:
//         // _________________________________________
//         //--удаление
//         //-- удаление
//         deleteFetch.addEventListener("click", function (){
//             deleteUserFetch(this.getAttribute("data-id"))
//         })
//         //--Изменение
//         editFetch.addEventListener("click", function (){
//         const id = this.getAttribute("data-id")
//         const data = {
//           id: id,
//           name: document.getElementById("name").value,
//           username: document.getElementById("username").value,
//           email: document.getElementById("email").value,
//           status: document.getElementById("status").value,
//           address: {
//             street: document.getElementById("street").value,
//             suite: document.getElementById("suite").value,
//             city: document.getElementById("city").value,
//             zipcode: document.getElementById("zipcode").value,
//             geo: {
//               lat: document.getElementById("lat").value,
//               lng: document.getElementById("lng").value,
//             },
//           },
//           phone: document.getElementById("phone").value,
//           website: document.getElementById("website").value,
//           company: {
//             name: document.getElementById("companyName").value,
//             catchPhrase: document.getElementById("catchPhrase").value,
//             bs: document.getElementById("bs").value,
//           },
//         };
//
//         checkInputValue(document.getElementById("edit"))===false?  editUserFetch(data):null
//         })
//         //--Создание
//         createFetch.addEventListener("click", function (){
//             checkInputValue(document.getElementById("edit"))===false?
//             addUserFetch({
//                 name: document.getElementById("name").value,
//                 username: document.getElementById("username").value,
//                 email: document.getElementById("email").value,
//                 status: document.getElementById("status").value,
//                 address: {
//                   street: document.getElementById("street").value,
//                   suite: document.getElementById("suite").value,
//                   city: document.getElementById("city").value,
//                   zipcode: document.getElementById("zipcode").value,
//                   geo: {
//                     lat: document.getElementById("lat").value,
//                     lng: document.getElementById("lng").value,
//                   },
//                 },
//                 phone: document.getElementById("phone").value,
//                 website: document.getElementById("website").value,
//                 company: {
//                   name: document.getElementById("companyName").value,
//                   catchPhrase: document.getElementById("catchPhrase").value,
//                   bs: document.getElementById("bs").value,
//                 },
//               })
//               :null
//         })
//
//     //Вспомогательные функции:
//     // _________________________________________
//     // Отправка ошибки
//     const sendError = (Err) => {
//         container.innerHTML = `<div style="
//         font-size: 30px;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100%;
//         text-transform: uppercase;
//         font-weight: bold;
//         color: #aaadaf;
//         ">${Err}</div>`
//     }
//     // Получение текста по статусу юзера
//     const getColorTittle = (status) => {
//         if(status ==="1") return "АВТОРИЗИРОВАН";
//         if(status ==="2") return "ОТМЕНА";
//         if(status ==="3") return "НЕАВТОРИЗИРОВАН";
//     }
//    // Получение цвета по статусу юзера
//     const getColorStatus = (status) => {
//         if(status ==="1") return "green";
//         if(status ==="2") return " ";
//         if(status ==="3") return "red";
//     }
//     // проверка на пусты поля
//     const checkInputValue = (currentObject) => {
//         let boolError = false
//         for (let i = 0; i < currentObject.getElementsByTagName("input").length; i++) {
//             if(currentObject.getElementsByTagName("input")[i].value === ""){
//                 currentObject.getElementsByTagName("input")[i].classList.add("err")
//                 boolError = true
//             }
//         }
//         return boolError
//     }
//     // удаление ошибок в полях и очистка послей при закрытии модального окна
//     (function(){
//         for (let i = 0; i < document.getElementsByClassName("clear").length; i++) {
//             document.getElementsByClassName("clear")[i].addEventListener("click", function(){
//                 clearError();
//                 clearValue();
//             })
//
//         }
//     })();
//     // кнопка модального окна создания юзера
//     (function(){
//     document.getElementById("createUser").addEventListener("click", function(){
//         document.getElementById("createFetch").classList.remove("disNone")
//         document.getElementById("editFetch").classList.add("disNone")
//         document.getElementById("titleModal").innerText = "Создание пользователя"
//         clearError();
//         clearValue();
//     })
//     })()
//
//     // удаление ошибок в полях
//     const clearError = () => {
//         for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
//             document.getElementsByTagName("input")[i].classList.remove("err")
//
//         }
//     }
//     // очистка послей
//     const clearValue = () => {
//         for (let i = 0; i < document.getElementsByTagName("input").length; i++) {
//             document.getElementsByTagName("input")[i].value = ""
//         }
//     }
//
//     // Start
//     setTimeout(() => getFetch(true), 2000)
//     // getFetch(true)
// })