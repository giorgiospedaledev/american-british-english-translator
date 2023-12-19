const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

    test('Translate Mangoes are my favorite fruit. to British English', (done) => {
        let translator = new Translator();
        let text = "Mangoes are my favorite fruit.";
        let locale = "american-to-british";
        let translation = "Mangoes are my <span class=\"highlight\">favourite</span> fruit.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Translate I ate yogurt for breakfast. to British English', (done) => {
        let translator = new Translator();
        let text = "I ate yogurt for breakfast.";
        let locale = "american-to-british";
        let translation = "I ate <span class=\"highlight\">yoghurt</span> for breakfast.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test("Translate We had a party at my friend's condo. to British English", (done) => {
        let translator = new Translator();
        let text = "We had a party at my friend's condo.";
        let locale = "american-to-british";
        let translation = "We had a party at my friend's <span class=\"highlight\">flat</span>.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Translate Can you toss this in the trashcan for me? to British English', (done) => {
        let translator = new Translator();
        let text = "Can you toss this in the trashcan for me?";
        let locale = "american-to-british";
        let translation = "Can you toss this in the <span class=\"highlight\">bin</span> for me?";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('The parking lot was full. to British English', (done) => {
        let translator = new Translator();
        let text = "The parking lot was full.";
        let locale = "american-to-british";
        let translation = "The <span class=\"highlight\">car park</span> was full.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Like a high tech Rube Goldberg machine. to British English', (done) => {
        let translator = new Translator();
        let text = "Like a high tech Rube Goldberg machine.";
        let locale = "american-to-british";
        let translation = "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('To play hooky means to skip class or work. to British English', (done) => {
        let translator = new Translator();
        let text = "To play hooky means to skip class or work.";
        let locale = "american-to-british";
        let translation = "To <span class=\"highlight\">bunk off</span> means to skip class or work.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('No Mr. Bond, I expect you to die. to British English', (done) => {
        let translator = new Translator();
        let text = "No Mr. Bond, I expect you to die.";
        let locale = "american-to-british";
        let translation = "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Dr. Grosh will see you now. to British English', (done) => {
        let translator = new Translator();
        let text = "Dr. Grosh will see you now.";
        let locale = "american-to-british";
        let translation = "<span class=\"highlight\">Dr</span> Grosh will see you now.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Lunch is at 12:15 today. to British English', (done) => {
        let translator = new Translator();
        let text = "Lunch is at 12:15 today.";
        let locale = "american-to-british";
        let translation = "Lunch is at <span class=\"highlight\">12.15</span> today.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });
    
    test('We watched the footie match for a while. to American English', (done) => {
        let translator = new Translator();
        let text = "We watched the footie match for a while.";
        let locale = "british-to-american";
        let translation = "We watched the <span class=\"highlight\">soccer</span> match for a while.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Paracetamol takes up to an hour to work. to American English', (done) => {
        let translator = new Translator();
        let text = "Paracetamol takes up to an hour to work.";
        let locale = "british-to-american";
        let translation = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('First, caramelise the onions. to American English', (done) => {
        let translator = new Translator();
        let text = "First, caramelise the onions.";
        let locale = "british-to-american";
        let translation = "First, <span class=\"highlight\">caramelize</span> the onions.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('I spent the bank holiday at the funfair. to American English', (done) => {
        let translator = new Translator();
        let text = "I spent the bank holiday at the funfair.";
        let locale = "british-to-american";
        let translation = "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('I had a bicky then went to the chippy. to American English', (done) => {
        let translator = new Translator();
        let text = "I had a bicky then went to the chippy.";
        let locale = "british-to-american";
        let translation = "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('I\'ve just got bits and bobs in my bum bag. to American English', (done) => {
        let translator = new Translator();
        let text = "I've just got bits and bobs in my bum bag.";
        let locale = "british-to-american";
        let translation = "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('The car boot sale at Boxted Airfield was called off. to American English', (done) => {
        let translator = new Translator();
        let text = "The car boot sale at Boxted Airfield was called off.";
        let locale = "british-to-american";
        let translation = "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Have you met Mrs Kalyani? to American English', (done) => {
        let translator = new Translator();
        let text = "Have you met Mrs Kalyani?";
        let locale = "british-to-american";
        let translation = "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Prof Joyner of King\'s College, London. to American English', (done) => {
        let translator = new Translator();
        let text = "Prof Joyner of King's College, London.";
        let locale = "british-to-american";
        let translation = "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Tea time is usually around 4 or 4.30. to American English', (done) => {
        let translator = new Translator();
        let text = "Tea time is usually around 4 or 4.30.";
        let locale = "british-to-american";
        let translation = "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Mangoes are my favorite fruit. to British English', (done) => {
        let translator = new Translator();
        let text = "Mangoes are my favorite fruit.";
        let locale = "american-to-british";
        let translation = "Mangoes are my <span class=\"highlight\">favourite</span> fruit.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('I ate yogurt for breakfast. to British English', (done) => {
        let translator = new Translator();
        let text = "I ate yogurt for breakfast.";
        let locale = "american-to-british";
        let translation = "I ate <span class=\"highlight\">yoghurt</span> for breakfast.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('We watched the footie match for a while. to American English', (done) => {
        let translator = new Translator();
        let text = "We watched the footie match for a while.";
        let locale = "british-to-american";
        let translation = "We watched the <span class=\"highlight\">soccer</span> match for a while.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    test('Paracetamol takes up to an hour to work. to American English', (done) => {
        let translator = new Translator();
        let text = "Paracetamol takes up to an hour to work.";
        let locale = "british-to-american";
        let translation = "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.";
        assert.equal(translator.translate(text, locale), translation);
        done();
    });

    

});
