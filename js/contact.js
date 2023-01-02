$(".toggle .open").click(function () {
    let widthBox = $(".sideBar .list").outerWidth()
    console.log(widthBox)
    if ($('.sideBar').css("left") == "0px") {
        $('.sideBar').animate({ left: `-${widthBox}` }, 1000)
    } else {
        $('.sideBar').animate({ left: "0px" }, 1000)
    }
})


let submit = document.getElementById("submit")
let inputName = document.getElementById("inputName")
let inputEmail =document.getElementById("inputEmail")
let inputPhone = document.getElementById("inputPhone")
let inputAge = document.getElementById("inputAge")
let inputPassword = document.getElementById("inputPassword")
let inputRePassword = document.getElementById("inputRePassword")

// resux

// validtion Name
let validName =()=>{
    let alertName = document.getElementById("alertName")
    let nameRegx = /^[A-Z][a-z]{2,20}$/
    let inpName = inputName.value

    if(nameRegx.test(inpName)){
        alertName.classList.add("d-none")
        inputName.classList.add("is-valid")
        inputName.classList.remove("is-invalid")
        return true
    }else{
        alertName.classList.remove("d-none")
        inputName.classList.add("is-invalid")
        inputName.classList.remove("is-valid")
        return false
    }
}
inputName.addEventListener("keyup" , (e)=>{
    validName(e.target.value)
})

// validtion Email
let validEmail =()=>{
    let alertEmal = document.getElementById("alertEmal")
    let emailRegx = /^([A-Z]|[a-z]|[0-9]){2,30}\@gmail\.[a-z]{2,5}$/
    let inpEmail = inputEmail.value

    if(emailRegx.test(inpEmail)){
        alertEmal.classList.add("d-none")
        inputEmail.classList.add("is-valid")
        inputEmail.classList.remove("is-invalid")
        return true
    }else{
        alertEmal.classList.remove("d-none")
        inputEmail.classList.add("is-invalid")
        inputEmail.classList.remove("is-valid")
        return false
    }
}
inputEmail.addEventListener("keyup" , (e)=>{
    validEmail(e.target.value)
})


// validtion Phone
let validPhone = ()=>{
    let alertPhone = document.getElementById("alertPhone")
    let phoneRegx = /^(010|011|012|015)[0-9]{8}$/
    let inpPhone = inputPhone.value
    if(phoneRegx.test(inpPhone)){
        alertPhone.classList.add("d-none")
        inputPhone.classList.add("is-valid")
        inputPhone.classList.remove("is-invalid")
        return true
    }else{
        alertPhone.classList.remove("d-none")
        inputPhone.classList.add("is-invalid")
        inputPhone.classList.remove("is-valid")
        return false
    }
}
inputPhone.addEventListener("keyup" , (e)=>{
    validPhone(e.target.value)
})
// validtion Age
let validAge =()=>{
    let alertAge = document.getElementById("alertAge")
    let ageRegx = /^[0-9]{2,3}$/
    let inpAge = inputAge.value
    if(ageRegx.test(inpAge)){
        alertAge.classList.add("d-none")
        inputAge.classList.add("is-valid")
        inputAge.classList.remove("is-invalid")
        return true
    }else{
        alertAge.classList.remove("d-none")
        inputAge.classList.add("is-invalid")
        inputAge.classList.remove("is-valid")
        return false
    }
}
inputAge.addEventListener("keyup" , (e)=>{
    validAge(e.target.value)
})

// validtion Password
let validPassword =()=>{
    let alertPass = document.getElementById("alertPass")
    let passRegx = /^.{8,}/
    let inpPass = inputPassword.value
    if(passRegx.test(inpPass)){
        alertPass.classList.add("d-none")
        inputPassword.classList.add("is-valid")
        inputPassword.classList.remove("is-invalid")
        return true
    }else{
        alertPass.classList.remove("d-none")
        inputPassword.classList.add("is-invalid")
        inputPassword.classList.remove("is-valid")
        return false
    }
}
inputPassword.addEventListener("keyup" , (e)=>{
    validPassword(e.target.value)
})

// validtion RePassword
let validRePassword =()=>{
    let alertRePass = document.getElementById("alertRePass")
    let passReRegx = /^.{8,}/
    let inpRePass = inputRePassword.value
    if(passReRegx.test(inpRePass)){
        alertRePass.classList.add("d-none")
        inputRePassword.classList.add("is-valid")
        inputRePassword.classList.remove("is-invalid")
        return true
    }else{
        alertRePass.classList.remove("d-none")
        inputRePassword.classList.add("is-invalid")
        inputRePassword.classList.remove("is-valid")
        return false
    }
}
inputRePassword.addEventListener("keyup" , (e)=>{
    validRePassword(e.target.value)
})





submit.addEventListener("click" , ()=>{
    if(validName () && validEmail () && validPhone () && validAge () && validPassword () && validRePassword () &&
    inputName !== "" && inputEmail !== "" && inputAge !== "" && inputPhone !== "" && inputPassword !== "" && inputRePassword !== ""){
        alert("ok")
        
    }else{
        alert("no")
    }
})


