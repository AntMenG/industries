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
        let _industry = 0;
        for(let i = 0; i < 51; i++, _industry++) {
            _industry == this.industries.length ? _industry = 0 : undefined;
            this.startups.push({
                name: `startup-${i + 1}`,
                industry: this.industries[_industry]
            });
        }
        console.log('Investors');
        console.table(this.investors);
        console.log('Startups');
        console.table(this.startups);
        console.log('Resultado');
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