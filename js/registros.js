$(document).ready(function () {
    $('.collapsible').collapsible();
});

function busca_aplus() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/A+/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
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
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo2');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}
function busca_abap() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ABAP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo3');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_abc() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ABC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo4');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_actionscript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ActionScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo5');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_actor() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Ada/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo6');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ada() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Ada/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo7');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_agda() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Agda/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo8');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_algae() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ALGAE/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo9');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_algol() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ALGOL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo10');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_alma() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Alma/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo11');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_altairbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Altair BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo12');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_amigae() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Amiga E/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo13');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_amosbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/AMOS BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo14');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ampl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/AMPL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo15');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ansfort() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ANS Forth/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo16');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ansicommonlisp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ANSI Common Lisp/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo17');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_apl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/APL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo18');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_applescript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/AppleScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo19');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_applesoftbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/AppleSoftBASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo20');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_applemicrosoftbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Apple Microsoft BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo21');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_apt() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/APT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo22');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_arcassembly() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ARCAssembly/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo23');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_arithmatic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ARITH-MATIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo24');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_aspectj() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/AspectJ/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo25');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_atlasautocode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Atlas Autocode/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo26');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_awk() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/AWK/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo27');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_b() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/B/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo28');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_bacaic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/BACAIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo29');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ballerina() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Ballerina/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo30');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_bash() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Bash/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo31');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_basic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo32');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_basicfour() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/BASIC FOUR/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo33');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_bbcbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/BBC BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo34');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_birkbeckassembler() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Birkbeck Assembler/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo35');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_bliss() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/BLISS/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo36');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_blue() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Blue/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo37');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_boehmunnamedcodingsystem() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Boehm Unnamed Coding System/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo38');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_boo() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Boo/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo39');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_borlanddelphi() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Borland Delphi/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo40');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_borlandpascal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Borland Pascal/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo41');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_boruneshell() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Bourne Shell/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo42');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_brainfuck() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Brainfuck/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo43');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cshell() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/C shell/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo44');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cwithclasses() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/C with classes/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo45');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_csharp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/C#/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo46');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_c() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/C/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo47');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cplusplus() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/C++/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo48');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CBASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo49');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cerberusx() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CerberusX/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo50');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ceylon() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Ceylon/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo51');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_chapel() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Chapel/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo52');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_claire() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Claire/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo53');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_clarion() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Clarion/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo54');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_clascal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Clascal/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo55');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_clean() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Clean/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo56');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_clipper() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CLIPPER/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo57');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_clojure() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Clojure/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo58');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_clu() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CLU/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo59');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cobol() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/COBOL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo60');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cobra() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Cobra/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo61');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_coffeescript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CoffeeScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo62');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_coldfusionfml() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ColdFusion(CFML)/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo63');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_comal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/COMAL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo64');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_comit() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/COMIT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo65');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_commodorebasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Commodore BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo66');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_commonlisp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Common Lisp/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo67');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cdl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CDL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo68');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_componentpascal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Component Pascal/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo69');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_compool() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/COMPOOL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo70');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_comtran() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/COMTRAN/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo71');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_coral66() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CORAL66/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo72');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_corvision() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CorVision/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo73');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cowel() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/COWEL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo74');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cpccodingscheme() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CPC Coding Scheme/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo75');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cpl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CPL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo76');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_crystal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Crystal/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo77');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cs4() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/CS-4/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo78');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_cuneiform() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Cuneiform/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo79');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_curl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Curl/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo80');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_currynotationsystem() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Curry Notation System/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo81');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_d() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/D/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo82');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_dafny() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Dafny/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo83');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_darkbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/DarkBasic/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo84');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_dart() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Dart/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo85');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_dibol8() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Dibol-8/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo86');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_draco() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Draco/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo87');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_dylan() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Dylan/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo88');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_e() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/E/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo89');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ecmascript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ECMAScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo90');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_edinburghimp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Edinburgh IMP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo91');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_editinggenerator() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Editin Generator/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo92');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_eiffel() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Eiffel/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo93');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_elixir() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Elixir/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo94');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_elm() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Elm/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo95');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_eniaccodingsystem() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ENIAC Coding System/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo96');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_eniacshortcode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ENIAC Short Code/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo97');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_erlang() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Erlang/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo98');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_euclid() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Euclid/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo99');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_eulisp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Eulisp/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo100');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_euphoria() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Euphoria/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo101');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_exapt() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/EXAPT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo102');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_f() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/F/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo103');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_fact() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/FACT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo104');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_factor() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Factor/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo105');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_falcon() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Falcon/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo106');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_fantom() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Fantom/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo107');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_flowmatic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/FLOW-MATIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo108');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_forth() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Forth/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo109');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_fortran() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Fortran/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo110');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_fortress() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Fortress/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo111');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_fp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/FP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo112');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_freebasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/FreeBASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo113');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_freiburgercode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Freiburger Code/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo114');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_fscript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/F-Script/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo115');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_gml() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GML/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo116');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_gdscript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GDScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo117');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_genie() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Genie/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo118');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_george() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GEORGE/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo119');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_gfabasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GFA BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo120');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_glennieautocode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Glennie Autocode/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo121');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_gnue() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GNU E/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo122');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_go() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Go/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo123');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_gomgoodoldmad() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GOM-Good Old Mad/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo124');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_gosu() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Gosu/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo125');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_grass() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GRASS/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo126');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_groovy() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Groovy/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo127');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_gwbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/GW-BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo128');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_hack() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Hack/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo129');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_hals() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/HAL/S/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo130');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_hamiltoncshell() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Hamilton C Shell/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo131');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_harbour() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Harbour/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo132');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_haskell() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Haskell/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo133');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_haxe() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Haxe/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo134');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_hypertalk() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/HyperTalk/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo135');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ibmbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Elm/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo136');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ibmrpg() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/IGM RPG/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo137');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_Icon() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Icon/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo138');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_idl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/IDL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo139');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_Idris() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Idris/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo140');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_IITran() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/IITran/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo141');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_Informix4gl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Informix-4GL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo142');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_integerbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Integer BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo143');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_intercal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/INTERCAL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo144');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_interlisp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Interlisp/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo145');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_intermediateprogramlanguage() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Intermediate Program Language/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo146');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_Io() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Io/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo147');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ipli() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/IPLI/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo148');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_irvinedataflow() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Irvine Dataflow/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo149');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_islisp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ISLISP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo150');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_iswim() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ISWIM/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo151');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_it() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/IT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo152');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_j() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/J/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo153');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_jacquardloom() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Jacquard Loom/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo154');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_java() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Java/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo155');
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
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo156');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_joinjava() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/JoinJava/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo157');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_jossi() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/JOSSI/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo158');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_jovial() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/JOVIAL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo159');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_joy() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Joy/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo160');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_julia() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Julia/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo161');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_k() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/K/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo162');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_klammerausdruke() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Klamerausdrüke/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo163');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_kornshell() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Korn Shell/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo164');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_kotlin() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Kotlin/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo165');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_krl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/KRL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo166');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_labview() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LabVIEW/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo167');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_laningandzierlersystem() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Laning and Zierler System/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo168');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_lasso() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Lasso/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo169');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_links() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Links/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo170');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_lis() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LIS/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo171');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_lisp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LISP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo172');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_littleb() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Little b/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo173');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_livecodetranscript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LiveCode Transcript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo174');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_livescript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LiveScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo175');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_logo() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LOGO/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo176');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_logtalk() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Logtalk/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo177');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_lolcode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LOLCODE/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo178');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_lpc() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/LPC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo179');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_lua() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Lua/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo180');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_m2001() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/M2001/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo181');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mad() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MAD/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo182');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_madi() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MAD/I/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo183');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_magik() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Magik/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo184');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mapper() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MAPPER/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo185');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_markiautocode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Mark I Autocode/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo186');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_markiv() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Mark-IV/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo187');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mathematica() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Mathematica/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo188');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mathmatic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MATH-MATIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo189');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_matlab() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MATLAB/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo190');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_matrixmath() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MATRIXMATH/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo191');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mercury() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Mercury/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo192');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mesa() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Mesa/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo193');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mimic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MIMIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo194');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_miranda() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Miranda/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo195');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_ml() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ML/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo196');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_modual() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Modula/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo197');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_monkeyx() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MonkeyX/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo198');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_mumps() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/MUMPS/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo199');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_nemerle() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Nemerle/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo200');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_netrexx() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/NetRexx/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo201');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_newtonscript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/NewtonScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo202');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_nim() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Nim/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo203');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}
function busca_oberon07() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Oberon-07/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo205');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    });
}

