const fibonacci = function(index) {
    let fibonacci = [1, 1];
    if(index <= 0){
        return "OOPS";
    }
    else if(index < 3){
        return fibonacci[index-1];
    }
    else{
        for(let i = 2; i < index; i++){
            fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
        }
        return fibonacci[index-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
