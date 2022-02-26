document.querySelector("#submit").addEventListener("click",submitFunction)

var rUser=JSON.parse(localStorage.getItem("registerUser"))
function submitFunction(event){
    event.preventDefault();
    var email=document.querySelector("#email").value
    var password=document.querySelector("#password").value
    console.log(email)
    rUser.map(function(elem,index){
        var useremail=elem.useremail
        var userpassword=elem.userpassword
        if(email==useremail && password==userpassword)
        {
            
            window.location.href="file:///C:/Users/dell/signin/register.html";
           
           
        }
        
        
        


    })
    }
    