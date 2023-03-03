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
      <h5 class="card-title">Features</h5>
      <ol>
          <li>${tool.features[0]}</li>
          <li>${tool.features[1]}</li>
          <li>${tool.features[2]? tool.features[2]:'No result found'}</li>
      </ol>
    </div>
    <div class="card-footer d-flex justify-content-between">
      <div>
      <h5>${tool.name}</h5>
      <date><img src='image/cad.png' class='m-2'>${tool.published_in
      }</date>
      </div>
      <button type="button" class="btn btn-light"><img src='image/next-button (1).png'></button>
      <div>
      
      </div>
    </div>
  </div>
</div>`
container.appendChild(div);


  });
  
}
loadData()