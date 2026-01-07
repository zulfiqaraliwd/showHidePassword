// console.log("login form")

function login(){
    var name = document.getElementById("name").value
if(name == "" ){
    alert("please fill the name field")
}else{
 document.getElementById("para").innerHTML = name
}
}

function sid(){
    var id = document.getElementById("id").value
    if(id == ""){
        alert("please enter your id")
    }else{
       document.getElementById("paraid").innerHTML = id 
    }
}


function password(){
    var pass = document.getElementById("pass")
    if(pass.value== ""){
        alert("your password field is empty")
    }else if (pass.type === "password"){
        pass.type = "text"

    }else{
        pass.type = "password"
    }
        document.getElementById("parapass").innerHTML= pass.value
    }
