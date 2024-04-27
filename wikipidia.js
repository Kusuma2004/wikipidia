let searchInputE1 = document.getElementById("searchInput");
let searchResultsE1 = document.getElementById("searchResults");
let spinneE1 = document.getElementById("spinner");

function createAndAppendResult(result) {
    let {
        title,
        link,
        description
    } = result; //object destructring
    //1.Div Container==result-item
    let resultItemE1 = document.createElement("div");
    resultItemE1.classList.add("result-item");
    searchResultsE1.appendChild(resultItemE1);
    //2,anchor=result-title
    let resultTitleE1 = document.createElement("a");
    resultTitleE1.classList.add("result-title");
    resultTitleE1.textContent = title;
    resultTitleE1.href = link;
    resultTitleE1.target = "_blank";
    resultItemE1.appendChild(resultTitleE1);
    //3.break=title break
    let titleBreakE1 = document.createElement("br");
    resultItemE1.appendChild(titleBreakE1);
    //4.Anchor url==resulr-url
    let urlE1 = document.createElement("a");
    urlE1.classList.add("result-url");
    urlE1.href = link;
    urlE1.target = "_blank";
    urlE1.textContent = link;
    resultItemE1.appendChild(urlE1);
    //5.line break
    let breakE1 = document.createElement("br");
    resultItemE1.appendChild(breakE1);
    //6.paragraph description-line description
    let descriptionE1 = document.createElement("p");
    descriptionE1.classList.add("link-description");
    descriptionE1.textContent = description;
    resultItemE1.appendChild(descriptionE1);

}

function displayResults(searchResults) {
    spinneE1.classList.toggle("d-none");
    for (let result of searchResults) {
        createAndAppendResult(result); //to print line by line
    }
}

function searchWikipidia(event) {
    if (event.key === "Enter") {
        searchResultsE1.textContent = "";
        spinneE1.classList.toggle("d-none");
        let searchInput = searchInputE1.value;
        console.log(searchInput);
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    search_results
                } = jsonData;
                displayResults(search_results);
                console.log(jsonData);
            });
    }
}
searchInputE1.addEventListener("keydown", searchWikipidia);