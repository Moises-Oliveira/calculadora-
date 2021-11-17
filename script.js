function insert(n){

    var n1=document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML =n1 + n

}
function clean(){
    document.getElementById('result').innerHTML = ''
}
function back(){
    var n2 = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = n2.substring(0, n2.length -1)
}
function calcular(){
    var n3= document.getElementById('result').innerHTML

    if (n3){
    document.getElementById('result').innerHTML = eval(n3)
    }
}
