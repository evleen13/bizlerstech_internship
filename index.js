
var uploadField = document.getElementById("file");

uploadField.onchange = function() {
    if(this.files[0].size > 1048576){
       alert("File is too big!");
       this.value = "";
    }
    else{
    	var reader = new FileReader();
	    reader.onload = function(){
	      var output = document.getElementById('output');
	      output.src = reader.result;
	    };
	    reader.readAsDataURL(event.target.files[0]);
    }
};
function acceptData(){
	alert("Congratulations! Validation done.")
}

function createTable(){
			var employee= [ 
			    { "Name": "Adam", "Role": "Admin"}, 
			    { "Name": "Max", "Role": "Developer"}, 
			    { "Name": "John", "Role": "Manager"},
			    { "Name": "Jacob", "Role": "QA"},
			    { "Name": "Eve", "Role": "QA"}
			];
			//get headers
			var col = [];
	        for (var i = 0; i < employee.length; i++) {
	            for (var key in employee[i]) {
	                if (col.indexOf(key) === -1) {
	                    col.push(key);
	                }
	            }
	        }
	        col.push("Actions")
	        var table = document.createElement("table");
	        var tr = table.insertRow(-1);
	        for (var i = 0; i < col.length; i++) {
	            var th = document.createElement("th");      // TABLE HEADER.
	            th.innerHTML = col[i];
	            tr.appendChild(th);
	        }
	        for (var i = 0; i < employee.length; i++) {

	            tr = table.insertRow(-1);

	            for (var j = 0; j < col.length; j++) {
	                var tabCell = tr.insertCell(-1);
	                /*if(employee[i][col[j]]==null){
	                	tabCell.innerHTML = "<i class="material-icons">edit</i>";
	                }
	                else */
	                	tabCell.innerHTML = employee[i][col[j]];
	            }
	        }
	        var divContainer = document.getElementById("showData");
	        divContainer.innerHTML = "";
	        divContainer.appendChild(table);
		}
$(document).ready(function(){
  var rowCount = $('tbody tr').length;
  if(rowCount > 4){
    console.log(rowCount);
    $('table').addClass('do-scroll');
  }
});