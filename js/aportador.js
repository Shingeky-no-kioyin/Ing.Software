$(document).ready(function(){

    $("#caj1").hide()
    $("#caj2").hide()
    $("#caj3").hide()

    $("#bt1").click(
        function (){
            $("#caj1").fadeIn()
            $("#caj2").hide()
            $("#caj3").hide()
        });

    $("#bt2").click(
        function (){
            $("#caj2").fadeIn()
            $("#caj1").hide()
            $("#caj3").hide()
        });

    $("#bt3").click(
        function (){
            $("#caj3").fadeIn()
            $("#caj1").hide()
            $("#caj2").hide()
        });

});