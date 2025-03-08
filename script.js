const data = document.getElementById('display')
console.log(data);


function itemsdisplay(value){
    data.value += value;
}

function cleardisplay(){
    data.value = ''
}

function calculate(){
    try{
        data.value = eval(data.value);
    }catch{
        alert('this not valid operation');
    }
}