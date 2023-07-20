const ADD = document.querySelector('.add');
const RESET = document.querySelector('.reset');
const CENZOR = document.querySelector('.cenzor');
const WORD = document.querySelector('.word-here');
const TEXT = document.querySelector('.text-here');
const ADD_TEXT = document.querySelector('.add-text');
ADD.addEventListener('click', () => {
    ADD_TEXT.innerHTML += ' ' + WORD.value;
});
RESET.addEventListener('click', () => {
    let wordToRemove = WORD.value;
    let originalText = ADD_TEXT.innerHTML;
    let updatedText = originalText.replace(new RegExp(wordToRemove, "g"), "");
    ADD_TEXT.innerHTML = updatedText;
});
CENZOR.addEventListener('click', () => {
    let bannedWords = ADD_TEXT.innerHTML.split(' ');
    let text = TEXT.value;
    for (let i = 0; i < bannedWords.length; i++) {
        let star = '*'.repeat(bannedWords[i].length);
        text = text.replace(new RegExp(bannedWords[i], 'g'), star);
    }
    TEXT.value = text;
});
