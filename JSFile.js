
var saveName = "";

function resetAll(){
	var t = document.getElementById("innerTable");
	var rowCount = t.rows.length;
	for (var x=rowCount-1; x>0; x--) {
	   t.deleteRow(x);
	}
}

function addRow(){
	if( document.getElementById("name").value != "" && document.getElementById("age").value !="" && document.getElementById("city").value !="") {
		var t = document.querySelector("#innerTable");
		var r = t.insertRow();
		var c1 = r.insertCell();
		c1.appendChild(document.createTextNode(document.getElementById("name").value));
		
		c1 = r.insertCell();
		c1.appendChild(document.createTextNode(document.querySelector("input[name='gender']:checked").value));
		
		c1 = r.insertCell();
		c1.appendChild(document.createTextNode(document.getElementById("age").value));
		
		c1 = r.insertCell();
		c1.appendChild(document.createTextNode(document.getElementById("city").value));
		
		var link1 = document.createElement("a");
		link1.appendChild(document.createTextNode("Update"));
		link1.setAttribute("href", "#");
		link1.onclick = updateCurrentRow;
		
		var link2 = document.createElement("a");
		link2.appendChild(document.createTextNode("Remove"));
		link2.setAttribute("href", "#");
		link2.onclick = removeRow;
		
		var cell = r.insertCell();
		
		cell.appendChild(link1);
		cell.appendChild(document.createTextNode(" / "));
		cell.appendChild(link2);
		
		document.getElementById("name").value = "";
		document.getElementById("city").value = "";
		document.getElementById("age").value = null;
		document.querySelector("input[name='gender']:checked").checked = false;
		
	}
}

function removeRow(){
	var r = document.activeElement.parentNode.parentNode;
	r.parentNode.removeChild(r);
}

function updateCurrentRow() {
	document.getElementById("update").disabled = false;
	document.getElementById("add").disabled = true;
	var r = document.activeElement.parentNode.parentNode;
	document.getElementById("name").value = r.cells[0].firstChild.nodeValue;
	saveName = r.cells[0].firstChild.nodeValue;
	if(r.cells[1].firstChild.nodeValue == "male") {
		document.querySelector("input[id='M']").checked = true;
	} else {
		document.querySelector("input[id='F']").checked = true;
	}
	document.getElementById("age").value = r.cells[2].firstChild.nodeValue;
	document.getElementById("city").value = r.cells[3].firstChild.nodeValue;
}

function updateRow() {
	if( document.getElementById("name").value != "" && document.getElementById("age").value !="" && document.getElementById("city").value !="") {
		var t = document.querySelector("#innerTable");
		row = t.rows;
		for (var i = 0, row; row = t.rows[i]; i++) {
		   if(saveName==row.cells[0].firstChild.nodeValue){
			   row.cells[0].firstChild.nodeValue = document.getElementById("name").value;
			   row.cells[1].firstChild.nodeValue = document.querySelector("input[name='gender']:checked").value;
			   row.cells[2].firstChild.nodeValue = document.getElementById("age").value;
			   row.cells[3].firstChild.nodeValue = document.getElementById("city").value;
		   }
		}
		document.getElementById("name").value = "";
		document.getElementById("city").value = "";
		document.getElementById("age").value = null;
		document.querySelector("input[name='gender']:checked").checked = false;
		
		document.getElementById("update").disabled = true;
		document.getElementById("add").disabled = false;
	}
	
}