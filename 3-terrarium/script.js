dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));

function dragElement(terrariumElement) {
  let pos1 = 0, 
    pos2 = 0, 
    pos3 = 0, 
    pos4 = 0;
  // a pointerdown event, which is part of the web APIs designed to help with DOM management. 
  // onpointerdown fires when a button is pushed.
	terrariumElement.onpointerdown = pointerDrag;

	function pointerDrag(e) {
		e.preventDefault();
		console.log(e);
		// get the initial mouse cursor position for pos3 and pos4
		pos3 = e.clientX;
		pos4 = e.clientY;
		// when the mouse moves, start the drag
		document.onpointermove = elementDrag;
		// when the mouse is lifted, stop the drag
		document.onpointerup = stopElementDrag;
	}

  function elementDrag(e) {
		// calculate the new cursor position
		// pos1 = where the Xmouse WAS - where it IS
		pos1 = pos3 - e.clientX;
		// pos2 = where the Ymouse WAS - where it IS
		pos2 = pos4 - e.clientY;
		//reset pos3 to current location of Xmouse
		pos3 = e.clientX;
		//reset pos4 to current location of Ymouse
		pos4 = e.clientY;
		console.log(pos1, pos2, pos3, pos4);
    // offsetTop and offsetLeft are CSS properties that set an element's position based on that of its parent; 
    // its parent can be any element that is not positioned as static.
		terrariumElement.style.top = terrariumElement.offsetTop - pos2 + 'px';
		terrariumElement.style.left = terrariumElement.offsetLeft - pos1 + 'px';
  }
  // This small function resets the onpointerup and onpointermove events.
	function stopElementDrag() {
		// stop calculating when mouse is released
		document.onpointerup = null;
		document.onpointermove = null;
  }
}