function busca_objectoberon() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Object Oberon/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo206');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_objectpascal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Object Pascal/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo207');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_objectrexx() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Object REXX/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo208');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_objectivec() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Objective-C/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo209');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_ocam() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/OCam/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo210');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_octave() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Octave/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo211');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_omnibacsymbolicassembler() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/OMNIBACSymbolicAssembler/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo212');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_opa() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Opa/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo213');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_optimj() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/OptimJ/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo214');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_oxygene() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Oxygene/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo215');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_oz() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Oz/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo216');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_p() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/P/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo217');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_p4() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/P4/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo218');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pacti() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PACTI/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo219');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_paradox() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PARADOX/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo220');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_parasail() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Parasail/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo221');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pascal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Pascal/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo222');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_perldatalanguage() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Perl Data Language(PDL)/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo223');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_perl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Perl/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo224');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_php() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PHP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo225');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pico() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Pico/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo226');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pike() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Pike/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo227');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pikt() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Pikt/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo228');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pilot() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PILOT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo229');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pli() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PLI/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo230');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_plm() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PLM/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo231');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_plankalkul() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Plankalkül/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo232');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_playbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PlayBasic/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo233');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_plus() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Plus/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo234');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_polymorphicprogramminglenguage() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Polymorphic Programming Language(PPL)/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo235');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pop() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/POP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo236');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_postscript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PostScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo237');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_powerbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PowerBASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo238');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_print() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PRINT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo239');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_processing() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Processing/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo240');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_prolog() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Prolog/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo241');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_promal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PROMAL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo242');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_prosemodelinglanguagetimesharingversion() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PROSE modeling language Time - Sharing Version/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo243');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_prosemodelinglanguage() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PROSE modeling language/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo244');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_pure() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Pure/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo245');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_purebasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/PureBasic/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo246');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_python() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Python/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo247');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_q() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Q/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo248');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_qb64() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/QB64/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo249');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_qb64() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/QB64/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo250');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_quickbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/QuickBASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo251');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_r() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/R/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo252');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_racket() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Racket/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo253');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rapid() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/RAPID/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo254');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rapt() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/RAPT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo255');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_ratfor() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Ratfor/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo256');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_readprint() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/READPRINT/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo257');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rebol() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/REBOL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo258');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_red() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Red/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo259');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_redode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Redode/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo260');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_refal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/REFAL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo261');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_regionalassemblylanguage() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Regional Assembly Language/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo262');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rexx() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/REXX/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo263');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_ring() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Ring/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo264');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rochesterassemblerg() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Rochester Assembler/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo265');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rpg() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/RPG/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo266');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rpg400() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/RPG400/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo267');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rpl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/RPL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo268');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_ruby() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Ruby/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo269');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_rust() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Rust/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo270');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_s() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/S/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo271');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_sam76() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SAM76/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo272');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_sas() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SAS/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo273');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_scala() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Scala/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo274');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_scheme() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Scheme/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo275');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_scratch() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Scratch/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo276');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_seed7() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Seed7/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo277');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_self() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Self/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo278');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_sequentielleformeübersetzung() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SequentielleFormeübersetzung/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo279');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_setl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SETL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo280');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_shortcode() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Short Code/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo281');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_simula() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Simula/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo282');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_slang() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SLang/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo283');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_small() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SMALL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo284');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_smaltalk() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Smaltalk/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo285');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_snobol() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SNOBOL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo286');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_sortmergegenerator() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Sort Merge Generator/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo287');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_spaceprogramminglanguage() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SpaceProgrammingLanguage/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo288');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_spark() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SPARK/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo289');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_speakeasy() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Speakeasy/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo290');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_speedcoding() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Speedcoding/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo291');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_spiderbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SpiderBasic/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo292');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_squeaksmalltalk() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Squeak Smalltalk/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo293');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_squirrel() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Squirrel/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo294');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_standardcplusplus() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Standard C++/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo295');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_standardml() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Standard ML/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo296');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_standadmumps() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Standad MUMPS/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo297');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_stanislaus() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Stanislaus/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo298');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_stosbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/STOS BASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo299');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_sql() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/SQL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo300');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_subtext() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Subtext/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo301');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_sue() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Sue/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo302');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_superplan() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Superplan/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo303');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_swift() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Swift/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo304');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_td() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Td/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo305');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_tea() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Tea/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo306');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_telcomp() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/TELCOMP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo307');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_trac() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/TRAC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo308');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_truebasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/TrueBASIC/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo309');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_ttm() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/TTM/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo310');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_turbobasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/TurboBassic/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo311');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_turbopascaloop() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Turbo Pascal OOP/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo312');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_turbopascal() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Turbo Pascal/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo313');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_turing() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Turing/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo314');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_turing() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Turing/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo314');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_tutor() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/TUTOR/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo315');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_typescript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/TypeScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo316');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_vala() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Vala/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo317');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_vbscript() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/VBScript/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo318');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_visicalc() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/VisiCalc/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo319');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_vissim() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/VisSim/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo320');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_visualbasicnet() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Visual Basic NET/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo321');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_visualbasic() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Visual Basic/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo322');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_vonneumann() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Von Neumann and Goldstine graphing system/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo323');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_vulcan() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Vulcan dBase-II/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo324');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_whiley() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Whiley/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo325');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_whirlwindassembler() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Whirlwind Assembler/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo326');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_windowspowershell() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Windows PowerShell/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo327');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_xpl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/XPL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo328');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_xslt() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/XSLT(+XPath)/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo329');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_yellow() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Yellow/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo330');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_zshell() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/Z Shell (zsh)/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo331');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}

