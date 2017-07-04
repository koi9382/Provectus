var string_arr = [ 'a   b c', 'ac b', 'b ac', 'ca b', 'fgdh hgu jh ', 'b ca', 'cba'  ];

$( document ).ready(function() {
    $(".arr").html("["+string_arr.join(",")+"]");
});


function findUniq() {
    
    
    var dump = string_arr.slice();

    var solve="";
    var i;
    var l=string_arr.length;
    
    $(".js").html("");
    
    string_arr[0]=string_arr[0].split('').sort().join('').trim();
    
    for (i=1; i<l-1; i++) {

        string_arr[i]=string_arr[i].split('').sort().join('').trim();
                
        if (string_arr[i] != string_arr[i-1])
        {
            string_arr[i+1]=string_arr[i+1].split('').sort().join('').trim();
            
            if (string_arr[i+1]==string_arr[i]) solve=dump[i-1];
            else solve=dump[i];
        }
        
    }
    
    if (string_arr[l-2] != string_arr[l-1])
        solve=dump[l-1];

    $(".js").append("Искомая строка:<br />");                         
    $(".js").append(solve);

}
