var btnNotificacion = document.getElementById("buttonN"),  
    btnPermiso = document.getElementById("buttonP")
    titulo = "Muelle 13",
    opciones = {
        icon: "logo.png",
        body: "Recordatorio pagar la luz"
    };

function permiso() {  
        Notification.requestPermission();
};

function mostrarNotificacion() {  
    if(Notification) {
        if (Notification.permission == "granted") {
            var n = new Notification(titulo, opciones);
        }

        else if(Notification.permission == "default") {
            alert("Recordatorio pagar la luz");
            var n = new Notification(titulo, opciones);
        }

        else {
            alert("Bloqueaste los permisos de notificación");
        }
    }
};

btnPermiso.addEventListener("click", permiso);  
btnNotificacion.addEventListener("click", mostrarNotificacion);
