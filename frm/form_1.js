
var sub = document.getElementById("sd");
sub.onclick = function validate(){

    var n = document.getElementById("fn");
    var m = document.getElementById("ps");
    var q = document.getElementById("no");

    if(n.value=='' ||m.value=='' ||q.value=='' ){
        alert("Field can't be empty");
}

    else{}

    if(m.value.length<3 || m.value>9){
    alert("Password is not valid");
    }
    if(q.value.length<12 || q.value.length>12){
        alert("Number is not valid");
        }
    var str=n.value.slice(0,1);
    if(str=='_' || str=='$'){
        alert("Username is not valid");
    }

}






