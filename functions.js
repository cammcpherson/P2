function isArmstrong(n) {
        "use strict";
        var sum = 0;

    if ((n >= 0) && (n <= 99999)) {

            
         n = String(n);
         
         for (var i = 0; i < n.length; ++i) {
               
               sum = sum + Math.pow(n[i], n.length);
         }

         if (sum == n)
                return true;
              else
                return false;

         } else {
       return false;
         }
}




function allArmstrongs() {

  "use strict";
  var sum = 0;
  var n = "";
  var armNum = 0;
  var ret = "";  

  for (armNum=1; armNum<=99999; ++armNum) {

       sum = 0;    

 n = String(armNum);

 for (var i = 0; i < n.length; ++i) {
      
       sum = sum + Math.pow(n[i], n.length);
 }


       if (sum == armNum) {

   if (ret == "")
     ret = String(armNum);

   else
     ret = ret + ", " + String(armNum);

 }
  }

  return ret;
}




function allSubstrings1(s) {

  "use strict";

  var val = "";  
  var n;  
  var end;    

  if (s.length > 0) {   

 for (n=0; n<s.length; ++n) {

   for (end = n+1; (end <= s.length); ++end) {

     if (val.length > 0) {
       val = val + ",";   
     }

   val = val + s.substring(n,end);

     }
       }
   }

   return val;
}




function allSubstrings2(s) {

  "use strict";

  var val = "";
  var n;
  var end;
  var retA = [];

  if (s.length > 0) { 

 for (n=0; n<s.length; ++n) {

   for (end = n+1; (end <= s.length); ++end) {

   retA.push (s.substring(n,end));

     }
       }
   }

   return retA;
}




function maxWord (s) {

  "use strict";
  var longest = "";
  var word = "";
  var n = 0;
  var end;

  while (n < s.length) {

 while (s[n] == " ")
   n++;

 for (end = n+1; ((s[end] != " ") && (end < s.length)); ++end) ;

 word = s.substring(n,end);
 if (word.length > longest.length )
   longest = word;  

 n = end;
  }

   return longest;
}