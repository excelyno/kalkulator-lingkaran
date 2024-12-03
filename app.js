// Perhitungan Lingkaran Tunggal
document.getElementById("calculate").addEventListener("click", () => {
    const radius = parseFloat(document.getElementById("radius").value);
    const angle = parseFloat(document.getElementById("angle").value);

    if (isNaN(radius) || isNaN(angle) || radius <= 0 || angle <= 0) {
        alert("Please enter valid positive numbers.");
        return;
    }

    const pi = Math.PI;

    // Perhitungan
    const area = pi * Math.pow(radius, 2);
    const circumference = 2 * pi * radius;
    const centralAngle = angle;
    const peripheralAngle = centralAngle / 2;
    const sectorArea = (centralAngle / 360) * area;
    const arcLength = (centralAngle / 360) * circumference;
    const segmentArea = sectorArea - (Math.pow(radius, 2) * Math.sin((centralAngle * pi) / 180)) / 2;

    // Tampilkan hasil
    document.getElementById("area").innerText = `Area: ${area.toFixed(2)}`;
    document.getElementById("circumference").innerText = `Circumference: ${circumference.toFixed(2)}`;
    document.getElementById("centralAngle").innerText = `Central Angle: ${centralAngle}°`;
    document.getElementById("peripheralAngle").innerText = `Peripheral Angle: ${peripheralAngle}°`;
    document.getElementById("sectorArea").innerText = `Sector Area: ${sectorArea.toFixed(2)}`;
    document.getElementById("arcLength").innerText = `Arc Length: ${arcLength.toFixed(2)}`;
    document.getElementById("segmentArea").innerText = `Segment Area: ${segmentArea.toFixed(2)}`;
});

// Perhitungan Garis Persekutuan
document.getElementById("calculateTangents").addEventListener("click", () => {
    const x1 = parseFloat(document.getElementById("x1").value);
    const y1 = parseFloat(document.getElementById("y1").value);
    const r1 = parseFloat(document.getElementById("r1").value);
    const x2 = parseFloat(document.getElementById("x2").value);
    const y2 = parseFloat(document.getElementById("y2").value);
    const r2 = parseFloat(document.getElementById("r2").value);

    if (isNaN(x1) || isNaN(y1) || isNaN(r1) || isNaN(x2) || isNaN(y2) || isNaN(r2) || r1 <= 0 || r2 <= 0) {
        alert("Please enter valid positive numbers for radii and coordinates.");
        return;
    }

    const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    if (d <= Math.abs(r1 - r2) || d < (r1 + r2)) {
        alert("The circles overlap or touch; tangents cannot be calculated.");
        return;
    }

    const outerTangent = Math.sqrt(d * d - Math.pow(r1 + r2, 2));
    const innerTangent = Math.sqrt(d * d - Math.pow(r1 - r2, 2));

    document.getElementById("outerTangent").innerText = `Outer Tangent: ${outerTangent.toFixed(2)}`;
    document.getElementById("innerTangent").innerText = `Inner Tangent: ${innerTangent.toFixed(2)}`;
});
