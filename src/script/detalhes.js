const investments = [
    { name: 'Bitcoin', price: 200000, valorization: 5, invested: 100000, gain: 100 },
    { name: 'Ethereum', price: 12000, valorization: 10, invested: 8000, gain: 50 },
    { name: 'Litecoin', price: 500, valorization: -2, invested: 1000, gain: -10 }
];

function displayInvestments(investments) {
    const tableBody = document.getElementById('crypto-details');
    investments.forEach(crypto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${crypto.name}</td>
            <td>${crypto.price.toFixed(2)}</td>
            <td>${crypto.valorization}%</td>
            <td>${crypto.invested.toFixed(2)}</td>
            <td>${crypto.gain}%</td>
        `;
        tableBody.appendChild(row);
    });
}

displayInvestments(investments);
ents);