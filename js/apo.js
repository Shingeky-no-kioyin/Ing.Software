$(document).ready(function () {

    $('#tabla1').hide()
    $('#vergrafico1').hide()
    $('#grafico1').hide()

    $('#vertabla1').click(
        function () {
            $('#tabla1').fadeIn()
            $('#vergrafico1').fadeIn()
        });
    $('#vergrafico1').click(
        function () {
            $('#grafico1').fadeIn()
            $('#tabla1').hide()
            $('#vergrafico1').hide()
            setTimeout(function () {
                $('#grafico1').fadeOut(1500);
            }, 5000);
        });
});



$(document).ready(function () {

    $('#tabla2').hide()
    $('#vergrafico2').hide()
    $('#grafico2').hide()

    $('#vertabla2').click(
        function () {
            $('#tabla2').fadeIn()
            $('#vergrafico2').fadeIn()
        });

    $('#vergrafico2').click(
        function () {
            $('#grafico2').fadeIn()
            $('#tabla2').hide()
            $('#vergrafico2').hide()
            setTimeout(function () {
                $("#grafico2").fadeOut(1500);
            }, 5000);
        });

});