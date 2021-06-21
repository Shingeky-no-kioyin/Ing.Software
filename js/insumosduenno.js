$(document).ready(function(){

    $("#btn_1").hide()
    $("#btn_2").hide()
    $("#btn_3").hide()

    $("#boton_1").click(
        function (){
            $("#btn_1").fadeIn()
            $("#btn_2").hide()
            $("#btn_3").hide()
        });

    $("#boton_2").click(
        function (){
            $("#btn_2").fadeIn()
            $("#btn_1").hide()
            $("#btn_3").hide()
        });

    $("#boton_3").click(
        function (){
            $("#btn_3").fadeIn()
            $("#btn_1").hide()
            $("#btn_2").hide()
        });

});