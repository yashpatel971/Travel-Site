function validimi()                                    
{ 
    var name = document.forms["forma"]["emri"];               
    var email = document.forms["forma"]["email"];    
    var dscp = document.forms["forma"]["description"];  
    
   
    if (name.value == "")                                  
    { 
        window.alert("Ju lutem shkruani Emrin dhe Mbiemrin."); 
        name.focus(); 
        return false; 
    } 
         
    if (email.value == "")                                   
    { 
        window.alert("Ju lutem shkruani një e-mail adresë."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        window.alert("Ju lutem shkruani një e-mail adresë valide"); 
        email.focus(); 
        return false; 
    } 
   
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        window.alert("Ju lutem shkruani një e-mail adresë valide"); 
        email.focus(); 
        return false; 
    }    
    
    if (dscp.value == "")                               
    { 
        window.alert("Nuk mund të dërgoni mesazh të zbrazët."); 
        name.focus(); 
        return false; 
    } 
    return true; 
}


function validimi2(){
    var email = document.forms["forma2"]["email"];
    if (email.value == "")                                   
    { 
        window.alert("Ju lutem shkruani një e-mail adresë."); 
        email.focus(); 
        return false; 
    } 
    return true;
}