var cat = document.getElementById("cat");

cat.addEventListener("mouseover", function (event){
    cat.style.top = Number(cat.style.top.replace("px","")) + 20;
})