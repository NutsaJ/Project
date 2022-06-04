let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  if (x[slideIndex[no]-1]) {
    x[slideIndex[no]-1].style.display = "block";  
  }
}

// document.querySelector('#signin-form').addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert('logged in');
// })

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

const portfolio=document.getElementById('portfolio')
fetch('https://photos-api-36ptw.ondigitalocean.app/pets')
  .then(response => response.json())
  .then(data => {
    data.forEach((image) => {
        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.classList.add('pet-img');
        portfolio.append(img);
    })
  });
