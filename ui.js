/**
 * Created by vagrant on 3/13/17.
 */
function printNumber(number) {
    var placeholder = document.getElementById("placeholder");
    placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
};