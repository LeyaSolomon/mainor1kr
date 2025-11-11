"use strict";

const btn = document.getElementById('translate-btn');
let lang = true;
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');

function translate() {
  if (lang === true) {
    firstname.innerText = 'Leya';
    lastname.innerText = 'Solomonova';
    btn.innerText = 'перевести на русский';
    lang = false;
  } else {
    firstname.innerText = 'Лея';
    lastname.innerText = 'Соломонова';
    btn.innerText = 'перевести на английский';
    lang = true;
  }
}

btn.addEventListener('click', translate);
   


document.getElementById("getData").onclick = function () {
        let surname =
          document.getElementsByTagName("p")[0].childNodes[1].innerText;
        let name =
          document.getElementsByTagName("p")[1].childNodes[1].innerText;
        let year =
          document.getElementsByTagName("p")[2].childNodes[1].innerText;

        document.getElementById("result").innerText =
          "Фамилия: " + surname + "\nИмя: " + name + "\nГод рождения: " + year;
};
