const qurey = window.location.search
const id = qurey.slice(1);
const api = `http://localhost:3000/articles/${id}`

const overlay = document.querySelector('.overlay')
const desc = document.getElementById('desc')
const idEl = document.getElementById('id')
idEl.textContent = id
const request = new XMLHttpRequest()
request.addEventListener('readystatechange', (e) => {
  if(request.readyState == 4 && request.status == 200){
   const data = JSON.parse(request.responseText)
   overlay.classList.add('hidden')
   updateUi(data)
  } else if (request.readyState == 4) {
    overlay.classList.add('hidden')
    console.log('error');
  }else {
    overlay.classList.remove('hidden')
    console.log('Loading');
  }
})

request.open('GET', api)
request.send()

function updateUi (data){
desc.innerHTML += `
<br>
<br>
<div style="display: flex; align-items: center; justify-content: space-between;" >
<h3>Title: ${data.title}</h3>
<a  style="text-decoration: none; color: aqua;border: 2px solid darkcyan;padding: 10px 15px; border-radius: 8px;" href=${`../index.html`}>Head Page</a>
</div>
<br>
<p>Author: ${data.author}</p>
<br>
<br>
<img  style="border-radius: 10px;" src="https://picsum.photos/id/${id}/1200/350" alt="">
<br>
<br>
<br>
<p>Body: ${data.body} </p>
<br>
<br>
<br>
<br>





`


   console.log(data);
    }
{/* <span> ${data.image}</span> */}