
const grid = document.getElementById('grid');
let mouseDown = false;

//button event listener
dimensionsButton = document.querySelector('.button');
dimensionsButton.addEventListener('mousedown', () => {
    gridDimension = document.querySelector('.input').value
    createGrid(gridDimension)
});

// Create all the grid elements
function createGrid(dimension){
    if (dimension > 100 || dimension <= 0){
        alert('invalid dimension');
        return;
    }
    var currentGridElements = document.querySelectorAll('.grid-element');
    currentGridElements.forEach(function(element){
        element.remove();
    })
    for (let i = 0; i < dimension * gridDimension; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', changeColor);
        gridElement.addEventListener('mousedown', () => {mouseDown = true});
        gridElement.addEventListener('mouseup', () => {mouseDown = false});
        grid.append(gridElement);
    }
    grid.style.gridTemplateColumns = `repeat(${gridDimension}, auto)`;
}















function changeColor(e){
    if (e.type === 'mouseover' && !mouseDown){
        return;
    }
    e.target.style.backgroundColor = 'black';

}