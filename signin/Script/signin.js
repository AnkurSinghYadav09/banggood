document.querySelector("#submit").addEventListener("click", submitFunction)

var rUser = JSON.parse(localStorage.getItem("registerUser"))
function submitFunction(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value
    var password = document.querySelector("#password").value
    console.log(email)
    console.log(password)
    rUser.map(function (elem, index) {
        var useremail = elem.useremail
        var userpassword = elem.userpassword
        if (email == useremail && password == userpassword) {

            // window.location.href='';
            window.open('http://127.0.0.1:5502/front.html');


        }
    })
}
