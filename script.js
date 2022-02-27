var rIndex;
var table = document.getElementById('table');

//check the empty edge case
function checkEmptyInput(){
    var isEmpty = false;
    var fname = document.getElementById('fname').value;
    var Profile = document.getElementById('Profile').value;
    var age = document.getElementById('age').value;

    if(fname === ""){
       isEmpty=true
       alert("Invalid entry!")
    }
    else if(Profile === ""){
       isEmpty=true
       alert("Invalid entry!")
    }
    else if(age === ""){
       isEmpty=true
       alert("Invalid entry!")
    }   
    return isEmpty
}

// add row
function addHTMLTableRow(){

    if(!checkEmptyInput()){
        //get table by id, create a new row and cells
        var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        fname = document.getElementById('fname').value,
        Profile = document.getElementById('Profile').value,
        age = document.getElementById('age').value;

        cell1.innerHTML = fname;
        cell2.innerHTML = Profile;
        cell3.innerHTML = age;

        //call the functoin to set event to new row
        selectedRowToInput()
    }    
}

//display selected row data into input text
function selectedRowToInput(){
    for(var i=1; i<table.rows.length; i++){
        table.rows[i].onclick = function(){
            //get the selected rpw index
            rIndex = this.rowIndex;
            // console.log(rIndex);
            document.getElementById('fname').value = this.cells[0].innerHTML;
            document.getElementById('Profile').value = this.cells[1].innerHTML;
            document.getElementById('age').value = this.cells[2].innerHTML;
        
        };
    }
}

selectedRowToInput()
function editHTMLTableSelctedRow(){
    var fname = document.getElementById('fname').value;
    var Profile = document.getElementById('Profile').value;
    var age = document.getElementById('age').value;

    if(!checkEmptyInput()){
        table.rows[rIndex].cells[0].innerHTML = fname;
        table.rows[rIndex].cells[1].innerHTML = Profile;
        table.rows[rIndex].cells[2].innerHTML = age;
    }
}

function removeSelectedRow(){
    if(!checkEmptyInput()){
        table.deleteRow(rIndex)
        //clear input text
        document.getElementById('fname').value="";
        document.getElementById('Profile').value="";
        document.getElementById('age').value="";
    }
    else{
        alert("Empty table!")
    }
}

function chnageCSS() {
    // document.body.style.backgroundColor = "pink";
    document.body.style.backgroundImage = "linear-gradient(to right, #7b4397, #dc2430)";
}

function chnageCSSToBlue(){
    // linear-gradient(to right, #136a8a, #267871);
    document.body.style.backgroundImage = "linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)";
}

function setDefault(){
    document.body.style.backgroundImage = "linear-gradient(10deg, #D9AFD9 10%, #97D9E1 80%)";
    document.getElementById('fname').value="";
    document.getElementById('Profile').value="";
    document.getElementById('age').value="";
}

