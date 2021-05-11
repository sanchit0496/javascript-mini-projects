let squares = document.querySelectorAll('#square');
let colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = `${getColor()}`;
    })
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = "#1d1d1d";
    })
});

function getColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

