function registroAF(){
    
    var td=document.getElementById('tipo').value;
    var nc=document.getElementById('cedulaAF').value;
    var np=document.getElementById('nombreAF').value;
    var fc=document.getElementById('fecha').value;
    var es=document.getElementById('especialidad').value;
    
    let objAF={td,nc,np,fc,es};
    
     if(localStorage.getItem("afiliados") === null){
        let arrAF = [];
        arrAF.push(objAF);
        localStorage.setItem("afiliados", JSON.stringify(arrAF));
    } else{
        let arrAF = JSON.parse(localStorage.getItem("afiliados"));
        arrAF.push(objAF);
        localStorage.setItem("afiliados", JSON.stringify(arrAF));
      
    }
    document.getElementById('crearAf').reset();
    mostrar();
}

function mostrar(){
    let arrAF = JSON.parse(localStorage.getItem("afiliados"));
    document.getElementById('tablaAF').innerHTML ='';
    for(var i=0;i<arrAF.length;i++){
        let tipod=arrAF[i].td;
        let numc=arrAF[i].nc;
        let nomp=arrAF[i].np;
        let fec=arrAF[i].fc;
        let esp=arrAF[i].es;
        
        document.getElementById('tablaAF').innerHTML += 
        `<tr>
        <td>${tipod}</td>
        <td>${numc}</td>
        <td>${nomp}</td>
        <td>${fec}</td>
        <td>${esp}</td>
        <td>
        <button type="button" class="btn btn-warning" onclick="editarAF(${numc});"><ion-icon name="create-outline"></ion-icon></button>
        <button type="button" class="btn btn-danger" onclick="eliminarAF(${numc})"><ion-icon name="trash-outline"></ion-icon></button>
        </td>
        </tr>`
    }
    
}

function editarAF(cedulaE){
    $("#Modal3").modal("show");
    let arrAF = JSON.parse(localStorage.getItem("afiliados"));
    
    for(var i=0;i<arrAF.length;i++){
        if(arrAF[i].nc==cedulaE){
            document.getElementById('editarAf').innerHTML=
                `<div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel1">Actualizar cita</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body justify-content-around">
                        <form>
                            <div class="field">
                              <label class="label">Tipo de documento</label>
                                <select class="form-control" name="" id="tipo1">
                                    <option value="${arrAF[i].td}" selected>${arrAF[i].td}</option>
                                    <option>Cedula de Ciudadania</option>
                                    <option>Cedula de extranjeria</option>
                                    <option>Tarjeta de identidad</option>
                                    <option>Registro Civil</option>
                                    <option>Otro</option>
                                </select>
                            </div>
                            <div class="field">
                              <label class="label">Numero</label>
                              <div class="control">
                                <input id="cedulaAF1" class="input form-control" type="number" required value="${arrAF[i].nc}">
                            </div>
                           </div>
                           <div class="field">
                              <label class="label">Paciente</label>
                              <div class="control">
                                <input  id="nombreAF1"  class="input form-control" type="text"  value="${arrAF[i].np}" maxlength="30">
                              </div>
                           </div>
                           <div class="field">
                              <label class="label">Fecha Cita</label>
                              <div class="control">
                                <input id="fecha1" class="input form-control" type="datetime-local"  value="${arrAF[i].fc}">
                              </div>
                           </div>
                           <div class="field">
                              <label class="label">Especialidad</label>
                              <select class="form-control" name="" id="especialidad1">
                                    <option value="${arrAF[i].es}" selected>${arrAF[i].es}</option>
                                    <option>Medico General</option>
                                    <option>Oftalmologia</option>
                                    <option>Pediatria</option>
                                    <option>Ginecologia</option>
                                    <option>Odontologia</option>
                                </select>
                            </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="actualizar(${i})">Actualizar</button>
                        </div>`
        }
    }
}

function actualizar(dato){
    let arrAF = JSON.parse(localStorage.getItem("afiliados"));
    
    arrAF[dato].td=document.getElementById('tipo1').value;
    arrAF[dato].nc=document.getElementById('cedulaAF1').value;
    arrAF[dato].np=document.getElementById('nombreAF1').value;
    arrAF[dato].fc=document.getElementById('fecha1').value;
    arrAF[dato].es=document.getElementById('especialidad1').value;
    
    localStorage.setItem("afiliados", JSON.stringify(arrAF));
    mostrar();
    $("#Modal3").modal("hide");
}

function eliminarAF(datoFin){
    let arrAF = JSON.parse(localStorage.getItem("afiliados"));
    for(var i=0;i<arrAF.length;i++){
        if(arrAF[i].nc==datoFin){
            arrAF.splice(i,1);
        }
    }
    localStorage.setItem("afiliados", JSON.stringify(arrAF));
    mostrar();
    $('#afili').toast('show')
}
