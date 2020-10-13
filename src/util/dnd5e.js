const fetch = require ('node-fetch');

const baseUrl = 'https://www.dnd5eapi.co/api/';

const Dnd5e = {
    async searchSpells(term){
        var url = baseUrl + 'spells?name=';
        term = term.replaceAll(' ', '+');
        url += term;
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    }
}

export default Dnd5e;