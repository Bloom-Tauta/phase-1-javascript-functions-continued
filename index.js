// code your solution here
function saturdayFun(action = "roller-skate") {
    return `This Saturday, I want to ${action}!`;
}

mondayWork();
function mondayWork(action = "go to the office") {
    return `This Monday, I will ${action}.`;
}

function wrapAdjective(adjective = "*") {
    return function(remark= "special") {
        return `You are ${adjective}${remark}${adjective}!`
    }
}