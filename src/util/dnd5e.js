const fetch = require ('node-fetch');

const baseUrl = 'https://www.dnd5eapi.co';

const Dnd5e = {
    async searchSpells(term){
        var url = baseUrl + '/api/spells?name=';
        term = term.replaceAll(' ', '+');
        url += term;
        const response = await fetch(url);
        const json = await response.json();
        return json;
    },

    async retrieveSpell(spell){
        if (spell){
            var url = baseUrl + spell.url;
            const response = await fetch(url);
            const json = await response.json();
            return json;
        }

    }


}

export default Dnd5e;