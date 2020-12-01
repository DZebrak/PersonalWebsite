$(document).ready(function () {
    $(".social").hover(function () {
        $(this).addClass("enlarge");
    }, function () {
        $(this).removeClass("enlarge");
    })
});

function getRepo() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let myrepos = JSON.parse(this.responseText);
            for (let i = 0; i < myrepos.length; i++) {
                document.getElementById("r1").innerHTML = myrepos[0].name;
                document.getElementById("r2").innerHTML = myrepos[1].name;
                document.getElementById("r3").innerHTML = myrepos[2].name;
            }
        }
    }
    xhr.open("GET", "https://api.github.com/users/DZebrak/repos", true);
    xhr.send();
}