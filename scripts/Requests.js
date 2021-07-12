// GET
const getFetch = async function fetchAsinc(setAddEventListenerBool){
    try{
        const response = await fetch("https://hxhby.sse.codesandbox.io/users")
        const data = await response.json()
        renderColumns(data)
        setAddEventListenerBool === true?  setAddEventListener1(data): null
        startGo()
    }

    catch(err) {
        sendError("https://hxhby.sse.codesandbox.io/users")
        console.log(`err: ${err}`)
    }
    finally {
        // document.getElementById('spiner').classList.add("disNone")
    }
}
// DELETE
const deleteUserFetch = async function fetchAsinc(id){
    try{
        const response = await fetch(`https://hxhby.sse.codesandbox.io/delete/${id}`)
        getFetch(true)
    }
    catch(err) {
        sendError("Ошибка удаления")
        console.log(`err: ${err}`)
    }
    finally {

    }
}
// PUT
const editUserFetch = async function fetchAsinc(data){
    clearError()
    try{
        const response = await fetch("https://hxhby.sse.codesandbox.io/user/edit", {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await getFetch(true)
        // Закрытие мобалки
        closeModalWindow("edit")
    }
    catch(err) {
        sendError("Ошибка создания")
        console.log(`err: ${err}`)
    }
    finally {
    }
}
// POST
const addUserFetch = async function fetchAsinc(data){
    clearError()
    try{
        const response = await fetch("https://hxhby.sse.codesandbox.io/user/add", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await getFetch(true)
        // Закрытие мобалки
        closeModalWindow("edit")
    }
    catch(err) {
        sendError("Ошибка создания")
        console.log(`err: ${err}`)
    }
    finally {
    }
}