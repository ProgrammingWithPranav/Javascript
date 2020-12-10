function getPara1(){
    var inputs = [];
    for(var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    document.getElementById("response_para_1").innerHTML = inputs.join(". ");
}
function getPara2(){
    var inputs = [];
    for(var i = 1; i <= 6; i++){
        inputs.push(document.getElementById("para2_input_box_" + i).value);
    }
    document.getElementById("response_para_2").innerHTML = inputs.join(". ");
}