function busca_zpl() {
    $(document).ready(function () {
        firebase.database().ref('RankingLenguajesProgramacion/ZPL/')
            .orderByChild("Capacidad").on("child_added", function (snapshot) {
                var mostrar = '<li>';
                mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + snapshot.val().Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + snapshot.val().Capacidad + '<span></span></div>';
                mostrar += '<div class="collapsible-body"><span>kjajsadkaskjdajd' + '</span></div>';
                mostrar += '</li>';

                if (snapshot.val().Nombre != "Null" || snapshot.val().Capacidad != "Null") {
                    $(mostrar).appendTo('#Usuarios_Todo332');
                };
                console.log(snapshot.val().Nombre + ' ----- ' + snapshot.val().Capacidad);
            });
    })
}
$(document).ready(function () {
    $('#btnBuscar').click(function () {
        var ElemetSearch = $('#ElemetSearch').val();
        if ((ElemetSearch == "A+") || (ElemetSearch == "A+ ")) {
            openCity(event, 'A+');
            busca_aplus();
        } else if ((ElemetSearch == "A-0") || (ElemetSearch == "A-0")) {
            openCity(event, 'A-0');
            busca_aless0();
        } else if ((ElemetSearch == "ABAP") || (ElemetSearch == "ABAP ")) {
            openCity(event, 'ABAP');
            busca_abap();
        } else if ((ElemetSearch == "ABC") || (ElemetSearch == "ABC ")) {
            openCity(event, 'ABC');
            busca_abc();
        } else if ((ElemetSearch == "ActionScript") || (ElemetSearch == "ActionScript ")) {
            openCity(event, 'ActionScript');
            busca_actionscript();
        } else if ((ElemetSearch == "Actor")) {
            openCity(event, ElemetSearch);
            busca_actor();
        } else if ((ElemetSearch == "Ada")) {
            openCity(event, ElemetSearch);
            busca_ada();
        } else if ((ElemetSearch == "Agda")) {
            openCity(event, ElemetSearch);
            busca_agda();
        } else if ((ElemetSearch == "ALGAE")) {
            openCity(event, ElemetSearch);
            busca_algae();
        } else if ((ElemetSearch == "ALGOL")) {
            openCity(event, ElemetSearch);
            busca_algol();
        } else if ((ElemetSearch == "Alma-0")) {
            openCity(event, 'Alma');
            busca_alma();
        } else if ((ElemetSearch == "Altair BASIC")) {
            openCity(event, ElemetSearch);
            busca_altairbasic();
        } else if ((ElemetSearch == "Amiga E")) {
            openCity(event, ElemetSearch);
            busca_amigae();
        } else if ((ElemetSearch == "AMOS BASIC")) {
            openCity(event, ElemetSearch);
            busca_amosbasic();
        } else if ((ElemetSearch == "AMPL")) {
            openCity(event, ElemetSearch);
            busca_ampl();
        } else if ((ElemetSearch == "ANS Forth")) {
            openCity(event, ElemetSearch);
            busca_ansforth();
        } else if ((ElemetSearch == "ANSI Common Lisp")) {
            openCity(event, ElemetSearch);
            busca_ansicommonlisp();
        } else if ((ElemetSearch == "APL")) {
            openCity(event, ElemetSearch);
            busca_alp();
        } else if ((ElemetSearch == "Apple Microsoft BASIC")) {
            openCity(event, ElemetSearch);
            busca_applemicrosoftbasic();
        } else if ((ElemetSearch == "AppleScript")) {
            openCity(event, ElemetSearch);
            busca_applescript();
        } else if ((ElemetSearch == "Applesoft BASIC")) {
            openCity(event, ElemetSearch);
            busca_applesoftbasic();
        } else if ((ElemetSearch == "APT")) {
            openCity(event, ElemetSearch);
            busca_apt();
        } else if ((ElemetSearch == "ARC Assembly")) {
            openCity(event, ElemetSearch);
            busca_arcassembly();
        } else if ((ElemetSearch == "ARITH-MATIC")) {
            openCity(event, ElemetSearch);
            busca_arithmatic();
        } else if ((ElemetSearch == "AspectJ")) {
            openCity(event, ElemetSearch);
            busca_aspectj();
        } else if ((ElemetSearch == "Atlas Autocode")) {
            openCity(event, ElemetSearch);
            busca_atlasautocode();
        } else if ((ElemetSearch == "AWK")) {
            openCity(event, ElemetSearch);
            busca_awk();
        } else if ((ElemetSearch == "B")) {
            openCity(event, ElemetSearch);
            busca_b();
        } else if ((ElemetSearch == "BACAIC ")) {
            openCity(event, ElemetSearch);
            busca_bacaic();
        } else if ((ElemetSearch == "Ballerina")) {
            openCity(event, ElemetSearch);
            busca_ballerina();
        } else if ((ElemetSearch == "Bash")) {
            openCity(event, ElemetSearch);
            busca_bash();
        } else if ((ElemetSearch == "BASIC FOUR")) {
            openCity(event, ElemetSearch);
            busca_basicfour();
        } else if ((ElemetSearch == "BASIC")) {
            openCity(event, ElemetSearch);
            busca_basic();
        } else if ((ElemetSearch == "BBC BASIC")) {
            openCity(event, ElemetSearch);
            busca_bbcbasic();
        } else if ((ElemetSearch == "BCPL")) {
            openCity(event, ElemetSearch);
            busca_bcpl();
        } else if ((ElemetSearch == "Birkbeck Assembler")) {
            openCity(event, ElemetSearch);
            busca_birbeckassembler();
        } else if ((ElemetSearch == "BLISS")) {
            openCity(event, ElemetSearch);
            busca_bliss();
        } else if ((ElemetSearch == "Blue")) {
            openCity(event, ElemetSearch);
            busca_blue();
        } else if ((ElemetSearch == "Boehm unnamed coding system")) {
            openCity(event, ElemetSearch);
            busca_boehmunnamedcodingsystem();
        } else if ((ElemetSearch == "Boo")) {
            openCity(event, ElemetSearch);
            busca_boo();
        } else if ((ElemetSearch == "Borland Delphi")) {
            openCity(event, ElemetSearch);
            busca_borlanddelphi();
        } else if ((ElemetSearch == "Borland Pascal")) {
            openCity(event, ElemetSearch);
            busca_borlandpascal();
        } else if ((ElemetSearch == "Bourne Shell (sh)")) {
            openCity(event, ElemetSearch);
            busca_bourneshell();
        } else if ((ElemetSearch == "Brainfuck")) {
            openCity(event, ElemetSearch);
            busca_brainfuck();
        } else if ((ElemetSearch == "C shell")) {
            openCity(event, ElemetSearch);
            busca_cshell();
        } else if ((ElemetSearch == "C with classes")) {
            openCity(event, ElemetSearch);
            busca_cwithclasses();
        } else if ((ElemetSearch == "C#")) {
            openCity(event, ElemetSearch);
            busca_csharp();
        } else if ((ElemetSearch == "C")) {
            openCity(event, ElemetSearch);
            busca_c();
        } else if ((ElemetSearch == "C++")) {
            openCity(event, ElemetSearch);
            busca_cplusplus();
        } else if ((ElemetSearch == "CBASIC")) {
            openCity(event, ElemetSearch);
            busca_cbasic();
        } else if ((ElemetSearch == "CerberusX")) {
            openCity(event, ElemetSearch);
            busca_cerberusx();
        } else if ((ElemetSearch == "Ceylon")) {
            openCity(event, ElemetSearch);
            busca_ceylon();
        } else if ((ElemetSearch == "Chapel")) {
            openCity(event, ElemetSearch);
            busca_chapel();
        } else if ((ElemetSearch == "Claire")) {
            openCity(event, ElemetSearch);
            busca_claire();
        } else if ((ElemetSearch == "Clarion")) {
            openCity(event, ElemetSearch);
            busca_clarion();
        } else if ((ElemetSearch == "Clascal")) {
            openCity(event, ElemetSearch);
            busca_clascal();
        } else if ((ElemetSearch == "Clean")) {
            openCity(event, ElemetSearch);
            busca_clean();
        } else if ((ElemetSearch == "CLIPPER")) {
            openCity(event, ElemetSearch);
            busca_clipper();
        } else if ((ElemetSearch == "Clojure")) {
            openCity(event, ElemetSearch);
            busca_conjure();
        } else if ((ElemetSearch == "CLU")) {
            openCity(event, ElemetSearch);
            busca_clu();
        } else if ((ElemetSearch == "COBOL")) {
            openCity(event, ElemetSearch);
            busca_cobol();
        } else if ((ElemetSearch == "Cobra")) {
            openCity(event, ElemetSearch);
            busca_cobra();
        } else if ((ElemetSearch == "CoffeeScript")) {
            openCity(event, ElemetSearch);
            busca_coffescript();
        } else if ((ElemetSearch == "ColdFusion (CFML)")) {
            openCity(event, ElemetSearch);
            busca_coldfusion();
        } else if ((ElemetSearch == "COMAL")) {
            openCity(event, ElemetSearch);
            busca_comal();
        } else if ((ElemetSearch == "COMIT")) {
            openCity(event, ElemetSearch);
            busca_comit();
        } else if ((ElemetSearch == "Commodore BASIC")) {
            openCity(event, ElemetSearch);
            busca_commodorebasic();
        } else if ((ElemetSearch == "Common Lisp")) {
            openCity(event, ElemetSearch);
            busca_commonlisp();
        } else if ((ElemetSearch == "Compiler DescriptionLanguage (CDL)")) {
            openCity(event, ElemetSearch);
            busca_compilerdescriptionlanguage();
        } else if ((ElemetSearch == "Component Pascal")) {
            openCity(event, ElemetSearch);
            busca_componentpascal();
        } else if ((ElemetSearch == "COMPOOL")) {
            openCity(event, ElemetSearch);
            busca_compool();
        } else if ((ElemetSearch == "COMTRAN")) {
            openCity(event, ElemetSearch);
            busca_comtran();
        } else if ((ElemetSearch == "CORAL66")) {
            openCity(event, ElemetSearch);
            busca_coral66();
        } else if ((ElemetSearch == "CorVision")) {
            openCity(event, ElemetSearch);
            busca_corvision();
        } else if ((ElemetSearch == "COWSEL")) {
            openCity(event, ElemetSearch);
            busca_cowsel();
        } else if ((ElemetSearch == "CPC Coding scheme")) {
            openCity(event, ElemetSearch);
            busca_cpccodingscheme();
        } else if ((ElemetSearch == "CPL")) {
            openCity(event, ElemetSearch);
            busca_cpl();
        } else if ((ElemetSearch == "Crystal")) {
            openCity(event, ElemetSearch);
            busca_crystal();
        } else if ((ElemetSearch == "CS-4")) {
            openCity(event, ElemetSearch);
            busca_cs4();
        } else if ((ElemetSearch == "cuneiform")) {
            openCity(event, ElemetSearch);
            busca_cuneiform();
        } else if ((ElemetSearch == "Curl")) {
            openCity(event, ElemetSearch);
            busca_curl();
        } else if ((ElemetSearch == "Curry notation system")) {
            openCity(event, ElemetSearch);
            busca_currynotationsystem();
        } else if ((ElemetSearch == "D")) {
            openCity(event, ElemetSearch);
            busca_d();
        } else if ((ElemetSearch == "Dafny")) {
            openCity(event, ElemetSearch);
            busca_dafny();
        } else if ((ElemetSearch == "DarkBasic")) {
            openCity(event, ElemetSearch);
            busca_darkbasic();
        } else if ((ElemetSearch == "Dart")) {
            openCity(event, ElemetSearch);
            busca_dart();
        } else if ((ElemetSearch == "DIBOL-8")) {
            openCity(event, ElemetSearch);
            busca_dibol8();
        } else if ((ElemetSearch == "Draco")) {
            openCity(event, ElemetSearch);
            busca_draco();
        } else if ((ElemetSearch == "Dylan")) {
            openCity(event, ElemetSearch);
            busca_dylan();
        } else if ((ElemetSearch == "E")) {
            openCity(event, ElemetSearch);
            busca_e();
        } else if ((ElemetSearch == "ECMAScript")) {
            openCity(event, ElemetSearch);
            busca_ecmascript();
        } else if ((ElemetSearch == "Edinburgh IMP")) {
            openCity(event, ElemetSearch);
            busca_edinburghimp();
        } else if ((ElemetSearch == "Editing Generator")) {
            openCity(event, ElemetSearch);
            busca_editinggenerator();
        } else if ((ElemetSearch == "Eiffel")) {
            openCity(event, ElemetSearch);
            busca_eiffel();
        } else if ((ElemetSearch == "Elixir")) {
            openCity(event, ElemetSearch);
            busca_elixir();
        } else if ((ElemetSearch == "Elm")) {
            openCity(event, ElemetSearch);
            busca_elm();
        } else if ((ElemetSearch == "ENIAC coding system")) {
            openCity(event, ElemetSearch);
            busca_enaiccodingsystem();
        } else if ((ElemetSearch == "ENIAC Short Code")) {
            openCity(event, ElemetSearch);
            busca_eniacshortcode();
        } else if ((ElemetSearch == "Erlang")) {
            openCity(event, ElemetSearch);
            busca_erlang();
        } else if ((ElemetSearch == "Euclid")) {
            openCity(event, ElemetSearch);
            busca_euclid();
        } else if ((ElemetSearch == "EuLisp")) {
            openCity(event, ElemetSearch);
            busca_eulisp();
        } else if ((ElemetSearch == "Euphoria")) {
            openCity(event, ElemetSearch);
            busca_euphoria();
        } else if ((ElemetSearch == "EXAPT")) {
            openCity(event, ElemetSearch);
            busca_exapt();
        } else if ((ElemetSearch == "F#")) {
            openCity(event, ElemetSearch);
            busca_fsharp();
        } else if ((ElemetSearch == "FACT")) {
            openCity(event, ElemetSearch);
            busca_fact();
        } else if ((ElemetSearch == "Factor")) {
            openCity(event, ElemetSearch);
            busca_factor();
        } else if ((ElemetSearch == "Falcon")) {
            openCity(event, ElemetSearch);
            busca_falcon();
        } else if ((ElemetSearch == "Fantom")) {
            openCity(event, ElemetSearch);
            busca_fantom();
        } else if ((ElemetSearch == "FLOW-MATIC")) {
            openCity(event, ElemetSearch);
            busca_flowmatic();
        } else if ((ElemetSearch == "Forth")) {
            openCity(event, ElemetSearch);
            busca_forth();
        } else if ((ElemetSearch == "Fortran")) {
            openCity(event, ElemetSearch);
            busca_fortran();
        } else if ((ElemetSearch == "Fortress")) {
            openCity(event, ElemetSearch);
            busca_fortress();
        } else if ((ElemetSearch == "FP")) {
            openCity(event, ElemetSearch);
            busca_fp();
        } else if ((ElemetSearch == "FreeBASIC")) {
            openCity(event, ElemetSearch);
            busca_freebasic();
        } else if ((ElemetSearch == "Freiburger Code")) {
            openCity(event, ElemetSearch);
            busca_freiburgercode();
        } else if ((ElemetSearch == "F-Script")) {
            openCity(event, ElemetSearch);
            busca_fscript();
        } else if ((ElemetSearch == "Game Maker Language (GML)")) {
            openCity(event, ElemetSearch);
            busca_gamemakerlanguage();
        } else if ((ElemetSearch == "GDScript (GDS)")) {
            openCity(event, ElemetSearch);
            busca_gdscript();
        } else if ((ElemetSearch == "Genie")) {
            openCity(event, ElemetSearch);
            busca_genie();
        } else if ((ElemetSearch == "GEORGE")) {
            openCity(event, ElemetSearch);
            busca_georege();
        } else if ((ElemetSearch == "GFA BASIC")) {
            openCity(event, ElemetSearch);
            busca_gfabasic();
        } else if ((ElemetSearch == "Glennie Autocode")) {
            openCity(event, ElemetSearch);
            busca_glennieautocode();
        } else if ((ElemetSearch == "GNU E")) {
            openCity(event, ElemetSearch);
            busca_gnue();
        } else if ((ElemetSearch == "Go")) {
            openCity(event, ElemetSearch);
            busca_go();
        } else if ((ElemetSearch == "GOM – Good Old Mad")) {
            openCity(event, ElemetSearch);
            busca_gomgoodoldmad();
        } else if ((ElemetSearch == "Gosu")) {
            openCity(event, ElemetSearch);
            busca_gosu();
        } else if ((ElemetSearch == "GRASS")) {
            openCity(event, ElemetSearch);
            busca_grass();
        } else if ((ElemetSearch == "Groovy")) {
            openCity(event, ElemetSearch);
            busca_groovy();
        } else if ((ElemetSearch == "GW-BASIC")) {
            openCity(event, ElemetSearch);
            busca_gwbasic();
        } else if ((ElemetSearch == "Hack")) {
            openCity(event, ElemetSearch);
            busca_hack();
        } else if ((ElemetSearch == "HAL/S")) {
            openCity(event, ElemetSearch);
            busca_hals();
        } else if ((ElemetSearch == "Hamilton C shell")) {
            openCity(event, ElemetSearch);
            busca_hamiltoncshell();
        } else if ((ElemetSearch == "Harbour")) {
            openCity(event, ElemetSearch);
            busca_harbour();
        } else if ((ElemetSearch == "Haskell")) {
            openCity(event, ElemetSearch);
            busca_haskell();
        } else if ((ElemetSearch == "Haxe")) {
            openCity(event, ElemetSearch);
            busca_haxe();
        } else if ((ElemetSearch == "HyperTalk")) {
            openCity(event, ElemetSearch);
            busca_hypertalk();
        } else if ((ElemetSearch == "IBM BASICA")) {
            openCity(event, ElemetSearch);
            busca_ibmbasica();
        } else if ((ElemetSearch == "IBM RPG")) {
            openCity(event, ElemetSearch);
            busca_ibmrpg();
        } else if ((ElemetSearch == "Icon")) {
            openCity(event, ElemetSearch);
            busca_icon();
        } else if ((ElemetSearch == "IDL")) {
            openCity(event, ElemetSearch);
            busca_idl();
        } else if ((ElemetSearch == "Idris")) {
            openCity(event, ElemetSearch);
            busca_idris();
        } else if ((ElemetSearch == "IITRAN")) {
            openCity(event, ElemetSearch);
            busca_iitran();
        } else if ((ElemetSearch == "Informix-4GL")) {
            openCity(event, ElemetSearch);
            busca_informix4gl();
        } else if ((ElemetSearch == "Integer BASIC")) {
            openCity(event, ElemetSearch);
            busca_integerbasic();
        } else if ((ElemetSearch == "INTERCAL")) {
            openCity(event, ElemetSearch);
            busca_intercal();
        } else if ((ElemetSearch == "InterLisp")) {
            openCity(event, ElemetSearch);
            busca_interlisp();
        } else if ((ElemetSearch == "Intermediate Programming Language")) {
            openCity(event, ElemetSearch);
            busca_intermediateprogramminglanguage();
        } else if ((ElemetSearch == "Io")) {
            openCity(event, ElemetSearch);
            busca_io();
        } else if ((ElemetSearch == "IPL I")) {
            openCity(event, ElemetSearch);
            busca_ipli();
        } else if ((ElemetSearch == "IPL II")) {
            openCity(event, ElemetSearch);
            busca_iplii();
        } else if ((ElemetSearch == "IPL V")) {
            openCity(event, ElemetSearch);
            busca_iplv();
        } else if ((ElemetSearch == "Irvine Dataflow (implementation)")) {
            openCity(event, ElemetSearch);
            busca_irvinedataflow();
        } else if ((ElemetSearch == "Irvine Dataflow")) {
            openCity(event, ElemetSearch);
            busca_irvinedaraflow();
        } else if ((ElemetSearch == "ISLISP")) {
            openCity(event, ElemetSearch);
            busca_islisp();
        } else if ((ElemetSearch == "ISWIM")) {
            openCity(event, ElemetSearch);
            busca_iswin();
        } else if ((ElemetSearch == "IT")) {
            openCity(event, ElemetSearch);
            busca_it();
        } else if ((ElemetSearch == "J")) {
            openCity(event, ElemetSearch);
            busca_j();
        } else if ((ElemetSearch == "Jacquard Loom")) {
            openCity(event, ElemetSearch);
            busca_jacquardloom();
        } else if ((ElemetSearch == "Java")) {
            openCity(event, ElemetSearch);
            busca_java();
        } else if ((ElemetSearch == "JavaScript")) {
            openCity(event, ElemetSearch);
            busca_javascript();
        } else if ((ElemetSearch == "Join Java")) {
            openCity(event, ElemetSearch);
            busca_joinjava();
        } else if ((ElemetSearch == "JOSS I")) {
            openCity(event, ElemetSearch);
            busca_jossi();
        } else if ((ElemetSearch == "JOSS II")) {
            openCity(event, ElemetSearch);
            busca_jossii();
        } else if ((ElemetSearch == "JOVIAL")) {
            openCity(event, ElemetSearch);
            busca_jovial();
        } else if ((ElemetSearch == "Joy")) {
            openCity(event, ElemetSearch);
            busca_joy();
        } else if ((ElemetSearch == "julia")) {
            openCity(event, ElemetSearch);
            busca_julia();
        } else if ((ElemetSearch == "K")) {
            openCity(event, ElemetSearch);
            busca_k();
        } else if ((ElemetSearch == "Klammerausdrücke")) {
            openCity(event, ElemetSearch);
            busca_klammerausdrucke();
        } else if ((ElemetSearch == "Korn Shell (ksh)")) {
            openCity(event, ElemetSearch);
            busca_kornshell();
        } else if ((ElemetSearch == "Kotlin")) {
            openCity(event, ElemetSearch);
            busca_kotlin();
        } else if ((ElemetSearch == "KRL")) {
            openCity(event, ElemetSearch);
            busca_krl();
        } else if ((ElemetSearch == "LabVIEW")) {
            openCity(event, ElemetSearch);
            busca_labview();
        } else if ((ElemetSearch == "Laning and Zierler system")) {
            openCity(event, ElemetSearch);
            busca_laningandzierlersystem();
        } else if ((ElemetSearch == "Lasso")) {
            openCity(event, ElemetSearch);
            busca_lasso();
        } else if ((ElemetSearch == "Links")) {
            openCity(event, ElemetSearch);
            busca_links();
        } else if ((ElemetSearch == "LIS")) {
            openCity(event, ElemetSearch);
            busca_lis();
        } else if ((ElemetSearch == "LISP")) {
            openCity(event, ElemetSearch);
            busca_lisp();
        } else if ((ElemetSearch == "Little b")) {
            openCity(event, ElemetSearch);
            busca_littleb();
        } else if ((ElemetSearch == "LiveCode Transcript")) {
            openCity(event, ElemetSearch);
            busca_livecodetranscript();
        } else if ((ElemetSearch == "LiveScript")) {
            openCity(event, ElemetSearch);
            busca_livescript();
        } else if ((ElemetSearch == "LOGO")) {
            openCity(event, ElemetSearch);
            busca_logo();
        } else if ((ElemetSearch == "Logtalk")) {
            openCity(event, ElemetSearch);
            busca_logtalk();
        } else if ((ElemetSearch == "LOLCODE")) {
            openCity(event, ElemetSearch);
            busca_lolcode();
        } else if ((ElemetSearch == "LPC")) {
            openCity(event, ElemetSearch);
            busca_lpc();
        } else if ((ElemetSearch == "Lua")) {
            openCity(event, ElemetSearch);
            busca_lua();
        } else if ((ElemetSearch == "M2001")) {
            openCity(event, ElemetSearch);
            busca_m2001();
        } else if ((ElemetSearch == "MAD – Michigan Algorithm Decode")) {
            openCity(event, ElemetSearch);
            busca_mad();
        } else if ((ElemetSearch == "MAD/I")) {
            openCity(event, ElemetSearch);
            busca_madi();
        } else if ((ElemetSearch == "Magik (programming language)")) {
            openCity(event, ElemetSearch);
            busca_magik();
        } else if ((ElemetSearch == "MAPPER")) {
            openCity(event, ElemetSearch);
            busca_mapper();
        } else if ((ElemetSearch == "Mark I Autocode")) {
            openCity(event, ElemetSearch);
            busca_markiautocode();
        } else if ((ElemetSearch == "Mark-IV")) {
            openCity(event, ElemetSearch);
            busca_markiv();
        } else if ((ElemetSearch == "Mathematica (Wolfram Language)")) {
            openCity(event, ElemetSearch);
            busca_mathematica();
        } else if ((ElemetSearch == "MATH-MATIC")) {
            openCity(event, ElemetSearch);
            busca_mathmatic();
        } else if ((ElemetSearch == "MATLAB")) {
            openCity(event, ElemetSearch);
            busca_matlab();
        } else if ((ElemetSearch == "MATRIX MATH")) {
            openCity(event, ElemetSearch);
            busca_matrixmath();
        } else if ((ElemetSearch == "Mercury")) {
            openCity(event, ElemetSearch);
            busca_mercury();
        } else if ((ElemetSearch == "Mesa")) {
            openCity(event, ElemetSearch);
            busca_mesa();
        } else if ((ElemetSearch == "MIMIC")) {
            openCity(event, ElemetSearch);
            busca_mimic();
        } else if ((ElemetSearch == "Miranda")) {
            openCity(event, ElemetSearch);
            busca_miranda();
        } else if ((ElemetSearch == "ML")) {
            openCity(event, ElemetSearch);
            busca_ml();
        } else if ((ElemetSearch == "Modula")) {
            openCity(event, ElemetSearch);
            busca_modula();
        } else if ((ElemetSearch == "Modula-2")) {
            openCity(event, ElemetSearch);
            busca_modula2();
        } else if ((ElemetSearch == "Modula-3")) {
            openCity(event, ElemetSearch);
            busca_modula3();
        } else if ((ElemetSearch == "MonkeyX")) {
            openCity(event, ElemetSearch);
            busca_monkeyx();
        } else if ((ElemetSearch == "MUMPS")) {
            openCity(event, ElemetSearch);
            busca_mumps();
        } else if ((ElemetSearch == "Nemerle") || (ElemetSearch == "Nemerle ")) {
            openCity(event, 'Nemerle');
            busca_nemerle();
        } else if ((ElemetSearch == "NetRexx") || (ElemetSearch == "NetRexx ")) {
            openCity(event, 'NetRexx');
            busca_netrexx();
        } else if ((ElemetSearch == "NewtonScript") || (ElemetSearch == "NewtonScript ")) {
            openCity(event, ElemetSearch);
            busca_newtonscript();
        } else if ((ElemetSearch == "Nim") || (ElemetSearch == "Nim ")) {
            openCity(event, 'NewtonScript');
            busca_nim();
        } else if ((ElemetSearch == "Oberon") || (ElemetSearch == "Oberon ")) {
            openCity(event, 'Oberon');
            busca_oberon();
        } else if ((ElemetSearch == "Oberon-07") || (ElemetSearch == "Oberon-07 ")) {
            openCity(event, 'Oberon-07');
            busca_oberon07();
        } else if ((ElemetSearch == "Oberon-2")) {
            openCity(event, ElemetSearch);
            busca_oberon2();
        } else if ((ElemetSearch == "Object Oberon")) {
            openCity(event, ElemetSearch);
            busca_objectoberon();
        } else if ((ElemetSearch == "Object Pasca")) {
            openCity(event, ElemetSearch);
            busca_objectpascal();
        } else if ((ElemetSearch == "Object REXX")) {
            openCity(event, ElemetSearch);
            busca_objectrexx();
        } else if ((ElemetSearch == "Objective-C")) {
            openCity(event, ElemetSearch);
            busca_objectivec();
        } else if ((ElemetSearch == "OCaml")) {
            openCity(event, ElemetSearch);
            busca_ocaml();
        } else if ((ElemetSearch == "occam")) {
            openCity(event, ElemetSearch);
            busca_occam();
        } else if ((ElemetSearch == "Octave")) {
            openCity(event, ElemetSearch);
            busca_octave();
        } else if ((ElemetSearch == "OMNIBAC Symbolic Assembler")) {
            openCity(event, ElemetSearch);
            busca_omnibacsymbolicassembler();
        } else if ((ElemetSearch == "Opa")) {
            openCity(event, ElemetSearch);
            busca_opa();
        } else if ((ElemetSearch == "OPL")) {
            openCity(event, ElemetSearch);
            busca_opl();
        } else if ((ElemetSearch == "OptimJ")) {
            openCity(event, ElemetSearch);
            busca_optimj();
        } else if ((ElemetSearch == "Oxygene")) {
            openCity(event, ElemetSearch);
            busca_oxygene();
        } else if ((ElemetSearch == "Oz")) {
            openCity(event, ElemetSearch);
            busca_oz();
        } else if ((ElemetSearch == "P")) {
            openCity(event, ElemetSearch);
            busca_p();
        } else if ((ElemetSearch == "P4")) {
            openCity(event, ElemetSearch);
            busca_p4();
        } else if ((ElemetSearch == "PACT I")) {
            openCity(event, ElemetSearch);
            busca_pacti();
        } else if ((ElemetSearch == "PARADOX")) {
            openCity(event, ElemetSearch);
            busca_paradox();
        } else if ((ElemetSearch == "Parasail")) {
            openCity(event, ElemetSearch);
            busca_parasail();
        } else if ((ElemetSearch == "Pascal")) {
            openCity(event, ElemetSearch);
            busca_pascal();
        } else if ((ElemetSearch == "Perl Data Language (PDL)")) {
            openCity(event, ElemetSearch);
            busca_perldatalanguage();
        } else if ((ElemetSearch == "Perl")) {
            openCity(event, ElemetSearch);
            busca_perl();
        } else if ((ElemetSearch == "PHP")) {
            openCity(event, ElemetSearch);
            busca_php();
        } else if ((ElemetSearch == "Pico")) {
            openCity(event, ElemetSearch);
            busca_pico();
        } else if ((ElemetSearch == "Pike")) {
            openCity(event, ElemetSearch);
            busca_pike();
        } else if ((ElemetSearch == "Pikt")) {
            openCity(event, ElemetSearch);
            busca_pikt();
        } else if ((ElemetSearch == "PILOT")) {
            openCity(event, ElemetSearch);
            busca_pilot();
        } else if ((ElemetSearch == "PL/I")) {
            openCity(event, ElemetSearch);
            busca_pli();
        } else if ((ElemetSearch == "PL/M")) {
            openCity(event, ElemetSearch);
            busca_plm();
        } else if ((ElemetSearch == "Plankalkül")) {
            openCity(event, ElemetSearch);
            busca_plankalkul();
        } else if ((ElemetSearch == "PlayBasic")) {
            openCity(event, ElemetSearch);
            busca_playbasic();
        } else if ((ElemetSearch == "Plus")) {
            openCity(event, ElemetSearch);
            busca_plus();
        } else if ((ElemetSearch == "Polymorphic Programming Language (PPL)")) {
            openCity(event, ElemetSearch);
            busca_polymorphicprogramminglenguage();
        } else if ((ElemetSearch == "POP-1")) {
            openCity(event, ElemetSearch);
            busca_pop1();
        } else if ((ElemetSearch == "POP-2")) {
            openCity(event, ElemetSearch);
            busca_pop2();
        } else if ((ElemetSearch == "PostScript")) {
            openCity(event, ElemetSearch);
            busca_postscript();
        } else if ((ElemetSearch == "PowerBASIC")) {
            openCity(event, ElemetSearch);
            busca_powerbasic();
        } else if ((ElemetSearch == "PRINT")) {
            openCity(event, ElemetSearch);
            busca_print();
        } else if ((ElemetSearch == "Processing")) {
            openCity(event, ElemetSearch);
            busca_processing();
        } else if ((ElemetSearch == "Prolog")) {
            openCity(event, ElemetSearch);
            busca_prolog();
        } else if ((ElemetSearch == "PROMAL")) {
            openCity(event, ElemetSearch);
            busca_promal();
        } else if ((ElemetSearch == "PROSE modeling language Time-Sharing Version")) {
            openCity(event, ElemetSearch);
            busca_prosemodelinglanguagetimesharingversion();
        } else if ((ElemetSearch == "PROSE modeling language")) {
            openCity(event, ElemetSearch);
            busca_prosemodelinglanguage();
        } else if ((ElemetSearch == "Pure")) {
            openCity(event, ElemetSearch);
            busca_pure();
        } else if ((ElemetSearch == "PureBasic")) {
            openCity(event, ElemetSearch);
            busca_purebasic();
        }else if ((ElemetSearch == "Python")) {
            openCity(event, ElemetSearch);
            busca_python();
        } else if ((ElemetSearch == "Q")) {
            openCity(event, ElemetSearch);
            busca_q();
        } else if ((ElemetSearch == "QB64")) {
            openCity(event, ElemetSearch);
            busca_qb64();
        } else if ((ElemetSearch == "QuickBASIC")) {
            openCity(event, ElemetSearch);
            busca_quickbasic();
        } else if ((ElemetSearch == "R")) {
            openCity(event, ElemetSearch);
            busca_r();
        } else if ((ElemetSearch == "Racket")) {
            openCity(event, ElemetSearch);
            busca_racket();
        } else if ((ElemetSearch == "RAPID")) {
            openCity(event, ElemetSearch);
            busca_rapid();
        } else if ((ElemetSearch == "RAPT")) {
            openCity(event, ElemetSearch);
            busca_rapt();
        } else if ((ElemetSearch == "Ratfor")) {
            openCity(event, ElemetSearch);
            busca_ratfor();
        } else if ((ElemetSearch == "READ/PRINT")) {
            openCity(event, ElemetSearch);
            busca_readprint();
        } else if ((ElemetSearch == "REBOL")) {
            openCity(event, ElemetSearch);
            busca_rebol();
        } else if ((ElemetSearch == "Red")) {
            openCity(event, ElemetSearch);
            busca_red();
        } else if ((ElemetSearch == "Redcode")) {
            openCity(event, ElemetSearch);
            busca_redcode();
        } else if ((ElemetSearch == "REFAL")) {
            openCity(event, ElemetSearch);
            busca_refal();
        } else if ((ElemetSearch == "Regional Assembly Language")) {
            openCity(event, ElemetSearch);
            busca_regionalassemblylanguage();
        } else if ((ElemetSearch == "REXX")) {
            openCity(event, ElemetSearch);
            busca_rexx();
        } else if ((ElemetSearch == "Ring")) {
            openCity(event, ElemetSearch);
            busca_ring();
        } else if ((ElemetSearch == "Rochester assembler")) {
            openCity(event, ElemetSearch);
            busca_rochesterassemblerg();
        } else if ((ElemetSearch == "RPG")) {
            openCity(event, ElemetSearch);
            busca_rpg();
        } else if ((ElemetSearch == "RPG/400")) {
            openCity(event, ElemetSearch);
            busca_rpg400();
        } else if ((ElemetSearch == "RPL")) {
            openCity(event, ElemetSearch);
            busca_rpl();
        } else if ((ElemetSearch == "Ruby")) {
            openCity(event, ElemetSearch);
            busca_ruby();
        } else if ((ElemetSearch == "Rust")) {
            openCity(event, ElemetSearch);
            busca_rust();
        } else if ((ElemetSearch == "S")) {
            openCity(event, ElemetSearch);
            busca_s();
        } else if ((ElemetSearch == "SAM76")) {
            openCity(event, ElemetSearch);
            busca_sam76();
        } else if ((ElemetSearch == "SAS")) {
            openCity(event, ElemetSearch);
            busca_sas();
        } else if ((ElemetSearch == "Scala")) {
            openCity(event, ElemetSearch);
            busca_scala();
        } else if ((ElemetSearch == "Scheme")) {
            openCity(event, ElemetSearch);
            busca_scheme();
        } else if ((ElemetSearch == "Scratch")) {
            openCity(event, ElemetSearch);
            busca_scratch();
        } else if ((ElemetSearch == "Seed7")) {
            openCity(event, ElemetSearch);
            busca_seed7();
        } else if ((ElemetSearch == "Self")) {
            openCity(event, ElemetSearch);
            busca_self();
        } else if ((ElemetSearch == "Sequentielle Formelübersetzung")) {
            openCity(event, ElemetSearch);
            busca_sequentielleformeübersetzung();
        } else if ((ElemetSearch == "SETL")) {
            openCity(event, ElemetSearch);
            busca_setl();
        } else if ((ElemetSearch == "Short Code")) {
            openCity(event, ElemetSearch);
            busca_shortcode();
        }else if ((ElemetSearch == "Simula")) {
            openCity(event, ElemetSearch);
            busca_simula();
        } else if ((ElemetSearch == "S-Lang")) {
            openCity(event, ElemetSearch);
            busca_slang();
        } else if ((ElemetSearch == "SMALL")) {
            openCity(event, ElemetSearch);
            busca_small();
        } else if ((ElemetSearch == "Smalltalk")) {
            openCity(event, ElemetSearch);
            busca_smaltalk();
        } else if ((ElemetSearch == "SNOBOL")) {
            openCity(event, ElemetSearch);
            busca_snobol();
        } else if ((ElemetSearch == "Sort Merge Generator")) {
            openCity(event, ElemetSearch);
            busca_sortmergegenerator();
        } else if ((ElemetSearch == "Space Programming Language")) {
            openCity(event, ElemetSearch);
            busca_spaceprogramminglanguage();
        } else if ((ElemetSearch == "SPARK")) {
            openCity(event, ElemetSearch);
            busca_spark();
        } else if ((ElemetSearch == "Speakeasy")) {
            openCity(event, ElemetSearch);
            busca_speakeasy();
        } else if ((ElemetSearch == "Speedcoding")) {
            openCity(event, ElemetSearch);
            busca_speedcoding();
        } else if ((ElemetSearch == "SpiderBasic")) {
            openCity(event, ElemetSearch);
            busca_spiderbasic();
        } else if ((ElemetSearch == "Squeak Smalltalk")) {
            openCity(event, ElemetSearch);
            busca_squeaksmalltalk();
        } else if ((ElemetSearch == "Squirrel")) {
            openCity(event, ElemetSearch);
            busca_squirrel();
        } else if ((ElemetSearch == "Standard C++")) {
            openCity(event, ElemetSearch);
            busca_standardcplusplus();
        } else if ((ElemetSearch == "Standard ML")) {
            openCity(event, ElemetSearch);
            busca_standardml();
        } else if ((ElemetSearch == "Standard MUMPS")) {
            openCity(event, ElemetSearch);
            busca_standadmumps();
        } else if ((ElemetSearch == "Stanislaus")) {
            openCity(event, ElemetSearch);
            busca_stanislaus();
        } else if ((ElemetSearch == "STOS BASIC")) {
            openCity(event, ElemetSearch);
            busca_stosbasic();
        } else if ((ElemetSearch == "SQL")) {
            openCity(event, ElemetSearch);
            busca_sql();
        } else if ((ElemetSearch == "Subtext")) {
            openCity(event, ElemetSearch);
            busca_subtext();
        } else if ((ElemetSearch == "Sue")) {
            openCity(event, ElemetSearch);
            busca_sue();
        } else if ((ElemetSearch == "Superplan")) {
            openCity(event, ElemetSearch);
            busca_superplan();
        }else if ((ElemetSearch == "Swift")) {
            openCity(event, ElemetSearch);
            busca_swift();
        } else if ((ElemetSearch == "Tcl")) {
            openCity(event, ElemetSearch);
            busca_tcl();
        } else if ((ElemetSearch == "Tea")) {
            openCity(event, ElemetSearch);
            busca_tea();
        } else if ((ElemetSearch == "TELCOMP")) {
            openCity(event, ElemetSearch);
            busca_telcomp();
        } else if ((ElemetSearch == "TRAC")) {
            openCity(event, ElemetSearch);
            busca_trac();
        } else if ((ElemetSearch == "TRAC")) {
            openCity(event, ElemetSearch);
            busca_trac();
        } else if ((ElemetSearch == "True BASIC")) {
            openCity(event, ElemetSearch);
            busca_truebasic();
        } else if ((ElemetSearch == "TTM")) {
            openCity(event, ElemetSearch);
            busca_ttm();
        } else if ((ElemetSearch == "Turbo Basic")) {
            openCity(event, ElemetSearch);
            busca_turbobasic();
        } else if ((ElemetSearch == "Turbo Pascal")) {
            openCity(event, ElemetSearch);
            busca_turbopascal();
        } else if ((ElemetSearch == "Turing")) {
            openCity(event, ElemetSearch);
            busca_turing();
        } else if ((ElemetSearch == "TUTOR")) {
            openCity(event, ElemetSearch);
            busca_tutor();
        } else if ((ElemetSearch == "TypeScript")) {
            openCity(event, ElemetSearch);
            busca_typescript();
        } else if ((ElemetSearch == "UNICODE")) {
            openCity(event, ElemetSearch);
            busca_unicode();
        } else if ((ElemetSearch == "UnrealScript")) {
            openCity(event, ElemetSearch);
            busca_unrealscript();
        } else if ((ElemetSearch == "Vala")) {
            openCity(event, ElemetSearch);
            busca_vala();
        } else if ((ElemetSearch == "VBScript")) {
            openCity(event, ElemetSearch);
            busca_vbscript();
        } else if ((ElemetSearch == "VisiCalc")) {
            openCity(event, ElemetSearch);
            busca_visicalc();
        } else if ((ElemetSearch == "VisSim")) {
            openCity(event, ElemetSearch);
            busca_vissim();
        } else if ((ElemetSearch == "Visual Basic .NET")) {
            openCity(event, ElemetSearch);
            busca_visualbasicnet();
        } else if ((ElemetSearch == "Visual Basic")) {
            openCity(event, ElemetSearch);
            busca_visualbasic();
        } else if ((ElemetSearch == "Von Neumann and Goldstine graphing system")) {
            openCity(event, ElemetSearch);
            busca_vonneumann();
        } else if ((ElemetSearch == "Vulcan dBase-II")) {
            openCity(event, ElemetSearch);
            busca_vulcan();
        } else if ((ElemetSearch == "Whiley")) {
            openCity(event, ElemetSearch);
            busca_whiley();
        } else if ((ElemetSearch == "Whirlwind assembler")) {
            openCity(event, ElemetSearch);
            busca_whirlwindassembler();
        } else if ((ElemetSearch == "Windows PowerShell")) {
            openCity(event, ElemetSearch);
            busca_windowspowershell();
        } else if ((ElemetSearch == "XPL")) {
            openCity(event, ElemetSearch);
            busca_xpl();
        } else if ((ElemetSearch == "XSLT (+ XPath)")) {
            openCity(event, ElemetSearch);
            busca_xslt();
        } else if ((ElemetSearch == "Yellow")) {
            openCity(event, ElemetSearch);
            busca_yellow();
        } else if ((ElemetSearch == "Z Shell (zsh)")) {
            openCity(event, ElemetSearch);
            busca_zshell();
        } else if ((ElemetSearch == "ZPL")) {
            openCity(event, ElemetSearch);
            busca_zpl();
        }
    });
});

$(document).ready(function () {
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });
});
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
//             mostrar += '<div class="collapsible-header" id="listado"><i class="material-icons">assignment_ind</i>' + '<b>Nombre: </b>' + element.Nombre + '      <b style="margin-left: 40px;">Capacidad:</b> ' + element.Capacidad + '<span></span></div>';
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