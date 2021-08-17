function getCountries() {
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(data =>printTableRow(data))
}


function printTableRow(data) {
  const tbody = document.getElementById('tbody');
  let row = ''
  for (let i = 0; i < data.length; i++) {
   row+= `<tr>
           <td>${data[i].name}</td>
            <td>${data[i].capital}</td>
          </tr>
          `
  }



  tbody.innerHTML = row;

  
}

getCountries()