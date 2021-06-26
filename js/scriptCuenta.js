$(document).ready(function(){

    $("#tablaconta").hide()

    $("#enero").click(
        function (){
            $("#tablaconta").fadeIn()
        });
});

$(document).ready(function(){

    $('#ttt').hide()

    $('#ene').click(
        function(){
            $('#ttt').fadeIn()
            $('#bbb').hide()
            $('#lll').hide()
        });
});

$(document).ready(function(){

    $('#bbb').hide()

    $('#efe').click(
        function(){
            $('#bbb').fadeIn()
            $('#ttt').hide()
            $('#lll').hide()
        });
});

$(document).ready(function(){

    $('#lll').hide()

    $('#mar').click(
        function(){
            $('#lll').fadeIn()
            $('#bbb').hide()
            $('#ttt').hide()
        });
});

/*---------------ingreso----------------*/
//Asignamos como valor principal al "select", el valor 0, que es el que se mostrará sin haber seleccionado nada.
if ($('#test').val() == 0)
    {
        $(".esp").css("display","none"); //ocultamos esto, ya que solo lo mostraremos en caso de que sea estancia periódica
    };

//Detectamos los cambios y mostramos uno u otro form
$('#test').change(function() {
    
    if ($('#test').val() == 1)
  {
        $(".esp").css("display","none");
    };
    
    if ($('#test').val() == 2)
    {
        $(".esp").css("display","block");
    };
    
});

