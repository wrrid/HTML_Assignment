/*function reversenumber(x){
    const reversed =  parseInt(x.toString().split('').reverse().join(''),10);
    return reversed;
}

const x = 32234
const result = reversenumber(x);
console.log(result);

function ispalindrome(str){
    const reversed = str.split('').reverse().join('');
    
    return str === reversed;
}

const str = "abbba"
const result = ispalindrome(str);
console.log(result);


function splitword(word){
    const result =[ ];
    
    for (let i=0; i< word.length; i++){
        let x = '';
        for (let j=i; j<word.length; j++){
            x += word[j];
            result.push(x);
        }
    }
    
    return result;
    
}

const word = 'abbba';
const result = splitword(word);
console.log(result);


function sortStringAlpha(word){
    const result = word.split('').sort().join();
    return result;
}

const word = 'study';
const result = sortStringAlpha(word);
console.log(result);


function countVowel(str){
    const vowel = ['a','e','u','i','o'];
    let result = 0;
    for (let char of str.toLowerCase()){
         if (vowel.includes(char)){
         result ++;
         }
    }
    
    return result;
}

const str = "study a word";
const result = countVowel(str);
console.log(result);

function isPrime(x){
    if (x <= 1) return false; 
    if (x ===  2) return true; 
    if (x % 2 === 0) return false; 
    
    const sq = Math.sqrt(x);
    for (let i = 3; i <= sq; i+=2){
        if (x % i === 0)  return false;
    }
    
    return true;
}

console.log(isPrime(7));  
console.log(isPrime(10)); 

function detectType(input){
    return typeof(input);
}
console.log(detectType("Hello"));
console.log(detectType(123));
console.log(detectType(true));
console.log(detectType({}));
console.log(detectType());
console.log(detectType(function() {}));



function calculator(){
    const b = parseInt(prompt("Enter b:"));
    const n = parseInt(prompt("Enter n:"));
    
    const result = Math.pow(b,n);
    console.log("result is " + result);
}

calculator();


function checkLetter(str){
    const result = {};
    
    for(let char of str){
        result[char]=( result[char] || 0) +1;
    }
    
    return result ;
    
}
console.log(checkLetter("Hello"));


function largerFilter(arr,num){
    return arr.filter(element=>element > num);
}

console.log(largerFilter([10, 25, 5, 60, 15],5));

function firstNonRepeatedChar(str){
    const counter = {};
    
    for (let char of str){
        counter[char] = (counter[char] || 0) +1;
    }
    
    for (let char of str){
        if (counter[char]===1){
            return char;
        }
    }
    
    return null;
}

console.log(firstNonRepeatedChar('adedfgrrea'));

function bubbleSort(arr){
    const n = arr.length;
    let flag;
    
    do{
        flag = false;
        for (let i =0; i< n-1; i++){
            if (arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                flag = true;
            }
        }
        
    }while(flag);
    
    return arr;
}

function bubbleSortAlter(arr){
    const n = arr.length;
    let flag;
    
    do{
        flag = false;
        for (let i =0; i< n-1; i++){
            if (arr[i] < arr[i+1]){
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
                flag = true;
            }
        }
        
    }while(flag);
    
    return arr;
}

const numbers = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(bubbleSortAlter(numbers));

function longestCountryName(countries){
    let longest = "";
    
    for (let country of countries){
        if (country.length >longest.length){
            longest = country;
        }
    }
    
    return longest;
}

console.log (longestCountryName(["Australia", "Germany", "United States of America"]))

function longestUniqueSubstring(str){
    let start = 0;
    let maxLength = 0;
    let maxString = "";
    const seen = {};
    
    for (let end =0; end < str.length; end++){
        const char = str[end];
        
        if (seen[char] !== undefined && seen[char] >= start){
            start = seen[char]+1;
        }
        
        seen[char] =end;
        
        if(end - start +1 >maxLength) {
            maxLength = end - start +1;
            maxString = str.substring(start,end+1);
        }
        
    }
    
    return maxString;
}

console.log(longestUniqueSubstring("abcabcbb"));
console.log(longestUniqueSubstring("bbbbb"));
console.log(longestUniqueSubstring("pwwkew"));


function longestPalindrome(str) {
    if (str.length<1) return "";
    
    let start =0;
    let end =0;
    
    for (let i =0; i<str.length; i++){
        let len1 = expandFromCenter(str,i,i);
        let len2 = expandFromCenter(str,i,i+1);
        let len = Math.max(len1, len2);
        
        if (len > end - start) {
            start = i -Math.floor((len-1)/2);
            end = i + Math.floor((len)/2);
        }

    }
    
    return str.substring(start, end + 1);
}

function expandFromCenter(str,left,right){
    while (left >=0 && right < str.length && str[left] === str[right]){
        left--;
        right ++;
    }
    return right -left -1;
}

console.log(longestPalindrome("abracadabra"));
console.log(longestPalindrome("bananas"));

function greetUser(name){
    return `hello, ${name}!`;
}

function processUser(name,callback){
    const message = callback(name);
    console.log(message);
}

processUser("Alice",greetUser);



function getFunction(func){
    return func.name;
}

function HelloWorld(){
    console.log("HelloWorldtext");
}


console.log(getFunction(HelloWorld));
*/