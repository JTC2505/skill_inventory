var userId;

function Exitoso() {
    M.toast({
        html: 'Cuenta Creada'
    });
    location.assign('DatosUser.html');
};

function alFinalizar(error) {

    if (error !== 'undefined') {
        switch (error.code) {
            case 'auth/email-already-in-use':
                alert('ERROR: No se puede crear la nueva cuenta de usuario, por que el e-mail ya está en uso !');
                break;
            case 'auth/invalid-email':
                alert('ERROR: El e-mail facilitado no es un e-mail correcto.');
                break;
            default:
                alert('Se ha producido un error al crear el usuario.\n\n' + error + '\n');
                break;
        }
    }
}
$(document).ready(function () {

    $('#btnRegistrar').click(function () {

        var user_email = $('#email').val();
        var user_password = $('#password').val();
        var password_confirm = $('#passwordC').val();

        if (user_password != password_confirm) {
            M.toast({
                html: 'La Confirmacion de la Contraseña es Incorrecta'
            });
        } else {
            document.getElementById("email").value = ""
            document.getElementById("password").value = ""
            document.getElementById("passwordC").value = ""
            firebase.auth().createUserWithEmailAndPassword(user_email, user_password).then(Exitoso).catch(alFinalizar);
        }
    });

    $("#btnCancelar").click(function () {
        location.assign('index.html');
    });
});



function exito() {
    location.assign('inicio.html');
};

$(document).ready(function () {

    $('#btnRegistrar').click(function () {
        var user_email = $('#email').val();
        var user_password = $('#password').val();
        var password_confirm = $('#passwordC').val();


        firebase.auth().signInWithEmailAndPassword(user_email, user_password, password_confirm).then(exito).catch(function (error) {
            alert("Ingresa Datos " + error);
        });
    });
    $('#email').keypress(function (e) {
        if (e.which == 13) {
            $('#password').focus();
        } 
    });

    $('#password').keypress(function (e) {
        if (e.which == 13) {
            $('#passwordC').focus();
        }
    });
    $('#passwordC').keypress(function (e) {
        if (e.which == 13) {
            var user_email = $('#email').val();
            var user_password = $('#password').val();
            var password_confirm = $('#passwordC').val();
    
            if (user_password != password_confirm) {
                M.toast({
                    html: 'La Confirmacion de la Contraseña es Incorrecta'
                });
            } else {
                document.getElementById("email").value = ""
                document.getElementById("password").value = ""
                document.getElementById("passwordC").value = ""
                firebase.auth().createUserWithEmailAndPassword(user_email, user_password).then(Exitoso).catch(alFinalizar);
            }
        }

    });
});