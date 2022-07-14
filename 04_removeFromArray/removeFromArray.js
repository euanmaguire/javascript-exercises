const removeFromArray = function() {
    let list = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        for(let j = 0; j < list.length; j++){
            if(list[j] === arguments[i]){
                list.splice(j,1);
            }
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
