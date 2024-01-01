let s2boxes = document.getElementById("s2boxes");

fetch("http://localhost:3000/favorites")
.then(response=>response.json())
.then(data=>{
data.forEach(item => {
 
      
      s2boxes.innerHTML+=
      ` <div class="box1">
      <div class="icon"><img src="${item.image}"></div>
      <h4>${item.name}</h4>
      <h1>${item.price}</h1>
      
     <button onClick='deleteItem(${item.id})'>Delete</button>
      </div>  `
  })
})


const deleteItem = (id) => {
    axios.delete('http://localhost:3000/favorites/'+id)
    .then(res=>{
      console.log(res.data);
      
      window.location.reload();
    })
  }