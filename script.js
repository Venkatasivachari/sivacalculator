const buttons = document.querySelectorAll('.val');
const input = document.getElementById('value');
const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

// Append value to input on button click
buttons.forEach(button => {
    button.addEventListener('click', () => {
        input.value += button.textContent;
    });
});

// Evaluate the expression
equal.addEventListener('click', () => {
    try {
        input.value = eval(input.value);
    } catch (e) {
        input.value = "Error";
    }
});

// Clear input
clear.addEventListener('click', () => {
    input.value = '';
});




  VANTA.WAVES({
    el: "body",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x0055ff
  });

