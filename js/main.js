
const container = document.querySelector(".main");
const button = document.querySelectorAll(".button");

function handleFetch(url){
  fetch(url)
  .then((response)=>{
    return response.text()
  })
  .then((data)=>{
    container.innerHTML = data;
  })
}
const content = {};
function testHandle(a) {
  fetch(a)
  .then((b)=>{
      if (b.ok) {
        return b.json()
    }
  })
  .then((data)=>{
    content.data = data;
  })
}

button.forEach((e)=>{
  e.addEventListener("click", function(e){
    e.preventDefault();
    
     
      handleFetch(e.target.href,{mode:"no-cors"});
    
  })
})