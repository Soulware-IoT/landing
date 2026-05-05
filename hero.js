export function initHeroDashboard() {
    const tempElement = document.getElementById('ambient-temp');
    const airElement = document.getElementById('air-quality');
    
    // Simulate temperature fluctuations
    setInterval(() => {
        if (!tempElement) return;
        let currentTemp = parseFloat(tempElement.innerText);
        let change = (Math.random() - 0.5) * 0.2; // fluctuate between -0.1 and +0.1
        let newTemp = currentTemp + change;
        
        // Keep within reasonable bounds
        if(newTemp > 25.5) newTemp = 24.8;
        if(newTemp < 23.5) newTemp = 24.2;
        
        tempElement.innerText = newTemp.toFixed(1) + '°C';
    }, 3000);

    // Simulate occasional air quality changes
    setInterval(() => {
        if (!airElement) return;
        let currentAir = parseInt(airElement.innerText);
        if(Math.random() > 0.7) {
            let change = Math.random() > 0.5 ? 1 : -1;
            let newAir = currentAir + change;
            // keep it realistic
            if(newAir > 16) newAir = 15;
            if(newAir < 9) newAir = 10;
            airElement.innerText = newAir + ' ppm';
        }
    }, 5000);
    
    // Add click interaction to the anomaly card
    const anomalyCard = document.getElementById('anomaly-card');
    if (anomalyCard) {
        anomalyCard.addEventListener('click', () => {
            anomalyCard.style.transform = 'scale(0.97)';
            setTimeout(() => {
                anomalyCard.style.transform = '';
                // Just as a simulation
                alert("Incident Review: Redirecting to Grill Station 2 diagnostics...");
            }, 150);
        });
    }
}