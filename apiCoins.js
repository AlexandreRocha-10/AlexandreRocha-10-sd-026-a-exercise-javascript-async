const fetchCoins = async () => {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets');
        const obj = await response.json();
        const { data } = obj;
        return data.slice(0, 10);
    } catch (error) {
        console.log('Error', error);
    }
};

const setCoins = async () => {
    const coins = await fetchCoins();
    const coinsList = document.getElementById('coins-list');
    coinsList.innerHTML = '';
    coins.forEach((coin) => {
      const li = document.createElement('li');
      li.innerText = `${coin.name} (${coin.symbol}): ${Number(coin.priceUsd).toFixed(2)}`;
      coinsList.appendChild(li);
    });
};

window.onload = async () => {
    await setCoins();
};
