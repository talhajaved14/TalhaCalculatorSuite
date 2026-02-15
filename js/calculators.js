// --- Dark Mode Toggle ---
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      // Change icon based on mode
      if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️"; // Sun icon for light mode
      } else {
        toggleBtn.textContent = "🌙"; // Moon icon for dark mode
      }
    });
  }
});

// --- Finance ---
// EMI Calculator
function calcEMI() {
  let P = document.getElementById("loanAmount").value;
  let R = document.getElementById("interestRate").value / 100 / 12;
  let N = document.getElementById("loanYears").value * 12;

  if (P && R && N) {
    let emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    document.getElementById("emiResult").innerText = emi.toFixed(2);
  } else {
    document.getElementById("emiResult").innerText = "Please enter valid loan details.";
  }
}

// --- Physics ---
// Force Calculator
function calcForce() {
  let m = document.getElementById("mass").value;        // Mass in kg
  let a = document.getElementById("acceleration").value; // Acceleration in m/s²

  if (m && a) {
    let force = m * a;
    document.getElementById("forceResult").innerText = force.toFixed(2) + " N";
  } else {
    document.getElementById("forceResult").innerText = "Please enter valid inputs.";
  }
}

// Pressure Calculator
function calcPressure() {
  let F = document.getElementById("force").value; // Force in Newton
  let A = document.getElementById("area").value;  // Area in m²

  if (F && A) {
    let pressure = F / A;
    document.getElementById("pressureResult").innerText = pressure.toFixed(2) + " Pascal";
  } else {
    document.getElementById("pressureResult").innerText = "Please enter valid inputs.";
  }
}

