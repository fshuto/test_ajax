onload = init;
var state;
var result;

function init() {
  $("btnData").onclick = prefDisp;
  $("btnClear").onclick = clearDisp;
  state = $('state');
  result = $('result');
}

function clearDisp() {
  state.innerHTML = "";
  result.innerHTML = "";
}
