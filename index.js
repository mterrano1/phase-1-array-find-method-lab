function superbowlWin(array){
    let findWin = array.find(element => element.result === "W")
    if (findWin)
    return findWin.year
}