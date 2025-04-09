// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page

const ratingForm=document.querySelector("ratingForm");

ratingForm.addEventListener("submit",async (e)=>{
e.preventDefault()

const formData=new formData("ratingForm");
const data=Object.fromEntries(formData)

const response=await fetch("/ratings",{
    method:"POST",
    headers:{
        "Conten-type": "application/json"
    },
    body: JSON.stringify(data)
})
const data1=await response.json()
console.log(data1)
})