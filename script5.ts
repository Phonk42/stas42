const ADD = document.querySelector('.add') as HTMLButtonElement
const RESET = document.querySelector('.reset') as HTMLButtonElement
const CENZOR = document.querySelector('.cenzor') as HTMLButtonElement
const WORD = document.querySelector('.word-here') as HTMLInputElement
const TEXT = document.querySelector('.text-here') as HTMLInputElement
const ADD_TEXT = document.querySelector('.add-text') as HTMLParagraphElement

ADD.addEventListener('click', () => {
    ADD_TEXT.innerHTML += ' ' + WORD.value;
    // console.log('add work!');
})

RESET.addEventListener('click', () => {
    let wordToRemove = WORD.value;
    let originalText = ADD_TEXT.innerHTML;
    let updatedText = originalText.replace(new RegExp(wordToRemove, "g"), "");
    ADD_TEXT.innerHTML = updatedText;
    // console.log('reset work!');
})

CENZOR.addEventListener('click', () => {
    let bannedWords = ADD_TEXT.innerHTML.split(' ');
    let text = TEXT.value;
    // console.log(bannedWords)
    // console.log(text)
    for (let i = 0; i < bannedWords.length; i++) {
        // console.log(bannedWords[i].length)
        let star = '*'.repeat(bannedWords[i].length);
        text = text.replace(new RegExp(bannedWords[i], 'g'), star);
    }

    TEXT.value = text;
});

