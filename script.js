alert('Hit ok please');

var mac_button = document.getElementById('mac-button');
var pasta_button = document.getElementById('pasta-button');
var taco_button = document.getElementById('taco-button');
var ench_button = document.getElementById('ench-button');
var mac_up = document.getElementById('mac-up');
var pasta_up = document.getElementById('pasta-up');
var taco_up = document.getElementById('taco-up');
var ench_up = document.getElementById('ench-up');
var order_button = document.getElementById('order-button');
var clear_button = document.getElementById('clear-button');

mac_button.addEventListener('click', mac_func);
pasta_button.addEventListener('click', pasta_func);
taco_button.addEventListener('click', taco_func);
ench_button.addEventListener('click', ench_func);
mac_up.addEventListener('click', mac_up_func);
pasta_up.addEventListener('click', pasta_up_func);
taco_up.addEventListener('click', taco_up_func);
ench_up.addEventListener('click', ench_up_func);


order_button.addEventListener('click', order_func);
clear_button.addEventListener('click', clear_func);

function mac_func() {
  alert('mac_button clicked!');
}

function pasta_func() {
  alert('pasta_button clicked!');
}

function taco_func() {
  alert('taco_button clicked!');
}

function ench_func() {
  alert('ench_button clicked!');
}

function mac_up_func() {
  alert('mac_button clicked!');
}

function pasta_up_func() {
  alert('pasta_button clicked!');
}

function taco_up_func() {
  alert('taco_button clicked!');
}

function ench_up_func() {
  alert('ench_button clicked!');
}

function order_func() {
  alert('order_button clicked!');
}

function clear_func() {
  alert('clear_button clicked!');
}
