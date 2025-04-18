export default function typingEffect(el: HTMLElement) {
    const phrases = ["Full Stack Developer", "College Student", "Software Developer"]
    let current_phrase_index = 0;
    let current_letter_index = 0;

    function typeLetter() {
        const phrase = phrases[current_phrase_index];

        if (current_letter_index < phrase.length) { // if current letter index is less than current phrase length
            el.textContent += phrase[current_letter_index]; // then add the corresponding element for current index
            current_letter_index ++;

            setTimeout(typeLetter, 100); // typing speed essentially    
        } else {
            setTimeout(() => {
                deleteLetter(phrase) // delete phrase after entire phrase is typed
            }, 100);
        }
    };

    function deleteLetter(phrase: string) {
        if (current_letter_index >= 0) {
            el.textContent = phrase.substring(0, current_letter_index);
            current_letter_index --; // iterate through phrase in reverse and return substring to el.textContent

            setTimeout(() => {
                deleteLetter(phrase) // re run
            }, 50);
        } else {
            current_phrase_index = (current_phrase_index + 1) % phrases.length; // move onto next phrase when phrase complete
            current_letter_index = 0;

            setTimeout(typeLetter, 50); // type next phrase when current phrase deleted
        };
    };

    typeLetter();
};