function busca_user() {

    // userId = firebase.auth().currentUser.uid;
    var usuarios = {};

    firebase.database().ref('RankingLenguajesProgramacion').once('value').then(function (datos) {
        usuarios = datos.val();
        console.log(usuarios);

        $.each(usuarios, function (indice, valor) {
            var datos = [{
                    Nombre: valor.Persona1.Nombre,
                    Capacidad: valor.Persona1.Capacidad
                },
                {
                    Nombre: valor.Persona2.Nombre,
                    Capacidad: valor.Persona2.Capacidad
                },
                {
                    Nombre: valor.Persona3.Nombre,
                    Capacidad: valor.Persona3.Capacidad
                },
                {
                    Nombre: valor.Persona4.Nombre,
                    Capacidad: valor.Persona4.Capacidad
                },
                {
                    Nombre: valor.Persona5.Nombre,
                    Capacidad: valor.Persona5.Capacidad
                },
                {
                    Nombre: valor.Persona6.Nombre,
                    Capacidad: valor.Persona6.Capacidad
                },
                {
                    Nombre: valor.Persona7.Nombre,
                    Capacidad: valor.Persona7.Capacidad
                },
                {
                    Nombre: valor.Persona8.Nombre,
                    Capacidad: valor.Persona8.Capacidad
                },
                {
                    Nombre: valor.Persona9.Nombre,
                    Capacidad: valor.Persona9.Capacidad
                },
                {
                    Nombre: valor.Persona10.Nombre,
                    Capacidad: valor.Persona10.Capacidad
                },
                {
                    Nombre: valor.Persona11.Nombre,
                    Capacidad: valor.Persona11.Capacidad
                },
                {
                    Nombre: valor.Persona12.Nombre,
                    Capacidad: valor.Persona12.Capacidad
                },
                {
                    Nombre: valor.Persona13.Nombre,
                    Capacidad: valor.Persona13.Capacidad
                },
                {
                    Nombre: valor.Persona14.Nombre,
                    Capacidad: valor.Persona14.Capacidad
                },
                {
                    Nombre: valor.Persona15.Nombre,
                    Capacidad: valor.Persona15.Capacidad
                }
            ];
            datos.sort(function (a, b) {
                return b.Capacidad - a.Capacidad;
            });
            // if ((valor.LenguajeProgramacion1.ProgramLenguage) == "C#") {
            //     var mostrar = '<li class="colap">';
            //     mostrar += '<div class="collapsible-header">';
            //     // mostrar += '<p>' + JSON.stringify(datos); + '</p>';
            //     mostrar += '<p><b>Lenguaje: </b>' + valor.LenguajeProgramacion1.ProgramLenguage + '</p>';
            //     mostrar += '</div>';
            //     mostrar += '<div class="col">';
            //     mostrar += '<p><b>Capacidad: </b>' + valor.LenguajeProgramacion1.ProgramLenguageCapacity + ' </p>';
            //     mostrar += '</div>';
            //     mostrar += '</li>';
            //     $(mostrar).appendTo('#Usuarios_Todo');
            //     if ((valor.LenguajeProgramacion2.ProgramLenguage) == "C#") {
            //         mostrar += '<div class="col">';
            //         mostrar += '<p><b>Capacidad: </b>' + valor.LenguajeProgramacion2.ProgramLenguageCapacity + ' </p>';
            //         mostrar += '</div>';
            //         mostrar += '<div class="col">';
            //         mostrar += '<p><b>Capacidad: </b>' + valor.LenguajeProgramacion2.ProgramLenguageCapacity + ' </p>';
            //         mostrar += '</div>';
            //         mostrar += '</li>';
            //         $(mostrar).appendTo('#Usuarios_Todo');
            //     }
            // }
            // } else if ((valor.LenguajeProgramacion1.ProgramLenguage) == "Visual Basic .NET") {
            //     var mostrar = '<li class="colap">';
            //     mostrar += '<div class="collapsible-header">';
            //     mostrar += '<div class="row acordeon">';
            //     mostrar += '<div class="col">';
            //     mostrar += '<p>' + JSON.stringify(datos); + '</p>';
            //     mostrar += '<p><b>Lenguaje: </b>' + valor.LenguajeProgramacion1.ProgramLenguage + '</p>';
            //     mostrar += '</div>';
            //     mostrar += '<div class="col">';
            //     mostrar += '<p><b>Capacidad: </b>' + valor.LenguajeProgramacion1.ProgramLenguageCapacity + ' </p>';
            //     mostrar += '</div>';
            //     mostrar += '</div>';
            //     mostrar += '</div>';
            //     mostrar += '<div class="collapsible-body" id="Dis_usuario">';
            //     mostrar += '</div>';
            //     mostrar += '</li>';
            //     $(mostrar).appendTo('#Usuarios_Todo');
            // }

            datos.forEach(element => {
                console.log(element);
                var mostrar = '<p><b> Lenguaje: </b>' + indice + '</p>';
                mostrar += '<li class="colap">';
                mostrar += '<p><b> Nombre: </b>' + element.Nombre + '</p>';
                mostrar += '<p><b> Capacidad: </b>' + element.Capacidad + '</p>';
                mostrar += '</li>';
                mostrar += '<hr> ';

                if (element.Nombre != "Null" || element.Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo');
                };
            });
        });
    });





    // firebase.database().ref('HabilidadesUsuarios/' + userId).once("value").then(function (snapshot) {

    //     var LenguajeProgramacion1 = (snapshot.val() && snapshot.val().LenguajeProgramacion1) || '---';
    //     var LenguajeProgramacion2 = (snapshot.val() && snapshot.val().LenguajeProgramacion2) || '---';
    //     var LenguajeProgramacion3 = (snapshot.val() && snapshot.val().LenguajeProgramacion3) || '---';
    //     var LenguajeProgramacion4 = (snapshot.val() && snapshot.val().LenguajeProgramacion4) || '---';
    //     var LenguajeProgramacion5 = (snapshot.val() && snapshot.val().LenguajeProgramacion5) || '---';
    //     var LenguajeProgramacion6 = (snapshot.val() && snapshot.val().LenguajeProgramacion6) || '---';
    //     var LenguajeProgramacion7 = (snapshot.val() && snapshot.val().LenguajeProgramacion7) || '---';
    //     var LenguajeProgramacion8 = (snapshot.val() && snapshot.val().LenguajeProgramacion8) || '---';
    //     var LenguajeProgramacion9 = (snapshot.val() && snapshot.val().LenguajeProgramacion9) || '---';
    //     var LenguajeProgramacion10 = (snapshot.val() && snapshot.val().LenguajeProgramacion10) || '---';

    //     var LenguajeProgramacionRef1 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion1");
    //     LenguajeProgramacionRef1.once("value").then(function (snap1) {
    //         var ProgramLenguage1 = (snap1.val() && snap1.val().ProgramLenguage) || '---';
    //         var ProgramLenguageCapacity1 = (snap1.val() && snap1.val().ProgramLenguageCapacity) || '---';

    //         var LenguajeProgramacionRef2 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion2");
    //         LenguajeProgramacionRef2.once("value").then(function (snap2) {
    //             var ProgramLenguage2 = (snap2.val() && snap2.val().ProgramLenguage) || '---';
    //             var ProgramLenguageCapacity2 = (snap2.val() && snap2.val().ProgramLenguageCapacity) || '---';

    //             var LenguajeProgramacionRef3 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion3");
    //             LenguajeProgramacionRef3.once("value").then(function (snap3) {
    //                 var ProgramLenguage3 = (snap3.val() && snap3.val().ProgramLenguage) || '---';
    //                 var ProgramLenguageCapacity3 = (snap3.val() && snap3.val().ProgramLenguageCapacity) || '---';

    //                 var LenguajeProgramacionRef4 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion4");
    //                 LenguajeProgramacionRef4.once("value").then(function (snap4) {
    //                     var ProgramLenguage4 = (snap4.val() && snap4.val().ProgramLenguage) || '---';
    //                     var ProgramLenguageCapacity4 = (snap4.val() && snap4.val().ProgramLenguageCapacity) || '---';

    //                     var LenguajeProgramacionRef5 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion5");
    //                     LenguajeProgramacionRef5.once("value").then(function (snap5) {
    //                         var ProgramLenguage5 = (snap5.val() && snap5.val().ProgramLenguage) || '---';
    //                         var ProgramLenguageCapacity5 = (snap5.val() && snap5.val().ProgramLenguageCapacity) || '---';

    //                         var LenguajeProgramacionRef6 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion6");
    //                         LenguajeProgramacionRef6.once("value").then(function (snap6) {
    //                             var ProgramLenguage6 = (snap6.val() && snap6.val().ProgramLenguage) || '---';
    //                             var ProgramLenguageCapacity6 = (snap6.val() && snap6.val().ProgramLenguageCapacity) || '---';

    //                             var LenguajeProgramacionRef7 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion7");
    //                             LenguajeProgramacionRef7.once("value").then(function (snap7) {
    //                                 var ProgramLenguage7 = (snap7.val() && snap7.val().ProgramLenguage) || '---';
    //                                 var ProgramLenguageCapacity7 = (snap7.val() && snap7.val().ProgramLenguageCapacity) || '---';

    //                                 var LenguajeProgramacionRef8 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion8");
    //                                 LenguajeProgramacionRef8.once("value").then(function (snap8) {
    //                                     var ProgramLenguage8 = (snap8.val() && snap8.val().ProgramLenguage) || '---';
    //                                     var ProgramLenguageCapacity8 = (snap8.val() && snap8.val().ProgramLenguageCapacity) || '---';

    //                                     var LenguajeProgramacionRef9 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion9");
    //                                     LenguajeProgramacionRef9.once("value").then(function (snap9) {
    //                                         var ProgramLenguage9 = (snap9.val() && snap9.val().ProgramLenguage) || '---';
    //                                         var ProgramLenguageCapacity9 = (snap9.val() && snap9.val().ProgramLenguageCapacity) || '---';

    //                                         var LenguajeProgramacionRef10 = firebase.database().ref('HabilidadesUsuarios/' + userId + "/LenguajeProgramacion10");
    //                                         LenguajeProgramacionRef10.once("value").then(function (snap10) {
    //                                             var ProgramLenguage10 = (snap10.val() && snap10.val().ProgramLenguage) || '---';
    //                                             var ProgramLenguageCapacity10 = (snap10.val() && snap10.val().ProgramLenguageCapacity) || '---';

    //                                             // var datos = {
    //                                             //     LenguajeProgramacion1,
    //                                             //     LenguajeProgramacion2,
    //                                             //     LenguajeProgramacion3,
    //                                             //     LenguajeProgramacion4,
    //                                             //     LenguajeProgramacion5,
    //                                             //     LenguajeProgramacion6,
    //                                             //     LenguajeProgramacion7,
    //                                             //     LenguajeProgramacion8,
    //                                             //     LenguajeProgramacion9,
    //                                             //     LenguajeProgramacion10
    //                                             // }

    //                                             var datos = [{
    //                                                     ProgramLenguage: ProgramLenguage1,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity1
    //                                                 }, {
    //                                                     ProgramLenguage: ProgramLenguage2,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity2
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage3,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity3
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage4,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity4
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage5,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity5
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage6,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity6
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage7,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity7
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage8,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity8
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage9,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity9
    //                                                 },
    //                                                 {
    //                                                     ProgramLenguage: ProgramLenguage10,
    //                                                     ProgramLenguageCapacity: ProgramLenguageCapacity10
    //                                                 }
    //                                             ];

    //                                             datos.sort(function (a, b) {
    //                                                 return a.ProgramLenguageCapacity - b.ProgramLenguageCapacity;
    //                                             });
    //                                             console.log(datos)
    //                                             console.log('Conetado');
    //                                         });
    //                                     });
    //                                 });
    //                             });
    //                         });
    //                     });
    //                 });
    //             });
    //         });
    //     });
    // });
}