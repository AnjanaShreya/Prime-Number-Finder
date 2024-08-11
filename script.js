let resets = document.getElementById('reset')
let submits = document.getElementById('submit')
let inputField = document.getElementById('number') 
let results = document.getElementById('result')

resets.addEventListener('click', function(){
    inputField.value = "";
    results.innerHTML = "<h2>Result</h2>";
});

submits.addEventListener('click', function(){

    results.innerHTML = "<h2>Result</h2>";

    let pnum = parseInt(inputField.value);
    let isPrime = true;

    if (isNaN(pnum) || pnum < 2) {
        results.innerHTML += `<p>Please enter a valid number greater than 1.</p>`;
        return;
    }

    for(let i = 2; i < pnum; i++) {
        if(pnum % i === 0){
            isPrime = false;
            break;            
        }
    }    

    const para = document.createElement('p')
    if (isPrime === true) {
        para.textContent = pnum + ' is a prime number'
    } else {
        para.textContent = pnum + ' is not a prime number'
    }
    results.appendChild(para)
})
