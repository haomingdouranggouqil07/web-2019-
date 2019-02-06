var searchIput = document.getElementById("search-word")
var searchWord = document.getElementById("search-correlation");
var searchHistory = searchWord.getElementsByClassName("search-hist-item");

searchIput.onclick = function(){
    searchWord.style.display = "block";
}
window.onclick = function(event) {
    if(event.target != searchWord && event.target !=searchIput){
        searchWord.style.display = "none";
    }
    // if (event.target == modal) {
    //     modal.style.display = "none";
    // }
}
// console.log(searchHistory[0].nodeValue);
// for(i = 0; i < searchHistory.length; i++){
//     searchHistory.onclick = function(){

//     }
// }
