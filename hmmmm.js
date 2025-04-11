let border = document.getElementById("header-border");
let frog = document.getElementById("frog");
let frogLevel = 0;
let frogText = document.getElementById("frog-text");

if (border) {
    border.addEventListener("click", function () {
        document.location.href = "huh.html";
    })
}


if(frog){
    frog.addEventListener("click", function () {
        if (frogLevel === 0) {
            frog.src = "awake.png";
            frogText.innerHTML = "NO YOU FOOL! YOU'VE AWAKENED HIM! It seems he's still in the process of waking up " +
                ", let's leave before he wakes up fully!";
            frogLevel = 1;
        } else if (frogLevel === 1) {
            frog.src = "coding.png";
            frogText.innerHTML = "NOOOO! YOU'VE DOOMED US ALL!! HE'S CODING!!! DO YOU KNOW WHAT THIS MEANS? " +
            "WE'RE ALL DOOMED! WE'RE ALL DOOMED! HE'S CODING!!! "+
            "HIS CODING SKILLS ARE ONE OF A KIND, in that they're so horrible no one can compare! WE'RE ALL DOOMED!! "+
            "WE'RE NEVER PUSH TO PROD NOW!!";
            frogLevel = 2;
        }
    });
}
