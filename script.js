var num_list = [];
var plusone_in_mode = 0;
let mean_text = document.getElementById("mean");
let median_text = document.getElementById("median");
let mode_text = document.getElementById("mode");
let range_text = document.getElementById("range");

function add_to_list() {
    let num = document.getElementById("textbox").value;
    let text = document.getElementById("text");
    num_list.push(Number(num));
    text.innerHTML = "List: " + num_list;
    plusone_in_mode = 0;

    mean();
    median();
    mode();
    range();

    document.getElementById("textbox").value = "";
}

function mean() {
    var mean_to_add = 0
    for (let i=0; i < num_list.length; i++) {
        mean_to_add += num_list[i];
    }
    let result_mean = mean_to_add / num_list.length;
    mean_text.innerHTML = "Mean: " + result_mean.toString();
}

function median() {
    var i = (num_list.length - 1) / 2
    var i = i.toString();
    if (i.endsWith(".5")) {
        var i = Number(i);
        var a = num_list[i-.5];
        var b = num_list[i+.5];
        var median_result = (a+b) / 2;
    }
    else {
        var median_result = num_list[i]
    }
    median_text.innerHTML = "Median: " + median_result;
}

function mode() {
    var counts = {};
    var maxFreq = 0;
    for (var i in num_list){
        counts[num_list[i]] = (counts[num_list[i]] || 0) + 1;
        if (counts[num_list[i]] > maxFreq) {
            maxFreq = counts[num_list[i]];
            var mode = num_list[i];
        }
        mode_text.innerHTML = "Mode: " + mode
    }
}

function range() {
    num_list.sort((a, b) => a - b)
    the_range = num_list[num_list.length - 1] - num_list[0]
    range_text.innerHTML = "Range: " + the_range
}