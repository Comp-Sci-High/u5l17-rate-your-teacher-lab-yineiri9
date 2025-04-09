// Add an event listener to the form that upon submits creates a new teacher
// When the teacher is created redirect to the teachers page
const teacherForm=document.querySelector("teacherForm")

teacherForm.addEventListener("submit",async(e)=>{
    e.preventDefault()
    
    const formData=new formData(ratingForm);
    const data= Object.fromEntries(formData)

    const response=await fetch("/ratings",{
        method:"POST",
        headers:{
            "Content-type": "application/json"
        }
    })
    body:JSON.stringify(data)
})