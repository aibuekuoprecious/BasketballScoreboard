let home = 0;
let guest = 0;
document.getElementById("homeSheet").textContent = home;
document.getElementById("guestSheet").textContent = guest;

function hAdd1() {
        home += 1;
        document.getElementById("homeSheet").textContent = home;
}
function hAdd2() {
    home += 2;
    document.getElementById("homeSheet").textContent = home;
}
function hAdd3() {
    home += 3;
    document.getElementById("homeSheet").textContent = home;
}
function gAdd1() {
    guest += 1;
    document.getElementById("guestSheet").textContent = guest;
}
function gAdd2() {
    guest += 2;
    document.getElementById("guestSheet").textContent = guest;
}
function gAdd3() {
    guest += 3;
    document.getElementById("guestSheet").textContent = guest;
}