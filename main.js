function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    var count = 0;
    for(i = 0; i < y; i++) {
        count += add(x, 0)
    }
    return count;
}

function power(x, n) {
    return x**n;
}

function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    
    for (var i = num - 1; i >= 1; i--) {
      num = num * i;
      
    }
    return num;
  }

  function fibonacci(n) {
    var a = 1;
    var b = 0;
    var c = null;
    while (n-1 > 0) {
      c = a;
      a = add(b,a);
      b = c;
      n--;
    }
    return b;
  }

var h1 = document.createElement("h3");
h1.textContent = "Add Function: ";
document.body.appendChild(h1);
var q1 = document.createElement("p");
q1.textContent = add(2,4);
document.body.appendChild(q1);

var h2 = document.createElement("h3");
h2.textContent = "Multiply Function: ";
document.body.appendChild(h2);
var q2 = document.createElement("p");
q2.textContent = multiply(6,8);
document.body.appendChild(q2);

var h3 = document.createElement("h3");
h3.textContent = "Power Function: ";
document.body.appendChild(h3);
var q3 = document.createElement("p");
q3.textContent = power(2,8);
document.body.appendChild(q3);

var h4 = document.createElement("h3");
h4.textContent = "Factorial Function: ";
document.body.appendChild(h4);
var q4 = document.createElement("p");
q4.textContent = factorial(4);
document.body.appendChild(q4);

var h5 = document.createElement("h3");
h5.textContent = "Fibionacci Function: ";
document.body.appendChild(h5);
var q5 = document.createElement("p");
q5.textContent = fibonacci(8);
document.body.appendChild(q5);