const bitcoinRate

function convertToBitcoin() {
    const amount = document.getElementById('amount').value;
    const bitcoinAmount = (amount / bitcoinRate).toFixed(8);
    document.getElementById('result').innerText = `Você receberá ${bitcoinAmount} BTC`;
}