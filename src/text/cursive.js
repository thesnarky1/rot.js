/**
 * @namespace
 * Contains routines for dealing with cursive scripts
 */
ROT.Text.Cursive = {
    /*Positions for characters in array*/
    NICE_FORM: 0,    //The original unicode letter
    INITIAL_FORM: 1, //The way it should appear at the start of a word
    MEDIAL_FORM: 2,  //The way it should appear in between other characters
    FINAL_FORM: 3,   //The way it should appear at the end of a word
    ISOLATED_FORM: 4,//The way it should appear on its own
    CONNECTING: 5,   //Whether or not this connects to the next letter

    /*Character array holding translations*/
    CURSIVE_CHARACTERS: {},

    /*Turns Cursive support on or off*/
    IN_USE: false,

    /**
     * Adds a character translation into the CURSIVE_CHARACTERS array
     * @param {int} unicode The unicode character code to identify for translation in a string
     * @param {int} initialForm The unicode character code to for the proper initial form of this character
     * @param {int} medialForm The unicode character code to for the proper medial form of this character
     * @param {int} finalForm The unicode character code to for the proper final form of this character
     * @param {int} isolatedForm The unicode character code to for the proper isolated form of this character
     */
    //addCursiveCharacter: function(unicode, initialForm, medialForm, finalForm, isolatedForm) {
    addCursiveCharacter: function(unicode, forms) {

        if(!ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode]) {
            ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode] = [];
            if(forms['initial'] === undefined) {
                throw new Error("Character can't be added without initial form");
            }
            ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(forms['initial']);

            if(forms['medial'] === undefined) {
                throw new Error("Character can't be added without medial form");
            }
            ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(forms['medial']);

            if(forms['final'] !== undefined) {
              ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(forms['final']);
            } else {
              ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(forms['medial']);
            }

            if(forms['isolated'] !== undefined) {
              ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(forms['isolated']);
            } else {
              ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(forms['initial']);
            }

            if(forms['connected'] !== undefined) {
              ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(forms['connected']);
            } else {
              ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode].push(true);
            }
        } else {
          throw new Error("Unicode character " + unicode + " already found in table");
        }
    },

    /**
     * Removes a character translation from the CURSIVE_CHARACTERS array
     * @param {int} unicode The unicode character code to remove
     */
    removeCursiveCharacter: function(unicode) {
        if(ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode] !== undefined) {
          delete ROT.Text.Cursive.CURSIVE_CHARACTERS[unicode];
        } else {
          throw new Error("Unicode character " + unicode + " not found in table to remove");
        }
    },

    /**
     * Replaces characters in a particular string
     * @param {String} toReplace The string to parse and replace
     */
    replaceCursiveCharacters: function(toReplace) {
        if(ROT.Text.Cursive.CURSIVE_CHARACTERS !== {}) {
          alert("Have characters to replace!!");
        }
    }
}
