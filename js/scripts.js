

function findUniq() {
    
    var string_arr = [ 'a   b c', 'ac b', 'b ac', 'ca b', 'b ca', 'te st', 'cba' ];
    var char_arr = [];
    var char_arr2 = [];
    var char_arr3 = [];
    var diff=false;
    var type=false;
    var solve;
    $(".js").html("");
    string_arr[0]=string_arr[0].replace(/\s+/g,'');
    string_arr[1]=string_arr[1].replace(/\s+/g,'');
    string_arr[2]=string_arr[2].replace(/\s+/g,'');
    for(var i=0; i<string_arr[0].length; i++) {
        char_arr.push(string_arr[0][i]);
    }
    char_arr= char_arr.sort();

    for(var i=0; i<string_arr[1].length; i++) {
        char_arr2.push(string_arr[1][i]);

    }    
    char_arr2= char_arr2.sort();
    
    for(var i=0; i<char_arr.length; i++) {
        if (char_arr2[i] != char_arr[i])
            diff=true;
    }   
    if (diff)
        {
            for(var i=0; i<string_arr[2].length; i++) {
                char_arr3.push(string_arr[2][i]);
            }
            
            char_arr3= char_arr3.sort();
    
            diff=false;

            for(var i=0; i<char_arr.length; i++) {
                if (char_arr3[i] != char_arr[i])
                    diff=true;
            }   
                        $(".js").append(char_arr3);
                        $(".js").append("===<br />");  
                        $(".js").append(char_arr2);
                        $(".js").append("===<br />");  
                        $(".js").append(char_arr);
                        $(".js").append("===<br />");              
            if (diff){ solve=string_arr[0]; }
            else { solve=string_arr[1];}
        }
    else
        {
            for(var i=2; i<string_arr.length; i++) {
                string_arr[i]=string_arr[i].replace(/\s+/g,'');
                
                char_arr3=string_arr[i].split('');
                
                char_arr3=char_arr3.sort();
                for(var j=0; j<char_arr3.length; j++) {
                    if (char_arr3[j]!=char_arr[j]){
                        solve=string_arr[i];
                        $(".js").append("Искомая строка - ");                         
                        $(".js").append(solve);

                        return;
                    }
                }
                        //$(".js").append(string_arr[i]);
                        //$(".js").append("<br />");          
           
            }
        }
                          $(".js").append("Искомая строка - ");                         
                        $(".js").append(solve);


}
