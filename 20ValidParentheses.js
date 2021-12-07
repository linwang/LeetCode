//input: s, string of characters (){}[]
//output: bool, is string valid
//Validity test:
//* each left parentheses has a matching right (equal numbers of lefts & rights)
//* they must be closed in the correct order
// ({[]}) okay
//  (){[]} okay
// ({[}]) not
//(so if I see a left, then where is my right?)

function isValidParentheses(s) {
  if(s == null) {
    return false;
  }
  const matching = {'(':')', '{':'}', '[':']'};
  const lefts = {'(':'(', '{':'{', '[':'['};
  const rights = {')':')', '}':'}', ']':']'};

  let stack = [];
  for(let i = 0; i < s.length; i++) {
    if(lefts[s[i]] != null) {
      stack.push(s[i]);
    }
    else if(rights[s[i]] != null) {
      let left = stack.pop();
      if(matching[left] !== s[i]) {
        return false;
      }
    }
    //ignore any characters that are not parentheses
  }
  if(stack.length !== 0) {
    return false;
  }
  return true;
}

console.log(isValidParentheses(null));//false
console.log(isValidParentheses(''));//true
console.log(isValidParentheses('('));//false
console.log(isValidParentheses('()'));//true
console.log(isValidParentheses('{}'));//true
console.log(isValidParentheses('[]'));//true
console.log(isValidParentheses('({[]})'));//true
console.log(isValidParentheses('(){[]}'));//true
console.log(isValidParentheses('([]){}'));//true
console.log(isValidParentheses('(){a}[]'));//true
console.log(isValidParentheses('({)}[]'));//false
console.log(isValidParentheses('({}[)]'));//false
