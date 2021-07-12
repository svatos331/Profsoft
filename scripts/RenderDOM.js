

// рендер таблицы
const renderColumns = (data) => {
    data.length === 0? sendError("Нет юзеров"):
        container.innerHTML = ' '
    data.forEach((v,index) => {
        container.innerHTML +=`
                    <div class="data-group">
            <div class="row">
                <div class="data-expands">
                    <div class="col-lg-2 col-md-1">
                    ${v.username}
                    </div>
                    <div class="col-lg-7 col-md-7">
                        <span class="title">${v.name}</span>
                    </div>
                    <div class="col-lg-3 col-md-4">

                            <div class="statusPoint ${getColorStatus(v.status)} uppercase"><strong><i class="fa fa-exclamation-circle"></i> ${getColorTittle(v.status)}</strong>  <!--green, red, __-->
                    <span class="row-toggle">
                    <span class="horizontal"></span>
                    <span class="vertical"></span>
                    </span>
                    </div>
                    </div>
                    <div class="expandable">
                    <div class="row">
                    <div class="col-lg-9 col-md-7 wrapperDesc">
                    <p>
                    Адрес: ${v.address?.city}, ${v.address?.street}, ${v.address?.suite}
                     
                     <a href=""></a>
                     
                     <br/>
                    geo: <a href="https://www.google.ru/maps/place/${v.address?.geo.lat}, ${v.address?.geo.lng}"> ${v.address?.geo.lat}, ${v.address?.geo.lng}</a> 
                    </p>
                    <p>
                    Компания: ${v.company?.name},<br/>
                    Занимается:  ${v.company?.bs},<br/>
                    Отрасль:  ${v.company?.catchPhrase},<br/>
                    </p>
                    </div>
                    <div class="col-lg-3 col-md-4">
                    <div class="row">
                    <div class="col-xs-12 visible-sm visible-xs"><hr></div>
                    <div class="col-xs-6">email</div>
                    <div class="col-xs-6 text-right">${v.email}</div>
                    <div class="col-xs-6">phone</div>
                    <div class="col-xs-6 text-right">${v.phone}</div>
                    <div class="col-xs-12"><hr></div>
                    <div class="col-xs-6">website</div>
                    <div class="col-xs-6 text-right"><a href='http://${v.website}/'>${v.website}</a> </div>
                    <div class="col-xs-12">
                    <hr>
                    </div>
                    <div  class="col-xs-6"><button data-id="${v.id}" type="button" class="delete btn btn-danger" data-toggle="modal" data-target="#delete">Удалить</button></div>
                    <div  class="col-xs-6"><button data-id="${v.id}" type="button" class="edit btn btn-warning" data-toggle="modal" data-target="#edit">Изменить</button></div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>`
    })

}