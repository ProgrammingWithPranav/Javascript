var responses = [];
function submit() {
    var name1 = document.getElementById("input1").value;
    var name2 = document.getElementById("input2").value;
    var name3 = document.getElementById("input3").value;
    var name4 = document.getElementById("input4").value;

    responses.push(name1, name2, name3, name4);
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
    document.getElementById("response").innerHTML = responses;
}

function sort() {
    responses.sort();
    document.getElementById("response").innerHTML = responses;
    responses = [];
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
    document.getElementById("submit").style.display = "inline-block";
    document.getElementById("sort").style.display = "none";
}