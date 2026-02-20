function getEelemValueByinput(id) {
  return document.getElementById(id).value
}

function showOnly(id) {
  document.getElementById('payment-history').classList.add('hidden')
  document.getElementById('add-money').classList.add('hidden')
  document.getElementById('cashout').classList.add('hidden')
  document.getElementById('transfer-money').classList.add('hidden')
  document.getElementById('get-bonus').classList.add('hidden')
  document.getElementById('pay-bill').classList.add('hidden')
  document.getElementById('transiction').classList.add('hidden')

  document.getElementById(id).classList.remove('hidden')
}

function logOut() {
  window.location.replace('index.html');
  alert('Logged out succesfully');
}