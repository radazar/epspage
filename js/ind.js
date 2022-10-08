function registroI(){
    
    var ti=document.getElementById('tipoI').value;
    var nit=document.getElementById('nitI').value;
    var rs=document.getElementById('nameI').value;
    var city=document.getElementById('cityI').value;
    var dir=document.getElementById('dirI').value;
    var correo=document.getElementById('correoI').value;
    var bar=document.getElementById('barI').value;
    var sed=document.getElementById('sedI').value;
    
    let objInd={ti,nit,rs,city,dir,correo,bar,sed};
    
     if(localStorage.getItem("independiente") === null){
        let arrInd = [];
        arrInd.push(objInd);
        localStorage.setItem("independiente", JSON.stringify(arrInd));
    } else{
        let arrInd = JSON.parse(localStorage.getItem("independiente"));
        arrInd.push(objInd);
        localStorage.setItem("independiente", JSON.stringify(arrInd));
      
    }
    document.getElementById('crearI').reset();
    mostrarI();
}

function mostrarI(){
    let arrInd = JSON.parse(localStorage.getItem("independiente"));
    document.getElementById('tablaIN').innerHTML ='';
    for(var i=0;i<arrInd.length;i++){
        let tipoi=arrInd[i].ti;
        let niti=arrInd[i].nit;
        let rsi=arrInd[i].rs;
        let cityi=arrInd[i].city;
        let diri=arrInd[i].dir;
        let correoi=arrInd[i].correo;
        let bari=arrInd[i].bar;
        let sedi=arrInd[i].sed;
        
        document.getElementById('tablaIN').innerHTML += 
        `<tr>
         <td>${tipoi}</td>
         <td>${niti}</td>
         <td>${rsi}</td>
         <td>${cityi}</td>
         <td>${diri}</td>
         <td>${correoi}</td>
         <td>${bari}</td>
         <td>${sedi}</td>
         <td>
         <button type="button" class="btn btn-warning" onclick="editarI(${niti});"><ion-icon name="create-outline"></ion-icon></button>
         <button type="button" class="btn btn-danger" onclick="eliminarI(${niti})"><ion-icon name="trash-outline"></ion-icon></button>
         </td>
         </tr>`
    }
    
}

function editarI(nitI){
    $("#ModalI2").modal("show");
    let arrInd = JSON.parse(localStorage.getItem("independiente"));
    
    for(var i=0;i<arrInd.length;i++){
        if(arrInd[i].nit==nitI){
            document.getElementById('editarIN').innerHTML=
                `<div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Actualizar persona independiente</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body justify-content-around">
                        <form id="crearI" action="">
                        <div class="container mt-5">
                            <div class="row">
                                <div class="form-group col-6">
                                    <label>Tipo</label>
                                    <select class="form-control" id="tipoI1">
                                        <option value="${arrInd[i].ti}" selected>${arrInd[i].ti}</option>
                                        <option>Juridico</option>
                                        <option>Natural</option>
                                    </select>
                                </div>
                                <div class="form-group col-6">
                                    <label>Nit o cedula</label>
                                    <input type="number" id="nitI1" required class="form-control" value="${arrInd[i].nit}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Razon social</label>
                                    <input type="text" id="nameI1" required class="form-control" value="${arrInd[i].rs}" maxlength="30">
                                </div>
                                <div class="form-group col-6">
                                    <label>Ciudad</label>
                                    <select class="form-control" id="cityI1">
                                        <option value="${arrInd[i].city}" selected>${arrInd[i].city}</option>
                                        <option>Bogota</option>
                                        <option>Santa Marta</option>
                                        <option>cartagena</option>
                                        <option>Barranquilla</option>
                                        <option>Cali</option>
                                        <option>Villavicencio</option>
                                    </select>
                                </div>
                                <div class="form-group col-6">
                                    <label>Direccion</label>
                                    <input type="text" id="dirI1" required class="form-control" value="${arrInd[i].dir}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Email</label>
                                    <input type="email" name="" id="correoI1" required class="form-control" value="${arrInd[i].correo}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Barrio</label>
                                    <input type="text" min="1" max="6" id="barI1" class="form-control" value="${arrInd[i].bar}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Regimen</label>
                                    <select id="sedI1" class="form-control">
                                        <option value="${arrInd[i].sed}" selected>${arrInd[i].sed}</option>
                                        <option>Simplificado</option>
                                        <option>Comun</option>
                                        <option>Especial</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="actualizarI(${i})">Actualizar</button>
                    </div> `
        }
    }
}

function actualizarI(datoI){
    let arrInd = JSON.parse(localStorage.getItem("independiente"));
        
    arrInd[datoI].ti=document.getElementById('tipoI1').value;
    arrInd[datoI].nit=document.getElementById('nitI1').value;
    arrInd[datoI].rs=document.getElementById('nameI1').value;
    arrInd[datoI].city=document.getElementById('cityI1').value;
    arrInd[datoI].dir=document.getElementById('dirI1').value;
    arrInd[datoI].correo=document.getElementById('correoI1').value;
    arrInd[datoI].bar=document.getElementById('barI1').value;
    arrInd[datoI].sed=document.getElementById('sedI1').value;
    
    localStorage.setItem("independiente", JSON.stringify(arrInd));
    mostrarI();
    $("#ModalI2").modal("hide");
}

function eliminarI(datoIN){
    let arrInd = JSON.parse(localStorage.getItem("independiente"));
    for(var i=0;i<arrInd.length;i++){
        if(arrInd[i].nit==datoIN){
            arrInd.splice(i,1);
        }
    }
    localStorage.setItem("independiente", JSON.stringify(arrInd));
    mostrarI();
    $('#indep').toast('show')
}

