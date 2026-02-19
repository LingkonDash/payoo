const btn = document.getElementById('login-btn');

btn.addEventListener('click', () => {
  const number = getEelemValueByinput('mobile-num');
  const pin = getEelemValueByinput('login-pin');
  
  if (number.length !== 11) {
    alert('Number must contain 11 digits')
    return;
  }
  if (pin.length !== 4) { alert('Please insert 4 digit pin'); return}
  if (pin !== '1234') { alert(`Wrong Pin! Right pin is 1234 🙂`); return }
  window.location.assign('home.html');
})