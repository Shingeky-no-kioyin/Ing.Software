//VALIDANDO INICIO DE SESION 

$(document).ready(function () {
    $("#error1").hide()

    $("#txt1").blur(function () {
        console.log("txt1 perdió el foco")
        if ($("#txt1").val().length < 4) {
            $("#error1").html("Recuerda que el nombre de usuario debe tener como minimo 4 caracteres")
            $("#error1").fadeIn()
        } else {
            $("#error1")
        }
    });

    $("#txt1").focus(function () {
        console.log("txt1 ganó el foco")
        $("#error1").fadeOut()
    });
    $("#form1").submit(function () {
        console.log("submit")

        var pass = $("#txt2").val()

        if (pass.length < 8) {
            $("#error2").html("contraseña debe tener minimo 8 caracteres")
            event.preventDefault()
        }
    })
});

//SE TERMINÓ LA VALIDACIÓN DE INICIO SESION

//VALIDACIÓN DE  FORMULARIO
$(document).ready(function () {

    //DESLIZAR FORMULARIO

    $("#flip").click(function () {
        $("#panel").slideToggle("slow");
    });


    //VALIDACIÓN FORMULARIO PÁGINA PRIENCIPAL

    //NOMBRE Y APELLIDO

    $("#errorNom").hide()

    $("#NombreApellido").blur(function () {
        console.log("NombreApellido perdió el foco")


        if ($("#NombreApellido").val().length < 9) {
            $("#errorNom").html("Debe contener mínimo 10 caractres.")
            $("#errorNom").fadeIn()
        }
        else $("#errorNom").hide()
    });

    $("NombreApellido").focus(function () {
        console.log("NombreApellido ganó el foco")
        $("errorNom").fadeOut()
    });

    //CORREO ELECTRÓNICO

    $("#errorgmail").hide()

    $("#email").blur(function () {
        console.log("email perdió el foco")


        if ($("#email").val().length = 0) {
            $("#errorgmail").html("Debe ingresar un correo electrónico.")
            $("#errorgmail").fadeIn()
        }
        else $("#errorgmail").hide()
    });

    $("email").focus(function () {
        console.log("email ganó el foco")
        $("errorgmail").fadeOut()
    });


    //VALIDACION MENSAJE
    $("#ErrorMensaje").hide()

    $("#mensaje").blur(function () {
        console.log("mensaje perdió el foco")

        if ($("#mensaje").val().length < 10) {
            $("#ErrorMensaje").html("Debe contener mínimo 5 caractres.")
            $("#ErrorMensaje").fadeIn()
        }
        else $("#ErrorMensaje").hide()
    });

    $("#mensaje").focus(function () {
        console.log("mensaje ganó el foco")
        $("ErrorMensaje").fadeOut()
    });


});


$(document).ready(function () {

    $("#droow0").click(function () {
        $("#aaa0").slideToggle("slow");
    });

    $("#droow1").click(function () {
        $("#aaa1").slideToggle("slow");
    });

    $("#droow2").click(function () {
        $("#aaa2").slideToggle("slow");
    });


    $("#droow3").click(function () {
        $("#aaa3").slideToggle("slow");
    });
    
});


//<div class="alert alert-success" role="alert">
//A simple success alert—check it out!
//</div>




