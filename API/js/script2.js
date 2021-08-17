function getmarvel() {  
    fetch("https://gateway.marvel.com:443/v1/public/characters?ts=449&apikey=977f599101180f0e5c4c4b50611e184f&hash=fe7be1a772eff668979ec1e3187c192e")
    .then(response => (response.json()))
    .then(marveldata => printmarvel(marveldata.data.results))
    
}
function printmarvel(marveldata) {
  const cardbody = document.getElementById('cardbody');
  let row = ''
  for (let i = 0; i < marveldata.length; i++) {
   row+= `<div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">${marveldata[i].name}</h5>
          <p class="card-text">${marveldata[i].modified}</p>
        </div>
 </div>
  `
  }
 
  cardbody.innerHTML = row;
  
}

getmarvel()