

function myFunction() 
{

  let value = parseInt(document.getElementById("value").value);
  if (value != NaN) {
    document.getElementById("buyAmount1").innerText = (value * (0.6 / 100)).toFixed(3);
    let step2 = document.getElementById("buyAmount2").innerText = (value * (1.2 / 100)).toFixed(3);
    let step3 = document.getElementById("buyAmount3").innerText = (value * (2.6 / 100)).toFixed(3);
    let step4 = document.getElementById("buyAmount4").innerText = (value * (5.6 / 100)).toFixed(3);
    let step5 = document.getElementById("buyAmount5").innerText = (value * (12 / 100)).toFixed(3);
    let step6 = document.getElementById("buyAmount6").innerText = (value * (25 / 100)).toFixed(3);
    let step7 = document.getElementById("buyAmount7").innerText = (value * (53 / 100)).toFixed(3);
  }
}

