let id = new URLSearchParams(window.location.search).get("id");
let s2boxes = document.querySelector("#s2boxes")
fetch(`http://localhost:3000/tables/${id}`)
.then(res=>res.json())
.then(data=>{

    
        s2boxes.innerHTML+=
        ` <div class="box1">
        <div class="img">
            <img src="${data.image}">
        </div>
        <div class="text">
            <h3>${data.name}</h3>
            <h4>${data.price}</h4>
        </div>  `
    })