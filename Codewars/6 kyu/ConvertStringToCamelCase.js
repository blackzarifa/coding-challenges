/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized.

Examples:
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

function toCamelCase(str){
  let camelStr = str.split(/[_-]/);
  
  for (let i = 0; i < camelStr.length; i++) {
    if (!(i === 0 && /[a-z]/.test(camelStr[i][0]))) {
      camelStr[i] = camelStr[i].replace(camelStr[i][0], camelStr[i][0].toUpperCase());
    }
  }
  
  return camelStr.join('');
}