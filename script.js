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

let subtotal = 0;
var sub_dis = document.getElementById('subtotal');

let mac_ct = 0;
var mac_ct_dis = document.getElementById('mac-ct');
let pasta_ct = 0;
var pasta_ct_dis = document.getElementById('pasta-ct');
let taco_ct = 0;
var taco_ct_dis = document.getElementById('taco-ct');
let ench_ct = 0;
var ench_ct_dis = document.getElementById('ench-ct');

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
  if (mac_ct > 0) {
    mac_ct_dis.textContent = --mac_ct;
    subtotal = Math.max(subtotal - 5, 0);
    sub_dis.textContent = 'Subtotal: $' + subtotal;
  }
}

function pasta_func() {
  if (pasta_ct > 0) {
    pasta_ct_dis.textContent = --pasta_ct;
    subtotal = Math.max(subtotal - 8, 0);
    sub_dis.textContent = 'Subtotal: $' + subtotal;
  }
}

function taco_func() {
  if (taco_ct > 0) {
    taco_ct_dis.textContent = --taco_ct;
    subtotal = Math.max(subtotal - 8, 0);
    sub_dis.textContent = 'Subtotal: $' + subtotal;
  }
}

function ench_func() {
  if (ench_ct > 0) {
    ench_ct_dis.textContent = --ench_ct;
    subtotal = Math.max(subtotal - 10, 0);
    sub_dis.textContent = 'Subtotal: $' + subtotal;
  }
}

function mac_up_func() {
  mac_ct_dis.textContent = ++mac_ct;
  subtotal = subtotal + 5;
  sub_dis.textContent = 'Subtotal: $' + subtotal;
}

function pasta_up_func() {
  pasta_ct_dis.textContent = ++pasta_ct;
  subtotal = subtotal + 8;
  sub_dis.textContent = 'Subtotal: $' + subtotal;
}

function taco_up_func() {
  taco_ct_dis.textContent = ++taco_ct;
  subtotal = subtotal + 8;
  sub_dis.textContent = 'Subtotal: $' + subtotal;
}

function ench_up_func() {
  ench_ct_dis.textContent = ++ench_ct;
  subtotal = subtotal + 10;
  sub_dis.textContent = 'Subtotal: $' + subtotal;
}

function order_func() {
  if (mac_ct + pasta_ct + taco_ct + ench_ct == 0){
    alert('No items in cart');
  } else {
    let output = 'Order placed!\n';
    if (mac_ct > 0) {
      output = output + mac_ct + " Mac & Cheese ";
    }
    if (pasta_ct > 0) {
      output = output + pasta_ct + " Pasta ";
    }
    if (taco_ct > 0) {
      output = output + taco_ct + " Taco ";
    }
    if (ench_ct > 0) {
      output = output + ench_ct + " Enchilada ";
    }
    alert(output);
  }
}

function clear_func() {
  mac_ct = 0;
  mac_ct_dis.textContent = "0";
  pasta_ct = 0;
  pasta_ct_dis.textContent = "0";
  taco_ct = 0;
  taco_ct_dis.textContent = "0";
  ench_ct = 0;
  ench_ct_dis.textContent = "0";
  subtotal = 0;
  sub_dis.textContent = "Subtotal:";
}
