const loadData =async ()=>{
 try{
  const url =`https://openapi.programming-hero.com/api/ai/tools`;
 const response = await fetch(url);
 const data = await response.json();
 displayData(data.data.tools);
 }
 catch (err) {
  console.log(err);
 }
}
const displayData =(tools)=>{
  console.log(tools);
   //show 6 card
   tools = tools.slice(0, 6);
  const container = document.getElementById('card')
  tools.forEach(tool =>{
   
    const div = document.createElement('div');
  div.innerHTML =`<div class="col">
  <div class="card h-100">
    <img src="${tool.image
    }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>`
container.appendChild(div);


  });
  
}
loadData()