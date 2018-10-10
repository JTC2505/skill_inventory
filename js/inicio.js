$(document).ready(function () {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var user = firebase.auth().currentUser;

            firebase.database().ref("DatosUsuarios/" + user.uid).once("value").then(function (snapshot) {
                
                var nombre = (snapshot.val() && snapshot.val().Nombre) || 'User';
                var apellido = (snapshot.val() && snapshot.val().Apellido) || 'Anonymous';
                var nick = (snapshot.val() && snapshot.val().User) || 'User';
                var foto = (snapshot.val() && snapshot.val().Imagen) || '??';
                var email = (snapshot.val() && snapshot.val().Correo) || '??';

                var UserLog = '<a href="#user"><img class="image" class="circle" src=' + foto + '></a>';
                UserLog += '<div class="overlay"><h5><a href="#name"><span class="white-text name">' + nick  + '</span></a></h5></div>';
``
                $(UserLog).appendTo('#datos');
                console.log('Conetado');
                $('#btnLogout').click(desconectar);
            });
        } else {
            console.log('Usuario No Logeado');
            location.assign('index.html');
        }
    });
    $('#btninicio2').click(function(){
        setTimeout('location.assign("registro_hab.html");', 5);
    });
});



function desconectar() {
    firebase.auth().signOut().then(function () {
        location.assign('index.html');
    }, function (error) {
        alert("Error al intentar desconectarse.");
    });
}