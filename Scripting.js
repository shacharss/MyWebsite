
function scrollToTop (nameID) {
    let e = document.getElementById(nameID);
    e.scrollIntoView({behavior: "smooth"});
}

function copyDiscordUsername () {
    navigator.clipboard.writeText("ShackMan#4507").then( );
    updateTooltip();
}
function updateTooltip () {
    let x = document.getElementById("tooltip");
    x.innerHTML = "Copied!";
    x.style.top = "-55px";
}

function makeEmail () {
    let x = document.getElementById("Subject").value;
    let y = document.getElementById("Message").value;
    let z = 'shachar.weinmann@gmail.com';
    let mailLink = ('mailto:' + z + '?subject=' + x + '&body=' + y);
    sendEmail(mailLink);
}

function sendEmail (x) {
    window.location.href = x;
}