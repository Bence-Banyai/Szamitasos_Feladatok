(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");

      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "click",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

function check(input) {
  if (isNaN(input.value) || input.value <= 0) {
    input.setCustomValidity("Hiba!");
  } else {
    input.setCustomValidity("");
  }
}

function haromszogSzamitas() {
  var a = parseFloat(document.getElementById("haromszogA").value);
  var b = parseFloat(document.getElementById("haromszogB").value);
  var c = parseFloat(document.getElementById("haromszogC").value);
  var t;
  var k;

  if (a < b + c && b < a + c && c < a + b) {
    t = Math.sqrt(
      ((a + b + c) / 2) *
        ((a + b + c) / 2 - a) *
        ((a + b + c) / 2 - b) *
        ((a + b + c) / 2 - c)
    );

    k = a + b + c;

    document.getElementById("haromszogKerulet").innerHTML =
      "Kerület: " + k.toFixed(2) + " mm";
    document.getElementById("haromszogTerulet").innerHTML =
      "Terület: " + t.toFixed(2) + " mm<sup>2</sup>";
  } else {
    document.getElementById("haromszogKerulet").innerHTML =
      "Nem szerkeszthető!";
    document.getElementById("haromszogTerulet").innerHTML =
      "Nem szerkeszthető!";
  }
}

function korSzamitas() {
  var r = parseFloat(document.getElementById("korSugar").value);
  var t;
  var k;

  if (r > 0) {
    t = (r ^ 2) * Math.PI;
    k = Math.PI * 2 * r;

    document.getElementById("korKerulet").innerHTML =
      "Kerület: " + k.toFixed(2) + " mm";
    document.getElementById("korTerulet").innerHTML =
      "Terület: " + t.toFixed(2) + " mm<sup>2</sup>";
  } else {
    document.getElementById("korKerulet").innerHTML = "Hibás adat!";
    document.getElementById("korTerulet").innerHTML = "Hibás adat!";
  }
}

function kupSzamitas() {
  var r = parseFloat(document.getElementById("kupSugar").value);
  var m = parseFloat(document.getElementById("kupMagassag").value);

  var A;
  var V;

  if (r > 0 && m > 0) {
    A = (r ^ 2) * Math.PI + r * Math.PI * Math.sqrt((r ^ 2) + (m ^ 2));
    V = ((r ^ 2) * Math.PI * m) / 3;

    document.getElementById("kupFelszin").innerHTML =
      "Felszín: " + A.toFixed(2) + " mm<sup>2</sup>";
    document.getElementById("kupTerfogat").innerHTML =
      "Térfogat: " + V.toFixed(2) + " mm<sup>3</sup>";
  } else {
    document.getElementById("kupFelszin").innerHTML = "Hibás adat!";
    document.getElementById("kupTerfogat").innerHTML = "Hibás adat!";
  }
}

function gombSzamitas() {
  var r = parseFloat(document.getElementById("gombSugar").value);
  var A;
  var V;

  if (r > 0) {
    A = (r ^ 2) * 4 * Math.PI;
    V = (Math.PI * 4 * (r ^ 3)) / 3;

    document.getElementById("gombFelszin").innerHTML =
      "Felszín: " + A.toFixed(2) + " mm<sup>2</sup>";
    document.getElementById("gombTerfogat").innerHTML =
      "Térfogat: " + V.toFixed(2) + " mm<sup>3</sup>";
  } else {
    document.getElementById("gombFelszin").innerHTML = "Hibás adat!";
    document.getElementById("gombTerfogat").innerHTML = "Hibás adat!";
  }
}
