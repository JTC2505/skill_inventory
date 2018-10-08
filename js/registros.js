$(document).ready(function () {
    $('.collapsible').collapsible();
});

function busca_aplus() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/A+/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '   <b>Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo1');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}
function busca_aless0() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/A-0/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '   <b>Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo2');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}


















function busca_javascript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/JavaScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '   <b>Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo156');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

// var habil = {};
// var habil2 = {};
// function buscar_javascript(){
//     // userId = firebase.auth().currentUser.uid;
//     var datos = {};

//     // firebase.database().ref('RankingLenguajesProgramacion/JavaScript').once('value').then(function (datos) {
//     //     usuarios = datos.val();
//     //     console.log(usuarios);

//     //     $.each(usuarios, function (indice, valor) {
//     //         var datos = [{
//     //             Nombre: valor.Nombre,
//     //             Capacidad: valor.Capacidad
//     //         }];
//     //         datos.sort(function (a, b) {
//     //             return a.Capacidad - b.Capacidad;
//     //         });
//     //         console.log(datos);
//     //         datos.forEach(element => {
//     //             var mostrar = '<p><b> Lenguaje: </b>' + indice + '</p>';
//     //             mostrar += '<li class="colap">';
//     //             mostrar += '<p><b> Nombre: </b>' + element.Nombre + '</p>';
//     //             mostrar += '<p><b> Capacidad: </b>' + element.Capacidad + '</p>';
//     //             mostrar += '</li>';
//     //             mostrar += '<hr>';

//     //             if (element.Nombre != "Null" || element.Capacidad != "Null") {
//     //                 $(mostrar).appendTo('#Usuarios_Todo');
//     //             };
//     //         });
//     //     });
//     // });

