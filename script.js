document.addEventListener("DOMContentLoaded", () => {
    selectedSubTitle('coffee');
    loadContent('coffee.html');
    selectedSubTitleCB('milkshakes');
    loadContentCB('milkshakes.html');
    selectedSubTitleSD('iced-coffee');
    loadContentSD('icedCoffee.html');
});

document.getElementById('card-hot-drinks').addEventListener('click', function(e){
    e.preventDefault();
    const element = document.getElementById('section-3');
    element.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    });
})

document.getElementById('card-cold-beverages').addEventListener('click', function(e){
    e.preventDefault();
    const element = document.getElementById('section-4');
    element.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
})

document.getElementById('card-specialty-drinks').addEventListener('click', function(e){
    e.preventDefault();
    const element = document.getElementById('section-5');
    element.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
    })
})

/*hot drinks sub-contents */
document.getElementById('coffee').addEventListener('click',function (e) {
    e.preventDefault();
    selectedSubTitle('coffee');
    loadContent('coffee.html');
});

document.getElementById('tea').addEventListener('click', function(e) {
    e.preventDefault();
    selectedSubTitle('tea');
    loadContent('tea.html');
});

document.getElementById('other-hot-drinks').addEventListener('click',function(e){
    e.preventDefault();
    selectedSubTitle('other-hot-drinks');
    loadContent('otherHotDrinks.html');
})

/* cold beverages sub-contents */
document.getElementById('milkshakes').addEventListener('click', function(e) {
    e.preventDefault();
    selectedSubTitleCB('milkshakes');
    loadContentCB('milkshakes.html');
})

document.getElementById('juices').addEventListener('click', function(e){
    e.preventDefault();
    selectedSubTitleCB('juices');
    loadContentCB('juices.html');
})
document.getElementById('soft-drinks').addEventListener('click', function(e){
    e.preventDefault();
    selectedSubTitleCB('soft-drinks');
    loadContentCB('softDrinks.html');
})
/* specialty drinks sub-contents */
document.getElementById('iced-coffee').addEventListener('click', function(e){
    e.preventDefault();
    selectedSubTitleSD('iced-coffee');
    loadContentSD('icedCoffee.html');
})
document.getElementById('smoothies').addEventListener('click', function(e){
    e.preventDefault();
    selectedSubTitleSD('smoothies');
    loadContentSD('smoothies.html');
})
/* load sub content of hot drinks */
function loadContent(url){
    const subContentDiv = document.getElementById('sub-content-hot-drinks');
    
    fetch(url)
        .then(response => response.text())
        .then(data => {
            subContentDiv.innerHTML = data
        })
}
/* load sub content of cold beverages */
function loadContentCB(url){
    const subContentDiv = document.getElementById('sub-content-cold-beverages');

    fetch(url)
        .then(response => response.text())
        .then(data => {
            subContentDiv.innerHTML = data
        })
}
/* load sub content of specialty drinks */
function loadContentSD(url){
    const subContentDiv = document.getElementById('sub-content-specialty-drinks');

    fetch(url)
        .then(response => response.text())
        .then(data=>{
            subContentDiv.innerHTML = data
        })
}

/* hot drinks selected sub title */
function selectedSubTitle(id){
    const SubTitlesH = document.querySelectorAll('.sub-title-h');
    for(let i=0;i<SubTitlesH.length;i++){
        const subTitle = SubTitlesH[i];
        if(subTitle.id === id){
            subTitle.style.color='#d2b4b4';
        }
        else{
            subTitle.style.color='white';
        }
    }
}

/* cold beverages sub-contents */
function selectedSubTitleCB (id){
    const SubTitlesCB = document.querySelectorAll('.sub-title-cb');
    for(let i=0;i<SubTitlesCB.length;i++){
        const subTitle = SubTitlesCB[i];
        if(subTitle.id === id){
            subTitle.style.color = '#d2b4b4';
        }
        else{
            subTitle.style.color = 'white';
        }
    }
}

/* specialty drinks sub-contens */
function selectedSubTitleSD (id){
    const SubTitlesSD = document.querySelectorAll('.sub-title-sd');
    for(let i=0;i<SubTitlesSD.length;i++){
        console.log(id);
        const subTitle = SubTitlesSD[i];
        if(subTitle.id === id){
            subTitle.style.color = '#d2b4b4';
        }
        else{
            subTitle.style.color =  'white';
        }
    }
}



