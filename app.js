let btn=document.querySelector('button');
btn.addEventListener('click',function game(){
    const max=prompt("enter the max number");
    const random =Math.floor(Math.random()*max)+1;
    let guess=prompt("guess the number");

while(true){

    if(guess =="quit"){
        console.log("user quit");
        break;
    }
    if(guess==random){
        console.log("you are right ! congrats!! random was ",random)
        break;

    }else if(guess<random){
        guess=prompt("hint: your gueess was to small,please try again");
    }else{
        guess=prompt("hint: your guess was too large. please try again");
    }
    // else{
    //     guess =prompt("your guess was,please try again");
    // }
}
})

// let p=document.querySelector('p');
// console.log(game());