//     firebase.database().ref("RankingLenguajesProgramacion/JavaScript").once("value").then(function (snapshot) {
//         var nom1 = (snapshot.val() && snapshot.val().Persona1.Nombre) || 'User';
//         var cap1 = (snapshot.val() && snapshot.val().Persona1.Capacidad) || 'User';
//         var nom2 = (snapshot.val() && snapshot.val().Persona2.Nombre) || 'User';
//         var cap2 = (snapshot.val() && snapshot.val().Persona2.Capacidad) || 'User';
//         var nom3 = (snapshot.val() && snapshot.val().Persona3.Nombre) || 'User';
//         var cap3 = (snapshot.val() && snapshot.val().Persona3.Capacidad) || 'User';
//         var nom4 = (snapshot.val() && snapshot.val().Persona4.Nombre) || 'User';
//         var cap4 = (snapshot.val() && snapshot.val().Persona4.Capacidad) || 'User';
//         var nom5 = (snapshot.val() && snapshot.val().Persona5.Nombre) || 'User';
//         var cap5 = (snapshot.val() && snapshot.val().Persona5.Capacidad) || 'User';
//         var nom6 = (snapshot.val() && snapshot.val().Persona6.Nombre) || 'User';
//         var cap6 = (snapshot.val() && snapshot.val().Persona6.Capacidad) || 'User';
//         var nom7 = (snapshot.val() && snapshot.val().Persona7.Nombre) || 'User';
//         var cap7 = (snapshot.val() && snapshot.val().Persona7.Capacidad) || 'User';
//         var nom8 = (snapshot.val() && snapshot.val().Persona8.Nombre) || 'User';
//         var cap8 = (snapshot.val() && snapshot.val().Persona8.Capacidad) || 'User';
//         var nom9 = (snapshot.val() && snapshot.val().Persona9.Nombre) || 'User';
//         var cap9 = (snapshot.val() && snapshot.val().Persona9.Capacidad) || 'User';
//         var nom10 = (snapshot.val() && snapshot.val().Persona10.Nombre) || 'User';
//         var cap10 = (snapshot.val() && snapshot.val().Persona10.Capacidad) || 'User';
//         var nom11 = (snapshot.val() && snapshot.val().Persona11.Nombre) || 'User';
//         var cap11 = (snapshot.val() && snapshot.val().Persona11.Capacidad) || 'User';
//         var nom12 = (snapshot.val() && snapshot.val().Persona12.Nombre) || 'User';
//         var cap12 = (snapshot.val() && snapshot.val().Persona12.Capacidad) || 'User';
//         var nom13 = (snapshot.val() && snapshot.val().Persona13.Nombre) || 'User';
//         var cap13 = (snapshot.val() && snapshot.val().Persona13.Capacidad) || 'User';
//         var nom14 = (snapshot.val() && snapshot.val().Persona14.Nombre) || 'User';
//         var cap14 = (snapshot.val() && snapshot.val().Persona14.Capacidad) || 'User';
//         var nom15 = (snapshot.val() && snapshot.val().Persona15.Nombre) || 'User';
//         var cap15 = (snapshot.val() && snapshot.val().Persona15.Capacidad) || 'User';
//         var id1 = (snapshot.val() && snapshot.val().Persona1.Id) || 'User';
//         var id2 = (snapshot.val() && snapshot.val().Persona2.Id) || 'User';
//         var id3 = (snapshot.val() && snapshot.val().Persona3.Id) || 'User';
//         var id4 = (snapshot.val() && snapshot.val().Persona4.Id) || 'User';
//         var id5 = (snapshot.val() && snapshot.val().Persona5.Id) || 'User';
//         var id6 = (snapshot.val() && snapshot.val().Persona6.Id) || 'User';
//         var id7 = (snapshot.val() && snapshot.val().Persona7.Id) || 'User';
//         var id8 = (snapshot.val() && snapshot.val().Persona8.Id) || 'User';
//         var id9 = (snapshot.val() && snapshot.val().Persona9.Id) || 'User';
//         var id10 = (snapshot.val() && snapshot.val().Persona10.Id) || 'User';
//         var id11 = (snapshot.val() && snapshot.val().Persona11.Id) || 'User';
//         var id12 = (snapshot.val() && snapshot.val().Persona12.Id) || 'User';
//         var id13 = (snapshot.val() && snapshot.val().Persona13.Id) || 'User';
//         var id14 = (snapshot.val() && snapshot.val().Persona14.Id) || 'User';
//         var id15 = (snapshot.val() && snapshot.val().Persona15.Id) || 'User';
//         // console.log(usuarios);
//         datos = [{
//             Nombre: nom1,
//             Capacidad: cap1,
//             Id: id1
//         }, {
//             Nombre: nom2,
//             Capacidad: cap2,
//             Id: id2
//         }, {
//             Nombre: nom3,
//             Capacidad: cap3,
//             Id: id3
//         }, {
//             Nombre: nom4,
//             Capacidad: cap4,
//             Id: id4
//         }, {
//             Nombre: nom5,
//             Capacidad: cap5,
//             Id: id5
//         }, {
//             Nombre: nom6,
//             Capacidad: cap6,
//             Id: id6
//         }, {
//             Nombre: nom7,
//             Capacidad: cap7,
//             Id: id7
//         }, {
//             Nombre: nom8,
//             Capacidad: cap8,
//             Id: id8
//         }, {
//             Nombre: nom9,
//             Capacidad: cap9,
//             Id: id9
//         }, {
//             Nombre: nom10,
//             Capacidad: cap10,
//             Id: id10
//         }, {
//             Nombre: nom11,
//             Capacidad: cap11,
//             Id: id11
//         }, {
//             Nombre: nom12,
//             Capacidad: cap12,
//             Id: id12
//         }, {
//             Nombre: nom13,
//             Capacidad: cap13,
//             Id: id13
//         },
//         {
//             Nombre: nom14,
//             Capacidad: cap14,
//             Id: id14
//         }, {
//             Nombre: nom15,
//             Capacidad: cap15,
//             Id: id15
//         }
//         ];

//         datos.sort(function (a, b) {
//             return a.Capacidad - b.Capacidad;
//         });
//         console.log(datos);
//         datos.forEach(element => {
//             var mostrar = '<li>';
//             mostrar += '<div class="collapsible-header"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + element.Nombre + '   <b>Capacidad:</b> ' + element.Capacidad + '<span></span></div>';
//             mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
//             mostrar += '</li>';

//             if (element.Nombre != "Null" || element.Capacidad != "Null") {
//                 $(mostrar).appendTo('#Usuarios_Todo156');
//             };
//         });

