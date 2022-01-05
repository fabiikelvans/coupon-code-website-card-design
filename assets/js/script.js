// COPY TO CLIPBOARD

let cpnBtn = document.getElementById('coupon-btn');
let cpnCode = document.getElementById('coupon-code');

cpnBtn.onclick = function () {
    navigator.clipboard.writeText(cpnCode.innerHTML);
    cpnBtn.innerHTML = "COPIED";
    setTimeout(function(){
        cpnBtn.innerHTML = "COPY CODE";
    }, 3000);
}