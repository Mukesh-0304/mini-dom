function get(){
    
    var input = document.getElementById('textBox').value;

    var result = input; 
    head.innerHTML = result;

    
}
var a = 'no';
function myFunction(){
        
        if(a=='no'){
            document.getElementById("myDiv").style.backgroundColor = "red";
            a='yes'
        }
        else{
            document.getElementById("myDiv").style.backgroundColor = "";
            a='no'
        }
}

function display(a){
    document.getElementById("para").innerHTML=a;
}

function get2(b){
    
    document.getElementById("hell").innerHTML=b;
    document.getElementById("hel").innerHTML=b;
    document.getElementById("he").innerHTML=b;

}