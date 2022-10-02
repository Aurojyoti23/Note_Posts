showPosts();

// if an user posts a thought, add it to localstorage
let postNote = document.getElementById('postBtn');
postNote.addEventListener('click', function(e){

    let textPost = document.getElementById('textPost');
    let posts = localStorage.getItem('posts');

    if(posts == null){
        postsObj = [];
    }
    else{
        postsObj = JSON.parse(posts);
    }

    postsObj.push(textPost.value);
    localStorage.setItem('posts', JSON.stringify(postsObj));
    textPost.value = "";

    showPosts();

})

function showPosts(){
    let posts = localStorage.getItem('posts');

    if(posts == null){
        postsObj = [];
    }
    else{
        postsObj = JSON.parse(posts);
    }

    let html = "";
    postsObj.forEach( function(element, index) {
        html += `
            <div class="postCard my-2 mx-3 card text-center p-2">
            
                <div class="card-body">
                <h5 class="card-title"> # ${index + 1} </h5>
                <p class="card-text"> ${element} </p>
                <button id="${index}" onclick="removePosts(this.id)" class="btn btn-outline-danger">Remove</button>
                </div>

            </div>`;
    });
    let postsElement = document.getElementById('posts')
    if(postsObj.length != 0){
        postsElement.innerHTML = html;
    }else{
        postsElement.innerHTML = `<h4 class='text-center text-danger'>Nothing to show</h4> <br> <h6 class='text-center text-success'>Use "Write Your Thoughts" section to post your thougts</h6>`
    }
}


// Remove function
function removePosts(index){

    let posts = localStorage.getItem('posts');

    if(posts == null){
        postsObj = [];
    }
    else{
        postsObj = JSON.parse(posts);
    }

    postsObj.splice(index, 1)
    localStorage.setItem("posts", JSON.stringify(postsObj));
    showPosts()

}


let search = document.getElementById('searchPost');
search.addEventListener('input', function () {

    let inputval = search.value.toLowerCase();
    let postCard = document.getElementsByClassName('postCard')
    Array.from(postCard).forEach(function (element) {
        let cardText = element.getElementsByTagName('p')[0].innerText;

        if(cardText.includes(inputval)){
            element.style.display = 'block'
        }else{
            element.style.display = 'none'
        }
    })
})