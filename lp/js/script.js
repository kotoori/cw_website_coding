

/**************************/
function test1(){
    alert('alert 1');

    $(function(){ //jQuery 
        let resolt = confirm('JQuery alert');
        console.log(resolt);
        if(resolt == true){
            
            console.log('confirmed');
        }else{
            console.log('cancel');
        }    
    });

    alert('alert 2');
}

/***************************/
function test2(){
    $(function(){
        alert('test2');
        let s = document.getElementsByClassName("chachcopy-jp");
        if(s){
            console.log(s);
            console.log(s[0].textContent);
        }else{
            console.log('### s==null');
        }

        let chachcopyenElement = document.getElementsByClassName("chachcopy-en");
        if(chachcopyenElement){
            for( var i = 0 ; i < chachcopyenElement.length ; i++){
                console.log(chachcopyenElement);
                console.log('i=%d length=%d',i,chachcopyenElement.length);
                console.log(chachcopyenElement[i].textContent);
                chachcopyenElement[i].textContent = "Hello, Updated DOM!";
                chachcopyenElement = document.getElementsByClassName("chachcopy-en");
                console.log(chachcopyenElement);
                console.log(chachcopyenElement[i].textContent);
            }
            console.log('exit for loop i=%dです',i);
        }else{
            console.log('###chachcopyenElement==null');
        }
    });
}

/***************************/
function test3(){
    document.addEventListener("DOMContentLoaded", function() {
        alert('test3');
        let titleElement = document.getElementById("chachcopy-en");
        console.log(titleElement);
    });
}
/***************************/

/***
 * main()
 ***/
//test1();
test2();
//test3();
