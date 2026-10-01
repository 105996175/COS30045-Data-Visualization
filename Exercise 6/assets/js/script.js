const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {
    question.addEventListener("click", function () {
        const answer = question.nextElementSibling;

        answer.classList.toggle("show");
    });
});

const energyForm = document.getElementById("energy-form");

if (energyForm) {
    const powerInput = document.getElementById("power");
    const hoursInput = document.getElementById("hours");
    const priceInput = document.getElementById("price");

    const message = document.getElementById("calculator-message");

    const dailyEnergyOutput = document.getElementById("daily-energy");
    const monthlyEnergyOutput = document.getElementById("monthly-energy");
    const yearlyEnergyOutput = document.getElementById("yearly-energy");
    const monthlyCostOutput = document.getElementById("monthly-cost");
    const yearlyCostOutput = document.getElementById("yearly-cost");

    function calculateEnergy() {
        const power = Number(powerInput.value);
        const hours = Number(hoursInput.value);
        const price = Number(priceInput.value);

        if (
            powerInput.value === "" ||
            hoursInput.value === "" ||
            priceInput.value === ""
        ) {
            message.textContent = "Please complete all fields.";
            clearResults();
            return;
        }

        if (power <= 0 || hours <= 0 || price <= 0) {
            message.textContent = "Please enter values greater than zero.";
            clearResults();
            return;
        }

        if (hours > 24) {
            message.textContent = "Hours of use cannot be more than 24 per day.";
            clearResults();
            return;
        }

        message.textContent = "";

        const dailyEnergy = (power * hours) / 1000;
        const monthlyEnergy = dailyEnergy * 30;
        const yearlyEnergy = dailyEnergy * 365;

        const monthlyCost = monthlyEnergy * (price / 100);
        const yearlyCost = yearlyEnergy * (price / 100);

        dailyEnergyOutput.textContent = dailyEnergy.toFixed(2) + " kWh";
        monthlyEnergyOutput.textContent = monthlyEnergy.toFixed(2) + " kWh";
        yearlyEnergyOutput.textContent = yearlyEnergy.toFixed(2) + " kWh";
        monthlyCostOutput.textContent = "$" + monthlyCost.toFixed(2);
        yearlyCostOutput.textContent = "$" + yearlyCost.toFixed(2);
    }

    function clearResults() {
        dailyEnergyOutput.textContent = "-";
        monthlyEnergyOutput.textContent = "-";
        yearlyEnergyOutput.textContent = "-";
        monthlyCostOutput.textContent = "-";
        yearlyCostOutput.textContent = "-";
    }

    energyForm.addEventListener("submit", function (event) {
        event.preventDefault();
        calculateEnergy();
    });

    powerInput.addEventListener("input", calculateEnergy);
    hoursInput.addEventListener("input", calculateEnergy);
    priceInput.addEventListener("input", calculateEnergy);
}

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}