//         // firebase.database().ref('HabilidadesUsuarios/' + Id).once("value").then(function (skills) {
//         //     var hab1 = (skills.val() && skills.val().LenguajeProgramacion1.ProgramLenguageCapacity) || '';
//         //     var capa1 = (skills.val() && skills.val().LenguajeProgramacion1.ProgramLenguage) || '';
//         //     var hab2 = (skills.val() && skills.val().LenguajeProgramacion2.ProgramLenguageCapacity) || '';
//         //     var capa2 = (skills.val() && skills.val().LenguajeProgramacion2.ProgramLenguage) || '';
//         //     var hab3 = (skills.val() && skills.val().LenguajeProgramacion3.ProgramLenguageCapacity) || '';
//         //     var capa3 = (skills.val() && skills.val().LenguajeProgramacion3.ProgramLenguage) || '';
//         //     var hab4 = (skills.val() && skills.val().LenguajeProgramacion4.ProgramLenguageCapacity) || '';
//         //     var capa4 = (skills.val() && skills.val().LenguajeProgramacion4.ProgramLenguage) || '';
//         //     var hab5 = (skills.val() && skills.val().LenguajeProgramacion5.ProgramLenguageCapacity) || '';
//         //     var capa5 = (skills.val() && skills.val().LenguajeProgramacion5.ProgramLenguage) || '';
//         //     var hab6 = (skills.val() && skills.val().LenguajeProgramacion6.ProgramLenguageCapacity) || '';
//         //     var capa6 = (skills.val() && skills.val().LenguajeProgramacion6.ProgramLenguage) || '';
//         //     var hab7 = (skills.val() && skills.val().LenguajeProgramacion7.ProgramLenguageCapacity) || '';
//         //     var capa7 = (skills.val() && skills.val().LenguajeProgramacion7.ProgramLenguage) || '';
//         //     var hab8 = (skills.val() && skills.val().LenguajeProgramacion8.ProgramLenguageCapacity) || '';
//         //     var capa8 = (skills.val() && skills.val().LenguajeProgramacion8.ProgramLenguage) || '';
//         //     var hab9 = (skills.val() && skills.val().LenguajeProgramacion9.ProgramLenguageCapacity) || '';
//         //     var capa9 = (skills.val() && skills.val().LenguajeProgramacion9.ProgramLenguage) || '';
//         //     var hab10 = (skills.val() && skills.val().LenguajeProgramacion10.ProgramLenguageCapacity) || '';
//         //     var capa10 = (skills.val() && skills.val().LenguajeProgramacion10.ProgramLenguage) || '';
//         //     var skill1 = (skills.val() && skills.val().habilidad1) || '';
//         //     var skill2 = (skills.val() && skills.val().habilidad2) || '';
//         //     var skill3 = (skills.val() && skills.val().habilidad3) || '';
//         //     var skill4 = (skills.val() && skills.val().habilidad4) || '';
//         //     var skill5 = (skills.val() && skills.val().habilidad5) || '';
//         //     var skill6 = (skills.val() && skills.val().habilidad6) || '';
//         //     var skill7 = (skills.val() && skills.val().habilidad7) || '';
//         //     var skill8 = (skills.val() && skills.val().habilidad8) || '';
//         //     var skill9 = (skills.val() && skills.val().habilidad9) || '';
//         //     var skill10 = (skills.val() && skills.val().habilidad10) || '';
//         //     var leader = (skills.val() && skills.val().user_leader) || '';
//         //     var leaderg = (skills.val() && skills.val().user_leadergroups) || '';
//         //     var leaderpg = (skills.val() && skills.val().user_leaderpeoplegroups) || '';
//         //     var relation = (skills.val() && skills.val().user_relationship) || '';
//         //     var team = (skills.val() && skills.val().user_teamwork) || '';

//         //     var hab = [{
//         //         Lenguaje1: hab1,
//         //         Capacidad1: capa1,
//         //         Lenguaje2: hab2,
//         //         Capacidad2: capa2,
//         //         Lenguaje3: hab3,
//         //         Capacidad3: capa3,
//         //         Lenguaje4: hab4,
//         //         Capacidad4: capa4,
//         //         Lenguaje5: hab5,
//         //         Capacidad5: capa5,
//         //         Lenguaje6: hab6,
//         //         Capacidad6: capa6,
//         //         Lenguaje7: hab7,
//         //         Capacidad7: capa7,
//         //         Lenguaje8: hab8,
//         //         Capacidad8: capa8,
//         //         Lenguaje9: hab9,
//         //         Capacidad9: capa9,
//         //         Lenguaje10: hab10,
//         //         Capacidad10: capa10,
//         //         Habilidad1: skill1,
//         //         Habilidad2: skill2,
//         //         Habilidad3: skill3,
//         //         Habilidad4: skill4,
//         //         Habilidad5: skill5,
//         //         Habilidad6: skill6,
//         //         Habilidad7: skill7,
//         //         Habilidad8: skill8,
//         //         Habilidad9: skill9,
//         //         habilidad10: skill10,
//         //         Liderazgo: leader,
//         //         LiderazgoGrupal: leaderg,
//         //         LiderazgoPersonasGrupal: leaderpg,
//         //         Relacion: relation,
//         //         Equipo: team
//         //     }]


//     });
//     firebase.database().ref('RankingLenguajesProgramacion/JavaScript').once('value').then(function(datos){
//         habil = datos.val();
//         $.each(habil, function(indice, valor){
//             indice.sort((a,b) => {
//                 return a.Capacidad > b.Capacidad;
//             });
//             console.log(indice);
//         });
//     });
// };