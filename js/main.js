
function exito() {
    location.assign('inicio.html');
};

$(document).ready(function () {

    $('#botonLogin').click(function () {
        var user_email = $("#email").val();
        var user_password = $("#password").val();

        firebase.auth().signInWithEmailAndPassword(user_email, user_password).then(exito).catch(function (error) {
            alert("Ingresa Datos " + error);
        });
    });
    $('#email').keypress(function (e) {
        if (e.which == 13) {
            $('#password').focus();
        }
        $('#password').keypress(function (e) {
            if (e.which == 13) {
                $('#password').focus();
            }
        
 
    $('#password').keypress(function (e) {
        if (e.which == 13) {
            user_email = $("#email").val();
            user_password = $("#password").val();


            firebase.auth().signInWithEmailAndPassword(user_email, user_password,).then(exito).catch(function (error) {
                alert("Ingresa Datos " + error);
            });
        }

    });
});
});
});
