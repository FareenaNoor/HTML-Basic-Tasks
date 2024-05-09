const container = document.getElementById('container');
let posts=[];
function getThePost(){
    fetch('http://jsonplaceholder.org/posts/').then(apiResult=> apiResult.json()).then(data=> {
        posts.forEach(element =>{
            container.innerHtml+= `<div class="card">
            <div>
                title : ${element.title}
            </div>

            </div>`
        })
    })
}
//how to use promise without try catch