// Select color input
// Select size input

function makeGrid() {
    // Your code goes here!
    let heightInput = document.getElementById('input_height').value;
    let widthInput = document.getElementById('input_width').value;
    let myGrid = document.getElementById('pixel_canvas');

    myGrid.innerHTML = '';
    let gridArea = document.createElement('tbody');

    for (let a = 0; a < heightInput; a++) {
        let gridRow = document.createElement('tr');
        for (let b = 0; b < widthInput; b++) {
            let gridColumn = document.createElement('td');
        }
    }
}

// When size is submitted by the user, call makeGrid()
$('body').on('click', 'gridColumn', function() {
    let colorChoice = document.getElementById('colorPicker').value;
    $(this).css('background-color', colorChoice);
});
