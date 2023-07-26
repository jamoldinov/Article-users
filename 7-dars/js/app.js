// // const api = "https://jsonplaceholder.typicode.com/users/1";
// const api = "https://jsonplaceholder.typicode.com/todos";

// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", (e) => {
//   if (request.readyState == 4 && request.status == 200) {
//     const data = JSON.parse(request.responseText);
//     updateUi(data);
//   } else if (request.readyState == 4) {
//     console.log("loading...");
//   } else {
//     console.log("error");
//   }
// });

// request.open("get", api);
// request.send();
// console.log(1 + 1);

// const ul = document.querySelector("ul");
// function updateUi(data) {
//   data.slice(0, 20).forEach((el, i) => {
//     ul.innerHTML += `
//       <li class="item">
//             <h4>id : ${el.id}</h4>
//             <p>components : ${el.completed}</p>
//             <span>title : ${el.title} </span>
//         </li>
      
//       `;
//   });
// }
const api = 'http://localhost:3000/articles'


const list = document.getElementById('ul')
const overlay = document.querySelector('.overlay')
const container = document.querySelector('.container')
// const docFrag = createDocumentFragment()




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
  data.forEach((article) => {
    list.innerHTML+= `
    <li class="card">
                    <h3>Title: ${article.title}</h3>
                    <br>
                    <p>Author: ${article.author}</p>
                    <br>
                    <br>
                    <a  style="text-decoration: none; color: aqua;" href=${`../article.html` + `?${article.id}`}>Read More</a>
                </li>
    `
    console.log(article);
  });
}


























