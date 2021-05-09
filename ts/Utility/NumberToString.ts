// made it for a challenge
// put it in here because why not

// gets character (a-z-0-9-[ ]) from number (0-25 for a-z, 26-36 for 0-9 and 37 for ' ') - in the case of a number[], returns multiple chars
const charMap = 'abcdefghijklmnopqrstuvwxyz0123456789 ';

const isInBounds = (n: number) => {
  return !(n > charMap.length - 1 || n < 0);
};

const makeNumberBeInRange = (n: number) => {
  if (!isInBounds(n))
    while (!isInBounds(n))
      if (n >= charMap.length - 1) {
        n = n - charMap.length;
      } else if (n < 0) {
        n = n + charMap.length;
      }
  return n;
};

const getNum = (num: number | number[]) => {
  if (typeof num == 'number') {
    num = makeNumberBeInRange(num);
    return charMap.charAt(num);
  } else {
    let str = '';
    num.forEach(n => (str = str + getNum(n)));
    return str;
  }
};
export default getNum;
