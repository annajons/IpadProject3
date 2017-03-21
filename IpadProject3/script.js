var switchpage = function(pFrom, to) {
  document.getElementById(pFrom).style.display = 'none';
  document.getElementById(to).style.display = 'block';
};

var modal = function(modal, x) {
  if (x === 0) {
    document.getElementById('shadow').style.display = 'block';
    document.getElementById(modal).style.display = 'block';
  }
  else {
    document.getElementById('shadow').style.display = 'none';
    document.getElementById(modal).style.display = 'none';
  }
}
