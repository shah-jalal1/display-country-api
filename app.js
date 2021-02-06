fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displaycCountries(data));

const displaycCountries = countries =>{
    const contriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);

        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
        `;

        countryDiv.innerHTML = countryInfo;
        contriesDiv.appendChild(countryDiv);

        // li.innerHTML = country.name;
        // ul.appendChild(li);
        
    }
}