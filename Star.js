// Program that prints star 
function printStar(j){
    for(i=0;i<j;i++){
        for(m=0;m<i;m++ ){
        process.stdout.write("*");
        }
        console.log("");
    }
}

printStar(7)