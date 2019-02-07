

function transferMovieFromArrays(arr1, arr2, movie) {

    if (arr1.includes(movie)) {
        var ind = arr1.indexOf(movie);
        arr1.splice(ind, 1);
        arr2.push(movie)
    } else {
        var ind = arr2.indexOf(movie);
        arr2.splice(ind,1);
        arr1.push(movie);
    }
        
}


function searchHelper(arr, value) {
    debugger;
    for (let i = 0; i < arr.length; i++) {
        var hold = []
        if(arr[i].includes(value)) {
          hold.push(arr[i]);
        }
    }
    return hold
}


module.exports.transferMovieFromArrays = transferMovieFromArrays;
module.exports.searchHelper = searchHelper;
