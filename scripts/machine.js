function getEelemValueByinput(id) {
  return document.getElementById(id).value
}

function showOnly(id, btnID) {
  document.getElementById('payment-history').classList.add('hidden')
  document.getElementById('add-money').classList.add('hidden')
  document.getElementById('cashout').classList.add('hidden')
  document.getElementById('transfer-money').classList.add('hidden')
  document.getElementById('get-bonus').classList.add('hidden')
  document.getElementById('pay-bill').classList.add('hidden')
  document.getElementById('transiction').classList.add('hidden')

  document.getElementById(id).classList.remove('hidden')

//BTNbg  
  document.getElementById('btn').classList.remove('active')
  document.getElementById('btn2').classList.remove('active')
  document.getElementById('btn3').classList.remove('active')
  document.getElementById('btn4').classList.remove('active')
  document.getElementById('btn5').classList.remove('active')
  document.getElementById('btn6').classList.remove('active')

  document.getElementById(btnID).classList.add('active')
}

function logOut() {
  window.location.replace('index.html');
  alert('Logged out succesfully');
}