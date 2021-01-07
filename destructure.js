const person = {
    head: {
        eyes: 'x',
        mouth: {
            teeth: 'x',
            tongue: 'x'
        }
    },
    body: {
        shoulders: 'x',
        chest: 'x',
        arms: 'x',
        hands: 'x',
        legs: 'mylegs'
    }   
};

const numbers = ['1', '3', '2'];

let { body: { legs: myLegs } } = person;
let [onePosition, secondPosition, thirdPosition] = numbers;


document.write(myLegs);
document.write("<br>");
document.write(thirdPosition);