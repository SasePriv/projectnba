//n: Array length, K: sum of numbers 
exports.find_sumPair = (array, n, K) => {
    const arraySort = array.sort((a, b) => {
        if(a.h_in < b.h_in) { return -1; }
        if(a.h_in > b.h_in) { return 1; }
        return 0;
    });

    var i = 0;
    var j = n -1;

    while(i < j)
    {            
        if(parseInt(arraySort[i].h_in) + parseInt(arraySort[j].h_in) == K){
            return [arraySort[i], arraySort[j]]
        }else if(parseInt(arraySort[i].h_in) + parseInt(arraySort[j].h_in) < K){
            i = i + 1; 
        }else{
            j = j-1;
        }
    }

    return [];
}