const transictions = document.getElementById('transictions');


// Add money
document.getElementById('add-money-btn').addEventListener('click', () => {

  const bankName = getEelemValueByinput('addMoney-bank');
  if(bankName === 'select-bank') {alert('Plese select a Bank Name'); return}
  
  const accNum = getEelemValueByinput('add-money-acc-num')
  if ( isNaN(accNum) || accNum.length !== 11) {alert('Please enter a 11 digit acc number'); return;}
  
  const moneyAmount = Number(getEelemValueByinput('add-money-ammount'));
  if (isNaN(moneyAmount) || moneyAmount === 0) { alert('Provide a valid Amount') ; return}
  
  const pin = getEelemValueByinput('add-money-pin')
  if(pin !== '1234') { alert('Invalid Pin'); return }
  
  const curentBalance = Number(document.getElementById('ballance').innerText);

  document.getElementById('ballance').innerText = curentBalance + moneyAmount;
  alert('Add money Succesfull')

  const newTransiction = document.createElement('div')
  newTransiction.innerHTML = `
        <div class="flex justify-center items-center gap-4">
          <img src="assets/opt-1.png" alt="optoin one">
            <div>
              <h2 class="font-semibold text-primary-text opacity-90"> Bank Deposit </h2>
              <p class="text-primary-text opacity-80"> Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()} </p>
            </div>
        </div>
        <img class="cursor-pointer" src="assets/three-dot-icon.png" alt="Three dot icon">
    `
  newTransiction.classList.add("flex", "justify-between", "items-center", "p-4", "bg-white", "rounded-2xl", "border", "border-gray-200")
  transictions.appendChild(newTransiction);
})

// Cashout
document.getElementById('cashout-btn').addEventListener('click', () => {
  
  const accNum = getEelemValueByinput('cashout-agent-num')
  if ( isNaN(accNum) || accNum.length !== 11) {alert('Please enter a 11 digit Agent Acc number'); return;}
  
  const moneyAmount = Number(getEelemValueByinput('cashout-ammount'));
  if (isNaN(moneyAmount) || moneyAmount === 0) { alert('Provide a valid Amount') ; return}
  
  const pin = getEelemValueByinput('cashout-pin')
  if(pin !== '1234') { alert('Invalid Pin'); return }
  
  const curentBalance = Number(document.getElementById('ballance').innerText);

  if(curentBalance - moneyAmount < 0) {alert('Insufficient Ballance'); return}

  document.getElementById('ballance').innerText = curentBalance - moneyAmount;
  alert('Cashout Succesfull')
  
  const newTransiction = document.createElement('div')
  newTransiction.innerHTML = `
        <div class="flex justify-center items-center gap-4">
          <img src="assets/opt-2.png" alt="optoin one">
            <div>
              <h2 class="font-semibold text-primary-text opacity-90"> Cashout </h2>
              <p class="text-primary-text opacity-80"> Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()} </p>
            </div>
        </div>
        <img class="cursor-pointer" src="assets/three-dot-icon.png" alt="Three dot icon">
    `
  newTransiction.classList.add("flex", "justify-between", "items-center", "p-4", "bg-white", "rounded-2xl", "border", "border-gray-200")
  transictions.appendChild(newTransiction);
})

