function registroE(){
    
    var te=document.getElementById('tipoE').value;
    var nit=document.getElementById('nitE').value;
    var rs=document.getElementById('nameE').value;
    var city=document.getElementById('cityE').value;
    var dir=document.getElementById('dirE').value;
    var correo=document.getElementById('correoE').value;
    var cp=document.getElementById('cpE').value;
    var reg=document.getElementById('regE').value;
    
    let objEmp={te,nit,rs,city,dir,correo,cp,reg};
    
     if(localStorage.getItem("empleador") === null){
        let arrEmp = [];
        arrEmp.push(objEmp);
        localStorage.setItem("empleador", JSON.stringify(arrEmp));
    } else{
        let arrEmp = JSON.parse(localStorage.getItem("empleador"));
        arrEmp.push(objEmp);
        localStorage.setItem("empleador", JSON.stringify(arrEmp));
      
    }
    document.getElementById('crearE').reset();
    mostrarE();
}

function mostrarE(){
    let arrEmp = JSON.parse(localStorage.getItem("empleador"));
    document.getElementById('tablaEM').innerHTML ='';
    for(var i=0;i<arrEmp.length;i++){
        let tipoe=arrEmp[i].te;
        let nite=arrEmp[i].nit;
        let rse=arrEmp[i].rs;
        let citye=arrEmp[i].city;
        let dire=arrEmp[i].dir;
        let correoe=arrEmp[i].correo;
        let cpe=arrEmp[i].cp;
        let rege=arrEmp[i].reg;
        
        document.getElementById('tablaEM').innerHTML += 
        `<tr>
         <td>${tipoe}</td>
         <td>${nite}</td>
         <td>${rse}</td>
         <td>${citye}</td>
         <td>${dire}</td>
         <td>${correoe}</td>
         <td>${cpe}</td>
         <td>${rege}</td>
         <td>
         <button type="button" class="btn btn-warning" onclick="editarE(${nite});"><ion-icon name="create-outline"></ion-icon></button>
         <button type="button" class="btn btn-danger" onclick="eliminarE(${nite})"><ion-icon name="trash-outline"></ion-icon></button>
         </td>
         </tr>`
    }
    
}

function editarE(nitE){
    $("#ModalE2").modal("show");
    let arrEmp = JSON.parse(localStorage.getItem("empleador"));
    
    for(var i=0;i<arrEmp.length;i++){
        if(arrEmp[i].nit==nitE){
            document.getElementById('editarEMP').innerHTML=
                `<div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Actualizar Empleador</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body justify-content-around">
                        <form id="crearE" action="">
                        <div class="container mt-5">
                            <div class="row">
                                <div class="form-group col-6">
                                    <label>Tipo</label>
                                    <select class="form-control" id="tipoE1">
                                        <option value="${arrEmp[i].te}" selected>${arrEmp[i].te}</option>
                                        <option>Juridico</option>
                                        <option>Natural</option>
                                    </select>
                                </div>
                                <div class="form-group col-6">
                                    <label>Nit o cedula</label>
                                    <input type="number" id="nitE1" required class="form-control" value="${arrEmp[i].nit}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Razon social</label>
                                    <input type="text" id="nameE1" required class="form-control" value="${arrEmp[i].rs}" maxlength="30">
                                </div>
                                <div class="form-group col-6">
                                    <label>Ciudad</label>
                                    <select class="form-control" id="cityE1">
                                        <option value="${arrEmp[i].city}" selected>${arrEmp[i].city}</option>
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
                                    <input type="text" id="dirE1" required class="form-control" value="${arrEmp[i].dir}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Email</label>
                                    <input type="email" name="" id="correoE1" required class="form-control" value="${arrEmp[i].correo}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Codigo postal</label>
                                    <input type="text" min="1" max="6" id="cpE1" class="form-control" value="${arrEmp[i].cp}">
                                </div>
                                <div class="form-group col-6">
                                    <label>Regimen</label>
                                    <select id="regE1" class="form-control">
                                        <option value="${arrEmp[i].reg}" selected>${arrEmp[i].reg}</option>
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
                        <button type="button" class="btn btn-primary" onclick="actualizarE(${i})">Actualizar</button>
                    </div> `
        }
    }
}

function actualizarE(datoE){
    let arrEmp = JSON.parse(localStorage.getItem("empleador"));
        
    arrEmp[datoE].te=document.getElementById('tipoE1').value;
    arrEmp[datoE].nit=document.getElementById('nitE1').value;
    arrEmp[datoE].rs=document.getElementById('nameE1').value;
    arrEmp[datoE].city=document.getElementById('cityE1').value;
    arrEmp[datoE].dir=document.getElementById('dirE1').value;
    arrEmp[datoE].correo=document.getElementById('correoE1').value;
    arrEmp[datoE].cp=document.getElementById('cpE1').value;
    arrEmp[datoE].reg=document.getElementById('regE1').value;
    
    localStorage.setItem("empleador", JSON.stringify(arrEmp));
    mostrarE();
    $("#ModalE2").modal("hide");
}

function eliminarE(datoEnd){
    let arrEmp = JSON.parse(localStorage.getItem("empleador"));
    for(var i=0;i<arrEmp.length;i++){
        if(arrEmp[i].nit==datoEnd){
            arrEmp.splice(i,1);
        }
    }
    localStorage.setItem("empleador", JSON.stringify(arrEmp));
    mostrarE();
    $('#emple').toast('show')
}