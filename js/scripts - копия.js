

function findUniq() {
    
    var string_arr = [ 'a   b c', 'ac b', 'b ac', 'ca b', 'b ca', 'te st', 'cba' ];
    var dump = string_arr.slice();
    var diff = false;
    var type = false;
    var solve;
    var i;
    $(".js").html("");
    
    string_arr[0] = string_arr[0].replace(/\s+/g, '').split('').sort();
    string_arr[1] = string_arr[1].replace(/\s+/g, '').split('').sort();
    
    

    
    for (i=0; i<string_arr[1].length; i++) {
        if (string_arr[1][i] != string_arr[0][i])
        {
            diff = true;
            break;
        }
    }   
    
    if (diff)
        {
            diff=false;
            string_arr[2]=string_arr[2].replace(/\s+/g,'').split('').sort();
  
            for(i=0; i<string_arr[1].length; i++) {
                if (string_arr[2][i] != string_arr[0][i])
                    diff=true;
            }   
                        
            if (diff){ solve=dump[0]; }
            else { solve=dump[1];}
        }
    else
        { 
            for (i=2; i<string_arr.length; i++) {
                string_arr[i]=string_arr[i].replace(/\s+/g,'').split('').sort();
           

                for (j=0; j<string_arr[2].length; j++) {
                    if (string_arr[2][j]!=string_arr[i][j]){
                        solve=dump[i];
                        $(".js").append("Искомая строка:<br />");                         
                        $(".js").append(solve);

                        return;
                    }
                }
                        //$(".js").append(string_arr[i]);
                        //$(".js").append("<br />");          
           
            }
        }
            $(".js").append("Искомая строка:<br />");                         
            $(".js").append(solve);

}
