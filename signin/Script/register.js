document.querySelector("#form").addEventListener("submit",fsubmit)
var rUser=JSON.parse(localStorage.getItem("registerUser")) || [];

function fsubmit(event){
    var email=document.querySelector("#useremail").value
    console.log(email)
    var password=document.querySelector("#userpassword").value
    var Obj={
        useremail:email,
        userpassword:password,
    };
    rUser.push(Obj);
    localStorage.setItem("registerUser",JSON.stringify(rUser))
    alert("congrats!! YOUR ACCOUNT HAS BEEN CREATED");
}

