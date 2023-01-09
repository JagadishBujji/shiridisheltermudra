var total = document.getElementById("total").innerText;
var downPayment = document.getElementById("downPayment");
var downPaymentText = document.getElementById("downPaymentText");
var loanAmountText = document.getElementById("loanAmountText");
var emi = document.getElementById("emi");
var loanPeriod = document.getElementById("loanPeriod");
var loanPeriodText = document.getElementById("loanPeriodText");
var interest = document.getElementById("interestRate");

downPayment.max = total;

downPayment.oninput = (e) => {
  let value = e.target.value;
  downPaymentText.innerText = value;
  let p = parseInt(total) - parseInt(value);
  loanAmountText.innerText = p;
  let n = parseInt(loanPeriod.value) * 12;
  let r = parseFloat(interest.value) / 1200;
  let emilValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  emi.innerText = Math.round(emilValue);
};

loanPeriod.oninput = (e) => {
  let n = parseInt(e.target.value) * 12;
  loanPeriodText.innerText = n / 12;
  let p = parseInt(loanAmountText.innerText);
  let r = parseFloat(interest.value) / 1200;
  let emilValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  emi.innerText = Math.round(emilValue);
};

function fun() {
  console.log("fun func");
  var select = document.getElementById("choose");
  // var img = document.createElement("img");
  // var artcle = document.getElementById("art");
  // var index=select.selectedIndex;
  var src_arr = [
    {
      img: "../images/hdfc.png",
      interest: "6.5",
    },
    {
      img: "../images/sbi.jpg",
      interest: "8.55",
    },
    {
      img: "../images/ubi.png",
      interest: "8.25",
    },
    {
      img: "../images/pnb.png",
      interest: "8.75",
    },
    {
      img: "../images/bob.jpg",
      interest: "7.45",
    },
    {
      img: "../images/hdfc.png",
      interest: "8.60",
    },
  ];
  var img = document.getElementById("image");
  // img.src=src_arr[index];
  var interest = document.getElementById("interestRate");
  var interestText = document.getElementById("interestRateText");

  img.src = src_arr[select.selectedIndex].img;
  interest.value = src_arr[select.selectedIndex].interest;
  interestText.innerText = src_arr[select.selectedIndex].interest;

  let n = parseInt(loanPeriodText.innerText) * 12;
  let p = parseInt(loanAmountText.innerText);
  let r = parseFloat(interest.value) / 1200;

  let emilValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  emi.innerText = Math.round(emilValue);
}
