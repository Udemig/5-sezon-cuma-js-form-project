/* GET NECESSARY ELEMENTS */
const myForm=document.getElementById("myForm")
const nameElement=document.getElementById("name")
const surname=document.getElementById("surname")
const email=document.getElementById("email")
const message=document.getElementById("message")


/* EVENT LISTENERS */
myForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(nameElement.value);
})







/* NECESSARY FUNCTIONS / TOOLS */
