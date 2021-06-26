$(document).ready(function () {

    $("#caj1").hide()
    $("#caj2").hide()
    $("#w").hide()
    $("#e").hide()
    $("#r").hide()
    $("#hh1").hide()

    $("#bt1").click(
        function () {
            $("#caj1").fadeIn()
            $("#caj2").hide()
        });

    $("#bt2").click(
        function () {
            $("#caj2").fadeIn()
            $("#caj1").hide()
        });

    $("#bt3").click(
        function () {
            $("#w").fadeIn()
            $("#e").fadeIn()
            $("#r").fadeIn()
            $("#hh1").fadeIn()
            $("#caj1").hide()
            $("#caj2").hide()
            $("#bt1").hide()
            $("#bt2").hide()
            $("#bt3").hide()
        });

});

$(document).ready(function () {

    $("#abc").click(function () {
        $("#dfg").slideToggle("slow");
    });

});


$(document).ready(function () {

    $("#ww").hide()
    $("#ee").hide()
    $("#rr").hide()

    $("#w").click(
        function () {
            $("#ww").fadeIn()
            $("#ee").hide()
            $("#rr").hide()
        });

    $("#e").click(
        function () {
            $("#ee").fadeIn()
            $("#ww").hide()
            $("#rr").hide()
            $('#tbl3').hide()
            $('#tbl2').hide()
            $('#tbl1').hide()
        });

    $("#r").click(
        function () {
            $("#rr").fadeIn()
            $("#ww").hide()
            $("#ee").hide()
            $('#tbl3').hide()
            $('#tbl2').hide()
            $('#tbl1').hide()
            $('#uwu').hide()
            $("#jeje").hide()
            $('#jojo').hide()
        });

});


$(document).ready(function () {

    $('#tbl1').hide()

    $('#01e').click(
        function () {
            $('#tbl1').fadeIn()
            $('#tbl2').hide()
            $('#tbl3').hide()
        });
});

$(document).ready(function () {

    $('#tbl2').hide()

    $('#02f').click(
        function () {
            $('#tbl2').fadeIn()
            $('#tbl1').hide()
            $('#tbl3').hide()
        });
});

$(document).ready(function () {

    $('#tbl3').hide()

    $('#03m').click(
        function () {
            $('#tbl3').fadeIn()
            $('#tbl2').hide()
            $('#tbl1').hide()
        });
});

$(document).ready(function () {

    $('#uwu').hide()
    $("#jeje").hide()

    $('#start').click(
        function () {
            $('#uwu').fadeIn()

        });
    $('#uwu').click(
        function () {
            $('#jeje').fadeIn()
        });
});

$(document).ready(function () {

    $('#jojo').hide()

    $('#jeje').click(
        function () {
            $('#jojo').fadeIn()
        });
});