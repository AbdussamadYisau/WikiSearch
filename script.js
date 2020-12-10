
let searchTitle = document.querySelector('.searchTitle');
let searchBody = document.querySelector('.searchParagraph1');
let searchBody2 = document.querySelector('.searchParagraph2');
let searchBody3 = document.querySelector('.searchParagraph3');
let searchBody4 = document.querySelector('.searchParagraph4');
let searchBody5 = document.querySelector('.searchParagraph5');
let findMore = document.querySelector('.findMor');
let goButton = document.querySelector('.goBtn');
let loaderDiv = document.querySelector("#loaderDiv");

function searchResult() {
    let searchText = document.querySelector('.searchInput').value;
    searchText = searchText.split(" ").join("_");

    if(searchText === " ") {
        alert("There's nothing in the search box. Please enter a word.");
        return false;
    }

    // Fetching
    let loader = `<div class="spinner-border style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>`;

    loaderDiv.innerHTML = loader;

    fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=%27${searchText}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json'
    }
    })
  .then(response => response.json())
  .then((data) => {
    console.log(searchText);
    loaderDiv.classList.replace('visible', 'invisible');
    document.querySelector('section').classList.replace('invisible', 'visible');
    searchTitle.innerText = data.query.search[0].title;
    searchBody.innerHTML= `1. ${data.query.search[0].snippet}`;
    searchBody2.innerHTML= `2. ${data.query.search[1].snippet}`;
    searchBody3.innerHTML= `3. ${data.query.search[2].snippet}`;
    searchBody4.innerHTML= `4. ${data.query.search[3].snippet}`;
    searchBody5.innerHTML= `5. ${data.query.search[4].snippet}`;
    
    findMore.href= `https://en.wikipedia.org/wiki/${searchText}`;  
    })
} 


function searchAfterClick() {
    searchResult();   
}

function searchAfterEnter(event) {
    if(event.keyCode === 13) {
        searchResult();
    }
}

goButton.addEventListener("click", searchAfterClick);
// searchText.addEventListener("keypress", searchAfterEnter);