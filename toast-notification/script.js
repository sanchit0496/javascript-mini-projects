let buttons = document.querySelectorAll('.btn');
let notifs = document.getElementById('notifs');

let count = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        const notif = document.createElement('div')
        notif.classList.add('toast')
        notif.innerHTML = `Notification ${count}`;
        notifs.appendChild(notif)
        setTimeout( () => notif.remove(), 2000);

    });
})
