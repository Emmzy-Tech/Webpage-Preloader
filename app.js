const loader = document.querySelector('.loader-con');

window.addEventListener('load', function(){
    this.setInterval(() => {
        myLoad();
    }, 3000);
})
function myLoad(){
    loader.style.display = "none";
}