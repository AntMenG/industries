var match = /** @class */ (function () {
    function match() {
        this.investors = [
            { name: 'Arturo Castañón', industry: 'bio', startups: [] },
            { name: 'Marco Mendoza', industry: 'any', startups: [] },
            { name: 'Ricardo Hernández', industry: 'bio', startups: [] },
            { name: 'Susan Villarreal', industry: 'internet', startups: [] },
            { name: 'Vanessa Salazar', industry: 'environment', startups: [] },
            { name: 'Viviana Candelas', industry: 'bio', startups: [] },
            { name: 'Leinier Álvarez', industry: 'environment', startups: [] },
            { name: 'Pablo Mendoza', industry: 'any', startups: [] },
        ];
        this.startups = [];
        this.industries = ['bio', 'internet', 'environment'];
        var _industry = 0;
        for (var i = 0; i < 51; i++, _industry++) {
            _industry == this.industries.length ? _industry = 0 : undefined;
            this.startups.push({
                name: "startup-" + (i + 1),
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
    match.prototype._match = function () {
        var _this = this;
        var result = [];
        this.investors.forEach(function (investor) {
            var m_startups = [];
            if (investor.industry !== 'any') {
                m_startups = _this.startups.filter(function (startup) { return startup.industry == investor.industry; });
            }
            else {
                m_startups = _this.startups;
            }
            m_startups.length > 10 ? m_startups.length = 10 : undefined;
            investor.startups = m_startups;
            result.push(investor);
        });
        return result;
    };
    return match;
}());
new match();