// Money Transfer
document.getElementById('transfer-btn').addEventListener('click', () => {
  
  const accNum = getEelemValueByinput('transfer-acc-num')
  if ( isNaN(accNum) || accNum.length !== 11) {alert('Please enter a 11 digit Agent Acc number'); return;}
  
  const moneyAmount = Number(getEelemValueByinput('transfer-ammount'));
  if (isNaN(moneyAmount) || moneyAmount === 0) { alert('Provide a valid Amount') ; return}
  
  const pin = getEelemValueByinput('transfer-pin')
  if(pin !== '1234') { alert('Invalid Pin'); return }
  
  const curentBalance = Number(document.getElementById('ballance').innerText);

  if(curentBalance - moneyAmount < 0) {alert('Insufficient Ballance'); return}

  document.getElementById('ballance').innerText = curentBalance - moneyAmount;
  alert('Money Transfer Succesfull')
  
  const newTransiction = document.createElement('div')
  newTransiction.innerHTML = `
        <div class="flex justify-center items-center gap-4">
          <img src="assets/opt-3.png" alt="optoin one">
            <div>
              <h2 class="font-semibold text-primary-text opacity-90"> Money Transfer </h2>
              <p class="text-primary-text opacity-80"> Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()} </p>
            </div>
        </div>
        <img class="cursor-pointer" src="assets/three-dot-icon.png" alt="Three dot icon">
    `
  newTransiction.classList.add("flex", "justify-between", "items-center", "p-4", "bg-white", "rounded-2xl", "border", "border-gray-200")
  transictions.appendChild(newTransiction);
})

//Get bonus
document.getElementById('bonus-btn').addEventListener('click', () => {
  
  const accNum = getEelemValueByinput('cupon-code')
  if ( accNum !== 'Make me Rich Daddy!') {alert("wrong Coupon, Write 'Make me Rich Daddy!' to get bonus"); return;}

  document.getElementById('ballance').innerText = '999999999999999999';
  alert('Thanks for giving me pleasure, Your reward has been added to your account, ENJOY!!')

  const newTransiction = document.createElement('div')
  newTransiction.innerHTML = `
        <div class="flex justify-center items-center gap-4">
          <img src="assets/opt-4.png" alt="optoin one">
            <div>
              <h2 class="font-semibold text-primary-text opacity-90"> Love from Daddy 😘 </h2>
              <p class="text-primary-text opacity-80"> Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()} </p>
            </div>
        </div>
        <img class="cursor-pointer" src="assets/three-dot-icon.png" alt="Three dot icon">
    `
  newTransiction.classList.add("flex", "justify-between", "items-center", "p-4", "bg-white", "rounded-2xl", "border", "border-gray-200")
  transictions.appendChild(newTransiction);
});

// Pay bill
document.getElementById('pay-btn').addEventListener('click', () => {

  const bankName = getEelemValueByinput('bill-bank');
  if(bankName === 'select-bank') {alert('Plese select a Bank Name'); return}
  
  const accNum = getEelemValueByinput('biller-acc-num')
  if ( isNaN(accNum) || accNum.length !== 11) {alert('Please enter a 11 digit acc number'); return;}
  
  const moneyAmount = Number(getEelemValueByinput('bill-ammount'));
  if (isNaN(moneyAmount) || moneyAmount === 0) { alert('Provide a valid Amount') ; return}
  
  const pin = getEelemValueByinput('bil-pin')
  if(pin !== '1234') { alert('Invalid Pin'); return }
  
  const curentBalance = Number(document.getElementById('ballance').innerText);

  if(curentBalance - moneyAmount < 0) {alert('Insufficient Ballance'); return}

  document.getElementById('ballance').innerText = curentBalance - moneyAmount;
  alert('Payment Succesfull')

  const newTransiction = document.createElement('div')
  newTransiction.innerHTML = `
        <div class="flex justify-center items-center gap-4">
          <img src="assets/opt-5.png" alt="optoin one">
            <div>
              <h2 class="font-semibold text-primary-text opacity-90"> Bill Payment </h2>
              <p class="text-primary-text opacity-80"> Date: ${new Date().toDateString()} ${new Date().toLocaleTimeString()} </p>
            </div>
        </div>
        <img class="cursor-pointer" src="assets/three-dot-icon.png" alt="Three dot icon">
    `
  newTransiction.classList.add("flex", "justify-between", "items-center", "p-4", "bg-white", "rounded-2xl", "border", "border-gray-200")
  transictions.appendChild(newTransiction);
})
