let goldenstring = "Amaz";
if (goldenstring.length > 5) {
    console.log("The string is longer than 5 characters.");
    if (goldenstring[0] === 'A' || goldenstring[0] === 'a') {
        console.log("The string starts with 'A' or 'a'.");
    }else{
        console.log("The string does not start with 'A' or 'a'.");
    }
} else {
        console.log("The string is less than 5 characters or shorter.");
    }