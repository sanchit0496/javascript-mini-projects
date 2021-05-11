let wallpaper = document.getElementById('wallpaper');
let home = document.getElementById('home');
let work = document.getElementById('work');
let blog = document.getElementById('blog');
let power = document.getElementById('power');

home.addEventListener('click', () => {
    wallpaper.style.backgroundImage = "url('https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80')";
    wallpaper.style.objectFit = 'cover';
    wallpaper.style.position = 'absolute';
    wallpaper.style.width = '45vh';
    wallpaper.style.height = '65vh';

    wallpaper.style.backgroundSize = 'cover';
    wallpaper.style.backgroundRepeat = 'no-repeat';
    wallpaper.style.backgroundPosition = 'center center';

    home.className = 'btnactive';
    work.className = "btn";
    blog.className = "btn";
    power.className = "btn";
})
work.addEventListener('click', () => {
    wallpaper.style.backgroundImage = "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')";
    wallpaper.style.objectFit = 'cover';
    wallpaper.style.position = 'absolute';
    wallpaper.style.width = '45vh';
    wallpaper.style.height = '65vh';

    wallpaper.style.backgroundSize = 'cover';
    wallpaper.style.backgroundRepeat = 'no-repeat';
    wallpaper.style.backgroundPosition = 'center center';

    work.className = 'btnactive';
    home.className = "btn";
    blog.className = "btn";
    power.className = "btn";
})

blog.addEventListener('click', () => {
    wallpaper.style.backgroundImage = "url('https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80')";
    wallpaper.style.objectFit = 'cover';
    wallpaper.style.position = 'absolute';
    wallpaper.style.width = '45vh';
    wallpaper.style.height = '65vh';

    
    wallpaper.style.backgroundSize = 'cover';
    wallpaper.style.backgroundRepeat = 'no-repeat';
    wallpaper.style.backgroundPosition = 'center center';

    blog.className = 'btnactive';
    work.className = "btn";
    home.className = "btn";
    power.className = "btn";
})

power.addEventListener('click', () => {
    wallpaper.style.backgroundImage = "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')";
    wallpaper.style.objectFit = 'cover';
    wallpaper.style.position = 'absolute';
    wallpaper.style.width = '45vh';
    wallpaper.style.height = '65vh';

    wallpaper.style.backgroundSize = 'cover';
    wallpaper.style.backgroundRepeat = 'no-repeat';
    wallpaper.style.backgroundPosition = 'center center';

    power.className = 'btnactive';
    work.className = "btn";
    blog.className = "btn";
    home.className = "btn";
})
