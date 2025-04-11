let projectsDropdown = document.getElementsByClassName("dropdown");
let projectsHeaders = document.getElementsByClassName("projectHeader");

for (let i = 0; i < projectsHeaders.length; i++) {
    projectsHeaders[i].addEventListener("click", function () {
        projectsDropdown[i].classList.toggle("hide");
    });
}

