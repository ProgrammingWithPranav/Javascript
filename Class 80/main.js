var responses = [];
function sort(){
    responses.sort();
    var display_response = [];
    for(var i=0; i < responses.length; i++){
        var temp = "<h4>" + responses[i] + "</h4>";
        display_response.push(temp);
    }
    document.getElementById("sorted_response").innerHTML = display_response;
}

function submit(){
    for (var i = 1; i <= 8; i++){
        var temp = document.getElementById("input" + i).value;
        responses.push(temp);
        console.log(temp);
    }
    var display_response = [];
    for(var i = 0; i < responses.length;i++){
        var temp = "<h4>" + responses[i] + "</h4>";
        display_response.push(temp);
    }
    document.getElementById("response").innerHTML = display_response;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sort").style.display = "inline-block";
    document.getElementById("join").style.display = "inline-block";
}

function join(){
    var display_response = [];
    for(var i = 0; i < responses.length;i++){
        var temp = "<h4>" + responses[i] + "</h4>";
        display_response.push(temp);
    }
    document.getElementById("sorted_response").innerHTML=display_response.join("*********");
}