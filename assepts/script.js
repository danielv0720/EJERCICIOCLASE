

function contarLetras() {
  const inputValue = document.getElementById('text_value').value;
  let contador = 0;

  for (let i = 1; i <= inputValue.length; i++) {
    contador = contador + 1
  }

  const text = document.getElementById('text')
  text.innerText = contador + " letras";
}

function contarLetras2() {
  const inputValue = document.getElementById('text_value').value;
  const text = document.getElementById('text')
  text.innerText = inputValue.length + " letras";
}

function contarPalabras() {
  const inputValue = document.getElementById('text_value2').value;
  const text = document.getElementById('text2')
  text.innerText = inputValue.split(" ").length;
}

function contarPalabras2() {
  const inputValue = document.getElementById('text_value2').value;
  let contador = 0;

  for (let i = 0; i < inputValue.split(' ').length; i++) {
    contador = contador + 1
  }

  const text = document.getElementById('text2')
  text.innerText = contador + " palabras";
}

function procesarPromesa() {
  const inputValue3 = document.getElementById('text_value3').value;
  const inputValue4 = document.getElementById('text_value4').value;
  const inputValue5 = document.getElementById('text_value5').value;
  const inputValue6 = document.getElementById('text_value6').value;
  const inputValue7 = document.getElementById('text_value7').value;

  return new Promise((resolve, reject) => {

    if(inputValue3 ===""|| inputValue4 ==="" || inputValue5 ==="" || inputValue6 ==="" || inputValue7 ==="" ){
      alert('Favor ingresar todos los Datos')
    }
    if (inputValue3 > 17 && inputValue4 > 17  && inputValue5 > 17  && inputValue6 > 17  && inputValue7 > 17) {
      resolve('La promesa se cumplio')
    } else {
      reject('NO SE CUMPLIO')
    }
  })
}

function llamarPromesa() {
  const text = document.getElementById('text3')
  procesarPromesa()
    .then(response => {
      text.innerText = response
      console.log(response)
    })
    .catch(response => {
      text.innerText = response
      console.log(response)
    })
}