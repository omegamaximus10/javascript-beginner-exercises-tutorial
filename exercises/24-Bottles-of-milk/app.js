const leche=() =>{
    for(var bottle=99; bottle=>1; bottle--){
        if(bottle>1){
            console.log(`${bottle} bottles of milk on the wall, ${bottle} bottles of milk. Take one down and pass it around, ${bottle-1} bottles of milk on the wall.`);
        }else{
            console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall. No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
        }
    }


};

console.log (leche());