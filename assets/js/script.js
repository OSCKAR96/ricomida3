document.getElementById("MiBoton").onclick = function() {
    alert("El Correo fue Enviado Correctamente")
}

document.getElementById("titulo1").ondblclick = function(){
    this.style.color ="red";
}

document.getElementById("titulo2").ondblclick = function(){
    this.style.color ="red";
}

$(document).ready(
    function(){
        $(".card-title").click(
            function(){
                $(".card-text").toggle();
            }
        )
    }
)