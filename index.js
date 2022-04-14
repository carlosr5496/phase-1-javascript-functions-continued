// code your solution here
function saturdayFun (task="roller-skate") {
    return (`This Saturday, I want to ${task}!`)
} 


const mondayWork = function(task="go to the office") {
    let resp = `This Monday, I will ${task}.`
    return resp 
};

function wrapAdjective(spec="*") {
    const innerFunction = function (x="special") {
        return `You are ${spec}${x}${spec}!`;
    };
    return innerFunction;
}
    // const encouragingPromptFunction = wrapAdjective("!!!")
    // wrapAdjective("%")("a dedicated programmer")


    // function wrapAdjective(spec="*") {
    //     const innerFunction = function (x="special") {
    //         return `You are ${spec}a hard worker${spec}!`;
    //     };
    //     return innerFunction;