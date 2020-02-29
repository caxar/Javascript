const empty = document.querySelectorAll('.empty'),
	  fill = document.querySelector('.fill');

// Event listener

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Get each empty block 

for(let empties of empty) {
	empties.addEventListener('dragover', dragOver);
	empties.addEventListener('dragleave', dragLeave);
	empties.addEventListener('dragenter', dragEnter);
	empties.addEventListener('drop', dragDrop);
};

// Drag over function 

function dragOver(e) {
	e.preventDefault();
}

// Drag enter function 

function dragEnter(e) {
	e.preventDefault();
	this.className += ' active';
}

// Drag leave function 

function dragLeave() {
	this.className = 'empty';
}

// Drag drop function 

function dragDrop() {
	this.append(fill);
	this.className = 'empty';
}



// Drag start 

function dragStart() {
	this.className += ' hovered';
	setTimeout(() => this.className = 'invis', 0);
}

// Drag end 

function dragEnd() {
	this.className = 'fill';
};

