var year1;
var year2;
var month1;
var month2;
var day1;
var day2;


$(document).ready(function(){
    document.getElementById("STRstatistics").addEventListener("click", MYform);
    function MYform() {
        var oneselect
        var valueindex = null;
        oneselect = document.getElementById("select2");
        valueindex = oneselect.value;
        if (valueindex == null) {
            alert("输入出错");
        }
        else {
            year1 = valueindex;
        }
        valueindex = null;

        oneselect = document.getElementById("select3");
        valueindex = oneselect.value;
        if (valueindex == null) {
            alert("输入出错");
        }
        else {
            month1 = valueindex;
        }
        valueindex = null;

        oneselect = document.getElementById("select4");
        valueindex = oneselect.value;
        if (valueindex == null) {
            alert("输入出错");
        }
        else {
            day1 = valueindex;
        }
        valueindex = null;

        oneselect = document.getElementById("select5");
        valueindex = oneselect.value;
        if (valueindex == null) {
            alert("输入出错");
        }
        else {
            year2 = valueindex;
        }
        valueindex = null;

        oneselect = document.getElementById("select6");
        valueindex = oneselect.value;
        if (valueindex == null) {
            alert("输入出错");
        }
        else {
            month2 = valueindex;
        }
        valueindex = null;

        oneselect = document.getElementById("select7");
        valueindex = oneselect.value;
        if (valueindex == null) {
            alert("输入出错");
        }
        else {
            day2 = valueindex;
        }
        valueindex = null;
    }
});


