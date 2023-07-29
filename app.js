// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    yen=dollar * 127.9
    return yen
}
const fromEuroToDollar= function  (euro){
    dollar=euro * 1.2
    return dollar
}
function fromYenToPound (yen){
    pound=yen * 0.8
    return pound
}
module.exports={
    fromDollarToYen,
    fromYenToPound,
    fromEuroToDollar,
}
