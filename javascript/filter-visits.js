var filter = document.getElementById("filter");
filter.addEventListener("change",function(){
    let lines=document.getElementsByClassName("line");
    Array.prototype.forEach.call(lines, function(line) {
        // Do stuff here
        line.classList.add("hidden");
    });
    switch (filter.value){
        case 'day':
            document.getElementById("myChart3").classList.remove("hidden");
            break;
        case 'month':
            document.getElementById("myChart2").classList.remove("hidden");
            break;
        case 'year':
            document.getElementById("myChart").classList.remove("hidden");
            break;  

    }
    
});