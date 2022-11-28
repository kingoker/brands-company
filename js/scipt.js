function show(anythink){
    document.querySelector('.filter__title').value = anythink;
}

if(document.querySelector('.filter')){
    let filter = document.querySelectorAll('.filter');

    filter.forEach((el) => {
        el.onclick = function(){
            el.classList.toggle('active');
        }
    });
}
    