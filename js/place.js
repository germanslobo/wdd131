// Dynamic footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation on page load
document.addEventListener("DOMContentLoaded", () => {
    // Select elements and parse values from our HTML
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windchill");

    if (tempElement && windElement && windChillElement) {
        const temp = parseFloat(tempElement.textContent);
        const wind = parseFloat(windElement.textContent);

        // Check validation constraints (Metric criteria: Temp <= 10 °C AND Wind > 4.8 km/h)
        if (temp <= 10 && wind > 4.8) {
            const chillFactor = calculateWindChill(temp, wind);
            windChillElement.textContent = `${chillFactor.toFixed(1)} °C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
});

// Single-line formula calculation
function calculateWindChill(temp, wind) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(wind, 0.16)) + (0.3965 * temp * Math.pow(wind, 0.16));
}