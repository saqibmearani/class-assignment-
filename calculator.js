 let display = document.getElementById("display");

    function key(value) {
        display.value += value;
    }

    function clear() {
        display.value = "";
    }

    function backspace() {
        display.value = display.value.slice(0, -1);
    }

    function Sign() {
        if (display.value) {
            display.value = "-" + display.value;
        }
    }

    function calculate() {
        var input = document.getElementById("display");
  
    if (!input.value) {
      input.value = "syntax error";
    } else {
      input.value = eval(input.value);
    }
  }