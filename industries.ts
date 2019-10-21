const csv = require('csvtojson');
const csvFilePath='./startups.csv';

interface STARTUP {
    name: string;
    industry: string;
}
interface INVESTOR {
    name: string;
    industry: string;
    startups: STARTUP[];
}

class match {
    investors: INVESTOR[] = [
        { name: 'Arturo Castañón', industry: 'bio', startups: [] },
        { name: 'Marco Mendoza', industry: 'any', startups: [] },
        { name: 'Ricardo Hernández', industry: 'bio', startups: [] },
        { name: 'Susan Villarreal', industry: 'internet', startups: [] },
        { name: 'Vanessa Salazar', industry: 'environment', startups: [] },
        { name: 'Viviana Candelas', industry: 'bio', startups: [] },
        { name: 'Leinier Álvarez', industry: 'environment', startups: [] },
        { name: 'Pablo Mendoza', industry: 'any', startups: [] },
    ];
    startups: STARTUP[] = [];
    industries = ['bio','internet','environment'];

    constructor () {
        console.log('Investors');
        console.table(this.investors);
        console.log('Resultado');
        this.setStartups();
    }
    
    async setStartups() {
        this.startups = await csv().fromFile(csvFilePath);
        console.log('Startups');
        console.table(this.startups);
        console.table(this._match());
    }

    _match() {
        const result = [];
        this.investors.forEach(investor => {
            let m_startups = [];
            if (investor.industry !== 'any') {
                m_startups = this.startups.filter(startup => startup.industry == investor.industry);
            } else {
                m_startups = this.startups;
            }
            m_startups.length > 10 ? m_startups.length = 10 : undefined;
            investor.startups = m_startups;
            result.push(investor);
        });
        return result;
    }
}

new match();