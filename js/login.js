
function tomarRegistro(){
    
    var cedulaR=document.getElementById('cedula').value;
    var claveR=document.getElementById('passwd').value;
    var nombreR=document.getElementById('nombre').value;
    var ciudadR=document.getElementById('ciudad').value;
    var correoR=document.getElementById('correo').value;
    var telefonoR=document.getElementById('telefono').value;
    
    let regLog =  {cedulaR,claveR,nombreR,ciudadR,correoR,telefonoR};
    
    if(localStorage.getItem("Login") === null){
        let arrlogin = [];
        arrlogin.push(regLog);
        localStorage.setItem("Login", JSON.stringify(arrlogin));
    } else{
        let arrlogin = JSON.parse(localStorage.getItem("Login"));
        arrlogin.push(regLog);
        localStorage.setItem("Login", JSON.stringify(arrlogin));
      
    }
    document.getElementById('crearLogin').reset();
}

function login(){
    
    var cont=0;
    let arrlogin = JSON.parse(localStorage.getItem("Login"));
    var cedulaLogin=document.getElementById('cedulaL').value;
    var claveLogin=document.getElementById('claveL').value;
    
    for(var i=0;i<arrlogin.length;i++){
        if(arrlogin[i].cedulaR==cedulaLogin && arrlogin[i].claveR==claveLogin){
            setTimeout ("redireccionar()", 10);
            redireccionar();
            cont=1;
        }
    }
    if(cont==0){
        alert('Usuario o clave incorrecto');
    }
}

function redireccionar(){window.location="inicio.html";}
