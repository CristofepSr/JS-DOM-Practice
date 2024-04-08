function addtodisplay(value){
    document.getElementById('display').value += value;
}

function cleanerdisplay(){
    document.getElementById('display').value='';
}

function calculate() {
    var result = eval(document.getElementById('display').value);
    if (result == undefined ){
        document.getElementById('display').value = 'Error';
    }else{
        document.getElementById('display').value = result;
    }
}