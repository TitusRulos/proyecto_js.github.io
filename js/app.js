const originPage = () =>{
    const page = document.getElementById("page")
    page.innerHTML=`
      <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="">` 
  }

document.addEventListener('DOMContentLoaded', async()=>{
    await loadStudents();
})



