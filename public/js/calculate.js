function calculate(){

        
        var weight1 = document.getElementById("weight1input").value;
        var grade1 = document.getElementById("grade1input").value/100;
        var weight2 = document.getElementById("weight2input").value;
        var grade2 = document.getElementById("grade2input").value/100;
          
        var weight3 = document.getElementById("weight3input").value;
        var grade3 = document.getElementById("grade3input").value/100;
        var weight4 = document.getElementById("weight4input").value;
        var grade4 = document.getElementById("grade4input").value/100;
        var weight5 = document.getElementById("weight5input").value;
        var grade5 = document.getElementById("grade5input").value/100;
        var weight6 = document.getElementById("weight6input").value;
        var grade6 = document.getElementById("grade6input").value/100;

        var total_grade = (weight1 * grade1) + (weight2 * grade2) + (weight3 * grade3) + (weight4 * grade4) + (weight5 * grade5) + (weight6 * grade6);
        if(total_grade>=90) {
            document.getElementById("average").innerHTML= 
            "Grade avg: " + total_grade + " [A]";

        }
        else if (total_grade<=89 && total_grade>=85) {
            document.getElementById("average").innerHTML= 
            "Grade avg: " + total_grade + " [B+]"
        }
        else if (total_grade<=84 && total_grade>=80) {
            document.getElementById("average").innerHTML= 
            "Grade avg: " + total_grade + " [B]"
        }
        else if (total_grade<=79 && total_grade>=75) {
            document.getElementById("average").innerHTML= 
            "Grade avg: " + total_grade + " [C+]"
        }
        else if (total_grade<=75 && total_grade>=70) {
            document.getElementById("average").innerHTML= 
            "Grade avg: " + total_grade + " [C]"
        }
        else if (total_grade<70) {
            document.getElementById("average").innerHTML= 
            "Grade avg: " + total_grade + " [D]"
        }
        else if (total_grade < 60) {
            document.getElementById("average").innerHTML= 
            "Grade avg: " + total_grade + " [F]"
        }
        else {
            document.getElementById("average").innerHTML= "unknown"
        }
        
}