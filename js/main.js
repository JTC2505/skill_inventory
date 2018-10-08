function exito() {
    $("#spinner").html("");
    location.assign('inicio.html');
}

$(function () {
    $("#botonLogin").click(function () {
        $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
        var user_email = $("#user_email").val();
        var user_password = $("#user_password").val();

        firebase.auth().signInWithEmailAndPassword(user_email, user_password).then(exito).catch(function (error) {
            $("#spinner").html("");
            //console.log(error);
            alert("Error detectado:\n\n" + error.message);
        });
    });
});