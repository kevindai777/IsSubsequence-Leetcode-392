//Objective is to see whether one string is a subsequence of another

let s = "abc", t = "ahbgdc"


//O(n) solution that uses two pointers to traverse over both strings

let p1 = 0
let p2 = 0

while (p1 < s.length && p2 < t.length) {

    //If the characters match, check the next character in the subsequence
    if (s[p1] == t[p2]) {
        p1++
    }
    p2++
}

return p1 == s.length