
// ignore this, it's just display code
let strVal = generateString(xyArray);
if(strVal.length <= 5) {
    document.getElementById("secret").innerText = "ENCRYPTED 🔒";
} else {
    document.getElementById("secret").innerText = strVal + "🎉";
}