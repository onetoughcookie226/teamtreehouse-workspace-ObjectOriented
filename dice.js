/**
 * Created by vagrant on 3/12/17.
 */


var dice = {
    sides:  6,
    roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
   return randomNumber;
}
}
