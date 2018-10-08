function exito() {
    $("#spinner").html("");
    location.assign('inicio.html');
}


$('#botonLogin').click(function () {
    $("#spinner").html("<img src='img/spinner.gif' style='width:25px; height:25px;'/>");
    user_email = $("#user_email").val();
    user_password = $("#user_password").val();
    firebase.auth().signInWithEmailAndPassword(user_email, user_password).then(exito).catch(function (error) {

        alert("Error detectado:\n\n" + error.message);
    });
});
$('#user_email').keypress(function (e) {
    if (e.which == 13) {
        $('#user_password').focus();
    }
});
$('#user_password').keypress(function (e) {
    if (e.which == 13) {
        user_email = $('#user_email').val();
        user_password = $('#user_password').val();
    }
    firebase.auth().signInWithEmailAndPassword(user_email, user_password).then(exito).catch(function (error) {

        alert("Error detectado:\n\n" + error.message);
    });
});
