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

        var user_email = $('#user_email').val();
        var user_password = $('#user_password').val();
        var password_confirm = $('#password_confirm').val();

        if (user_password != password_confirm) {
            M.toast({
                html: 'La Confirmacion de la Contraseña es Incorrecta'
            });
        } else {
            document.getElementById("user_email").value = ""
            document.getElementById("user_password").value = ""
            document.getElementById("password_confirm").value = ""
            firebase.auth().createUserWithEmailAndPassword(user_email, user_password).then(Exitoso).catch(alFinalizar);
        }
    });

    $("#btnCancelar").click(function () {
        location.assign('index.html');
    });
});