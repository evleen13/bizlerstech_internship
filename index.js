

function createTable(){
			var employee= [ 
			    { "Name": "Raja", "Role": "Pune"}, 
			    { "Name": "Rahul", "Role": "Pune"}, 
			    { "Name": "Ram", "Role": "Pune"},
			    { "Name": "Ram", "Role": "Pune"},
			    { "Name": "Ram", "Role": "Pune"}
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