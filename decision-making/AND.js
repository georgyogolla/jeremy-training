// AND (&&)
// Both sides must be true in order
// for the whole thing to be true

1 <= 4 && 'a' === 'a'; // true;
9 > 10 && 9 >= 9; // false;
'abc'.length === 3 && 1 + 1 === 4; // false;

// AND(&&) with (if)
let password = 'taco tuesday';

if(password.length >= 6 && password.indexOf(' ') === -1){
    console.log("VALID PASSWORD");
} else {
    console.log("INVALID PASSWORD");
};

