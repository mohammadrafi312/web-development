let quater = prompt("Enter a number between 1 to 4");
switch(Number(quater)) {
    case 1:
        console.log("january, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("The value is not a valid quarter");
}