const loadData =async (typeAll)=>{
 try{
  const url =`https://openapi.programming-hero.com/api/ai/tools`;
 const response = await fetch(url);
 const data = await response.json();
 displayData(data.data.tools, typeAll);
 }
 catch (err) {
  console.log(err);
 }
}
const displayData =(tools, typeAll) => {
  console.log(tools);
  
  //  show 6 card
   if(typeAll){
    tools = tools.slice(0, 6);
    }
    // ShowAll Button

    const showAllButton = document.getElementById('btn-see-more');
    if(tools.length<=6){
      showAllButton.classList.remove('d-none')
    }
    else{
      showAllButton.classList.add('d-none')
    }
    

  const container = document.getElementById('card');
  
// Clear the former card
  container.innerText ='';

  //Show Card 
   tools.forEach(tool =>{
   const div = document.createElement('div');
  div.innerHTML =`<div class="col">
  <div class="card h-100">
    <img class="img-fluid" src="${tool.image
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
      <div>
      <button onclick="singleData('${tool.id}')" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#cosmicAi"><img src='image/next-button (1).png'></img></button>
    </div>
    </div>
  </div>
</div>`
container.appendChild(div);
});

//Stop loadder
   toggleSpinner(false);
}

const singleData =async (id)=>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displaySingleData(data.data);
}

const displaySingleData = qualities=>{
      console.log(qualities)
      
      document.getElementById('description').innerText = qualities.description;
      document.getElementById('col-1').innerHTML = `<div class='border border-secondary-subtle p-3 text-center'>
      <h5 class='text-warning fw-semibold'>${qualities.pricing[0].price}</h5>
      <h5 class='text-info text-bold'>${qualities.pricing[0].plan}</h5></div>`
      document.getElementById('col-2').innerHTML = `<div class='border border-secondary-subtle p-3 text-center'>
      <h5 class='text-warning text-bold'>${qualities.pricing[1].price}</h5>
      <h5 class='text-info text-bold'>${qualities.pricing[1].plan}</h5></div>`;
      document.getElementById('col-3').innerHTML = `<div class='border border-secondary-subtle p-2 text-center'>
      <h5 class='text-warning text-bold'>${qualities.pricing[2].price}</h5>
      <h5 class='text-info text-bold'>${qualities.pricing[2].plan}</h5></div>`;
      document.getElementById('feature').innerHTML = `<ol>
      <li>${qualities.features.features_name
      }</li>
      <li></li>
      <li></li>
      </ol>`
      document.getElementById('integration').innerHTML = `<ol>
      <li>${qualities.features.features_name
      }</li>
      <li></li>
      <li></li>
      </ol>`

      const modalCard2= document.getElementById('modal-card2');
      const div = document.createElement('div');
      div.innerHTML =`<div  class="card">
      <img src="${qualities.image_link[0]
      }" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h5 class="card-title">${qualities.input_output_examples[0].input}</h5>
        <p class="card-text">${qualities.input_output_examples[0].output}</p>
      </div>
    </div>`;
    modalCard2.appendChild(div);
    
     }
  

//Spinner

const toggleSpinner = isLoading =>{
  const spinner = document.getElementById('spinner');
  if(isLoading){
    spinner.classList.remove('d-none');
  }
  else{
    spinner.classList.add('d-none')
  }
  }

//Show all
  document.getElementById('btn-see-more').addEventListener('click', () =>{
  loadData();
  //Start Loadder
  toggleSpinner(true);
})
toggleSpinner(true);
loadData("typeAll");


