const startMenu = document.getElementsByClassName("startMenu")[0];

window.onload = function (e) {
    // var vid =  document.getElementsByClassName("desktop")[0];

    // vid.load();
    // e.preventDefault();
    // window.setTimeout(()=>{
    // vid.play();
    // },1000);

    let taskBar = document.getElementsByClassName("taskbar")[0];
    console.log(taskBar);
    console.log(document.getElementsByClassName("startMenu")[0]);

    taskBar.addEventListener("click", () => {

        if (document.getElementsByClassName("startMenu")[0].style.bottom == "70px") {
            document.getElementsByClassName("startMenu")[0].style.bottom = "-650px"
        }
        else {
            document.getElementsByClassName("startMenu")[0].style.bottom = "70px"
        }
    })
}