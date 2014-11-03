function checkqn1() {
    var allOptions = document.getElementsByName("q1");
    var allRadios = 3;
    var result;
    
    for (i=0; i<3; i++) {
        if (allOptions[i].checked) {
            if (allOptions[i].value == "correct") {
                result = "Well done! " + "They scored two goals in extra time";
            }
            else {
                result = "Try again!";
            }
        }
    }
    document.getElementById("resultq1").innerHTML = result;
}

function checkqn2() {
    var allOptions = document.getElementsByName("q2");
    var allRadios = allOptions.length;
    var result;
    
    for (i=0; i<allRadios; i++) {
        if (allOptions[i].checked) {
            if (allOptions[i].value == "correct") {
                result = "Well done!";
            }
            else {
                result = "Try again!";
            }
        }
    }
    document.getElementById("resultq2").innerHTML = result;
}