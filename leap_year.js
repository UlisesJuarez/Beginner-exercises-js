function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here. 
        var result="";
        if (year%4===0 && year%100===0 && year%400===0){
            result="Leap year.";
        }else if(year%4===0 && year%100===0){
            result="Not leap year.";
        }else if(year%4!==0){
            result="Not leap year.";
        }else{
            result="Leap year."
        }
    
        return result;
    
    /**************Don't change the code below****************/    
    
    }