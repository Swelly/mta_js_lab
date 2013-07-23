var subway = {
  N_line: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L_line: ["8th", "6th", "Union Square", "3rd", "1st"],
  Six_line: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor"]
};

var start_line = prompt("Start line?");
var start_stop = prompt("Start stop?");
var end_line = prompt("End line?");
var end_stop = prompt("End stop?");
var start = subway[start_line];
var end = subway[end_line];

var start_index;
var end_index;
var first_midpoint;
var second_midpoint;
var result;

if (start_line == end_line) {
  for (var i=0; i < start.length; i++) {
    if (start[i] == start_stop) {
      start_index = i;
    }
    if (end[i] ==  end_stop) {
      end_index = i;
    }
  }
  result = Math.abs(start_index - end_index);
} else {
    for (var i=0; i < start.length; i++) {
      if (start[i] == start_stop){
        start_index = i;
      }
      if (start[i] == "Union Square") {
        first_midpoint = i;
      }
    }
    for (var i=0; i < end.length; i++) {
      if (end[i] == end_stop) {
        end_index = i;
      }
      if (end[i] == "Union Square") {
        second_midpoint = i;
      }
    }
  result = (Math.abs(start_index - first_midpoint) + Math.abs(second_midpoint - end_index));
}
cd
alert(result);





