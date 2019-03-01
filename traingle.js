

         var tracker = function(sideone, sidetwo, sidethree) {

           var sideone= parseInt(document.getElementById("side-1").value);
           var sidetwo = parseInt(document.getElementById("side-2").value);
           var sidethree = parseInt(document.getElementById("side-3").value);

           var sides = [];
           sides.push(sideone);
           sides.push(sidetwo);
           sides.push(sidethree);

           if ((sideone + sidetwo> sidethree && sideone + sidethree > sidetwo && sidetwo + sidethree > sideone)
           && (sideone=== sidetwo && sidetwo === sidethree)) {
           document.getElementById("results").innerHTML = "Its an Equilateral Triangle <br> " ;

           } else if ((sideone + sidetwo > sidethree && sideone + sidethree > sidetwo && sidetwo + sidethree > sideone)
            && ((sideone === sidetwo && sidetwo !== sidethree) ||
           (sideone === sidethree && sidethree !== sidetwo) || (sidetwo=== sidethree && sidetwo !== sideone))) {
             document.getElementById("results").innerHTML = "Its an Isoscele Triangle <br> " ;

           } else if ((sideone + sidetwo > sidethree && sideone + sidethree > sidetwo && sidetwo + sidethree > sideone)
            && (sideone !== sidetwo && sidetwo !== sidethree && sideone !== sidethree)) {
             document.getElementById("results").innerHTML = "Its a Scalene Triangle <br> " ;

           } else if (!sideone || !sidetwo || !sidethree) {
             document.getElementById("results").innerHTML = "Enter all the sides and try again";
           } else {
             document.getElementById("results").innerHTML = " It is not a triangle!";


           }
         }
