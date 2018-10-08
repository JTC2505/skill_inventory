var userId;
var imagen;

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
        userId = firebase.auth().currentUser.uid;
        var user_name = $('#user_name').val();
        var user_lastname = $('#user_lastname').val();
        var user_sex = $('#user_sex').val();
        var user_telephone = $('#user_telephone').val();

        if(imagen != ""){
            imagen = 'https://png.icons8.com/user/android/1600';
        }

        var datouser = {
            Uid: userId,
            Nombre: user_name,
            Apellido: user_lastname,
            Sexo: user_sex,
            Telefono: user_telephone,
            Imagen: imagen
        };
        if ((user_name == "") || (user_lastname == "") || (user_sex == "") || (user_telephone == "")) {
            M.toast({
                html: 'Debe llenar todos los campos'
            });
        }else{
            firebase.database().ref('DatosUsuarios/' + userId)
                .set(datouser);
            M.toast({
                html: 'Datos almacenados.'
            });
            setTimeout('location.assign("index.html");', 2500);   
        }
    });
});
