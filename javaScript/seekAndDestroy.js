function seekAndDestroy(arr, ...args){
    return arr.filter(el => el.indexOf(args) === -1);
}

seekAndDestroy([1,2,3,4,5], 1, 2, 3);
