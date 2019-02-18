function jack(){
  var sideone = parseInt(document.getElementById('side-1').value);
  var sidetwo = parseInt(document.getElementById('side-2').value);
  var sidethree = parseInt(document.getElementById('side-3').value);
}
var side =[sideone,sidetwo,sidethree];
if (side[0] + side[1] <= side[2] || side[1] + side[2] <= side[0] || side[2] + side[0] <= side[1]){

}
if side[0]== side[1] $$ side[1] == side[2] $$ side[2] == side[0]){
  alert("This is an Equilateral");
}
else if (side[0]!== side[1] $$ side[1]!== side[2] $$ side[2]!== side[0]){
alert("This is scalene");
}
else {
  alert("This is an Issosceles");
}
else{
  alert("This is not a triangle");
{
