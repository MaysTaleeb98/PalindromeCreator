// function of PalindromeCreator(str)

function PalindromeCreator(str) {

    if (isPalindrome(str)) {
    return 'palindrome'
    }

    for (var i = 0; i < str.length; i++) {
        var trying = str
        var array = trying.split('')
        var characters = array.splice(i, 1)
        trying = array.join('')
        if (isPalindrome(trying)) { 
            return characters.join('')
        }
        
    }

    for (let i = 0; i < str.length; i++) {
        let chars = [];
        for (let j = i; j < str.length; j++) {
            let testArray = str.split('');
            chars[0] = testArray.splice(i, 1);
            chars[1] = testArray.splice(j, 1);
            let removedCharacters  = testArray.join('');
            if (isPalindrome(removedCharacters)) {
                return chars.join('');
            }
        }
    }
    return 'not possible'
}

function isPalindrome(str) {
    return (str == str.split('').reverse().join('')) ? true : false
}

console.log(PalindromeCreator("kjjjhjj"));//kj
console.log(PalindromeCreator("aba"));//palindrome
console.log(PalindromeCreator("mays"));//not poasssible
console.log(PalindromeCreator("abjchba"));//jc