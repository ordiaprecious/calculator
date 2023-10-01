function fan(x) {
    document.getElementById('screen').innerHTML +=x
}
function bill(y){
    document.getElementById('screen').innerHTML +=y
}
function total(z){
    document.getElementById('screen2').innerHTML= eval(document.getElementById('screen').innerHTML)
}
function empty(){
    document.getElementById('screen').innerHTML=''
    document.getElementById('screen2').innerHTML=''
}