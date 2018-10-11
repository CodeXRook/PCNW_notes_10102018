/*
    a special number is one that is:

    1. rounded down if it has a trailing decimal
    2. cubed
*/

const roundDown = n => Math.floor(n);
const cube = n => n ** 3;
const getSpecialNum = n => cube(roundDown(n));
const pow = (base, pow = 1) => base ** pow;
const pastTense = (name="define") => name.slice(-1) + "ed";

/*
const getSpecialNum = n => {
    const rounded = roundDown(n);
    const cubed = cube(rounded);
    return cubed;
}
*/
