async function fetchData() {
    // const url = 'https://restcountries.com/v3.1/name/Canada';
    const url = 'https://restcountries.com/v3.1/all';
    const options = {
        method: 'GET',
        // headers: {
        // 	'X-RapidAPI-Key': '2c1ce08864mshfbdda8f761d0d41p12f4f7jsn51a91ef7bf1e',
        // 	'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
        // }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log("result: ",result);
        console.log("1st idx in result obj: ", result[0]);
        console.log("1st idx in result name: ", result[0].name.common);
        console.log("2nd idx in result obj: ", result[1]);
        console.log("1st idx in currencies: ", result[0].capital[0]);

        // document.getElementById("content").innerHTML = result.data.map(item => `<li>{item.currencies}<li>`).join('');
        // document.getElementById("content").innerHTML = result[0].capital[0];
        // document.getElementById("content").innerHTML = result.map(item => item.capital); //list all capitals in one 
        // document.getElementById("content").innerHTML = result.map(item => `<li>${item.name.common} ==> ${item.capital}<li>`).join('');
        document.getElementById("content").innerHTML = result.map(item => `<li>${item.name.common} ==> ${item.capital}<li>`).join('');
    } catch (error) {
        console.error(error);
    }
}

fetchData();