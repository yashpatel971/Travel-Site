localStorage.setItem('FSHMN','Shkenca kompjuterike');
let val = localStorage.getItem('FSHMN');
console.log(val);

sessionStorage.setItem("koha",new Date());

function timespent(){
    var timenow = new Date();
    var koha=sessionStorage.getItem("koha");

    
    var timespent=Date.parse(timenow) - Date.parse(koha);

    var seconds=timespent/1000;

    if(seconds<60){
       alert("Deri tani ju keni qendruar: " + seconds.toString() + " sekonda"); 
    }
    else{
        var newseconds = seconds%60
        var minutes = (seconds - newseconds)/60;
        alert("Deri tani ju keni qendruar: " + minutes.toString() + " minuta e " + newseconds.toString()+" sekonda");
    }
}