let login = document.getElementById("login");
login.addEventListener("click", function() {
    window.open('file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/Login/login/login.html', '_blank');
});


let signup = document.getElementById("login");
signup.addEventListener("click", function() {
    window.open('file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/Login/signup/signup.html', '_blank');
});



let explore = document.querySelectorAll(".explore");
explore.forEach(exp => {
    exp.addEventListener("click", () => {
        window.open(
            "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/booking/booking.html",
            "_blank"
        );
    });
});


let booknow = document.querySelectorAll(".booknow");
booknow.forEach(bk => {
    bk.addEventListener("click", () => {
        window.open(
            "file:///E:/Coding/Hotels%20and%20tourist%20destination%20project%20frontend/booking/booking.html",
            "_blank"
        );
    });
});


