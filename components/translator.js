const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(text, locale) {
        if (locale === 'american-to-british') {
            return this.americanToBritish(text);
        } else if (locale === 'british-to-american') {
            return this.britishToAmerican(text);
        }
    }

    highlight(text) {
        return '<span class="highlight">' + text + '</span>'
    }

    americanToBritish(text) {
        let translatedText = text;
        let britishTimeRegex = /[0-2][0-9]\:[0-5][0-9]/g;
        
        
        // Translate titles
        for (let word in americanOnly) {
            let regex = new RegExp(`(?:^|\\s)\\b${word}\\b`, 'gi');
            translatedText = translatedText.replace(regex, " "+ this.highlight(americanOnly[word]));
        }

        // Translate spelling
        for (let word in americanToBritishSpelling) {
            let regex = new RegExp('\\s' + word + '\\b', 'gi');
            translatedText = translatedText.replace(regex," "+  this.highlight(americanToBritishSpelling[word]));
        }

        // Translate titles
        for (let title in americanToBritishTitles) {
            let regex = new RegExp(title, 'gi');

            translatedText = translatedText.replace(regex, this.highlight(americanToBritishTitles[title].charAt(0).toUpperCase() + americanToBritishTitles[title].slice(1)));
        }
        
        // Translate time
        let time = text.match(britishTimeRegex);
        if (time) {
            time.forEach((time) => {
                translatedText = translatedText.replace(time, this.highlight(time.replace(':', '.')));
            });
        }
            
        return translatedText;


    }

    britishToAmerican(text) {
        let britishTimeRegex = /([0-9]|0[0-9]|1[0-9]|2[0-3]).([0-5][0-9])/g;
        let translatedText = text;

        // Translate titles
        for (let word in britishOnly) {
            let regex = new RegExp(`(?:^|\\s)\\b${word}\\b`, 'gi');
            translatedText = translatedText.replace(regex, (match, offset) => {
                // If the match is at the beginning of the string (offset 0), return the highlighted word without a space
                if (offset === 0) {
                    return this.highlight(britishOnly[word]);
                }
                // Otherwise, add a space before the highlighted word
                return ' ' + this.highlight(britishOnly[word]);
            });
        }

        // Translate spelling
        for (let word in americanToBritishSpelling) {
            let regex = new RegExp('\\s' + americanToBritishSpelling[word] + '\\b', 'gi');
            
            translatedText = translatedText.replace(regex, " "+ this.highlight(word));
        }

        // Translate titles
        for (let title in americanToBritishTitles) {
            let regex = new RegExp('\\b' + americanToBritishTitles[title] + '\\b', 'gi');
            translatedText = translatedText.replace(regex, this.highlight(title.charAt(0).toUpperCase() + title.slice(1)));
        }

        // Translate time
        let time = text.match(britishTimeRegex);
        if (time) {
            time.forEach((time) => {
                translatedText = translatedText.replace(time, this.highlight(time.replace('.', ':')));
            });
        }
        

        return translatedText;
    }

}

module.exports = Translator;