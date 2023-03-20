// program to check if the string is palindrome or not

function palindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i<len; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - i]) {
            return false;
        }
    }
    return true;
}
module.exports = palindrome
