let pics = ['https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80', 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80', 'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'];

let left = document.getElementById('left');
let right = document.getElementById('right');

let photos = document.getElementById('photos');

let colors = ["green", "blue", "red", "yellow"];

let idx = 0;

left.addEventListener('click', () => {  
    idx--;
    if(idx < 0){
        idx = colors.length;
    }
    photos.style.background = `url(${pics[idx]})`;
})

right.addEventListener('click', () => {  
    idx++;
    if(idx > colors.length){
        idx = 0;
    }
    photos.style.background = `url(${pics[idx]})`;
})

