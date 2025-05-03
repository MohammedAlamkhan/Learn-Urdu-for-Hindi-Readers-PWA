document.addEventListener('DOMContentLoaded', () => {
    // --- Data: Urdu Alphabet with Forms, Devanagari Sound, and Examples ---
    const urduAlphabet = [
        // Note: Devanagari transliterations are approximate representations of sound.
        { letter: 'ا', devanagariSound: 'अलिफ़', forms: { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا' }, exampleUrdu: 'انار', exampleDevanagari: 'अनार (Anār - Pomegranate)' },
        { letter: 'ب', devanagariSound: 'बे', forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' }, exampleUrdu: 'بلی', exampleDevanagari: 'बिल्ली (Billī - Cat)' },
        { letter: 'پ', devanagariSound: 'पे', forms: { isolated: 'پ', initial: 'پـ', medial: 'ـپـ', final: 'ـپ' }, exampleUrdu: 'پانی', exampleDevanagari: 'पानी (Pānī - Water)' },
        { letter: 'ت', devanagariSound: 'ते', forms: { isolated: 'ت', initial: 'तـ', medial: 'ـतـ', final: 'ـत' }, exampleUrdu: 'تارا', exampleDevanagari: 'तारा (Tārā - Star)' },
        { letter: 'ٹ', devanagariSound: 'टे', forms: { isolated: 'ٹ', initial: 'टـ', medial: 'ـटـ', final: 'ـट' }, exampleUrdu: 'ٹوپی', exampleDevanagari: 'टोपी (Ṭopī - Hat/Cap)' },
        { letter: 'ث', devanagariSound: 'से', forms: { isolated: 'ث', initial: 'सـ', medial: 'ـसـ', final: 'ـस' }, exampleUrdu: 'ثمر', exampleDevanagari: 'समर (Samar - Fruit/Result)' },
        { letter: 'ج', devanagariSound: 'जीम', forms: { isolated: 'ج', initial: 'जـ', medial: 'ـजـ', final: 'ـज' }, exampleUrdu: 'جہاز', exampleDevanagari: 'जहाज़ (Jahāz - Ship/Plane)' },
        { letter: 'چ', devanagariSound: 'चे', forms: { isolated: 'چ', initial: 'चـ', medial: 'ـचـ', final: 'ـच' }, exampleUrdu: 'چاند', exampleDevanagari: 'चाँद (Chānd - Moon)' },
        { letter: 'ح', devanagariSound: 'हे (बड़ी)', forms: { isolated: 'ح', initial: 'हـ', medial: 'ـहـ', final: 'ـह' }, exampleUrdu: 'حلوا', exampleDevanagari: 'हलवा (Halvā - Sweet dish)' },
        { letter: 'خ', devanagariSound: 'ख़े', forms: { isolated: 'خ', initial: 'ख़ـ', medial: 'ـख़ـ', final: 'ـख़' }, exampleUrdu: 'خرگوش', exampleDevanagari: 'ख़रगोश (Khargosh - Rabbit)' },
        { letter: 'د', devanagariSound: 'दाल', forms: { isolated: 'د', initial: 'द', medial: 'ـद', final: 'ـद' }, exampleUrdu: 'دروازہ', exampleDevanagari: 'दरवाज़ा (Darvāzā - Door)' },
        { letter: 'ڈ', devanagariSound: 'डाल', forms: { isolated: 'ड', initial: 'ड', medial: 'ـड', final: 'ـड' }, exampleUrdu: 'ڈر', exampleDevanagari: 'डर (Ḍar - Fear)' },
        { letter: 'ذ', devanagariSound: 'ज़ाल', forms: { isolated: 'ذ', initial: 'ज़', medial: 'ـज़', final: 'ـज़' }, exampleUrdu: 'ذرہ', exampleDevanagari: 'ज़र्रा (Zarrā - Particle)' },
        { letter: 'ر', devanagariSound: 'रे', forms: { isolated: 'ر', initial: 'र', medial: 'ـर', final: 'ـर' }, exampleUrdu: 'ریل', exampleDevanagari: 'रेल (Rel - Train)' },
        { letter: 'ڑ', devanagariSound: 'ड़े', forms: { isolated: 'ड़', initial: 'ड़', medial: 'ـड़', final: 'ـड़' }, exampleUrdu: 'پہاڑ', exampleDevanagari: 'पहाड़ (Pahāṛ - Mountain)' },
        { letter: 'ز', devanagariSound: 'ज़े', forms: { isolated: 'ज़', initial: 'ज़', medial: 'ـज़', final: 'ـज़' }, exampleUrdu: 'زمین', exampleDevanagari: 'ज़मीन (Zamīn - Land/Earth)' },
        { letter: 'ژ', devanagariSound: 'झे', forms: { isolated: 'झ', initial: 'झ', medial: 'ـझ', final: 'ـझ' }, exampleUrdu: 'ژالہ', exampleDevanagari: 'झाला (Zhālā - Hail)' },
        { letter: 'س', devanagariSound: 'सीन', forms: { isolated: 'स', initial: 'सـ', medial: 'ـसـ', final: 'ـस' }, exampleUrdu: 'سیب', exampleDevanagari: 'सेब (Seb - Apple)' },
        { letter: 'श', devanagariSound: 'शीन', forms: { isolated: 'श', initial: 'शـ', medial: 'ـशـ', final: 'ـश' }, exampleUrdu: 'شیر', exampleDevanagari: 'शेर (Sher - Lion/Tiger)' },
        { letter: 'ص', devanagariSound: 'स्वाद', forms: { isolated: 'ص', initial: 'सـ', medial: 'ـसـ', final: 'ـस' }, exampleUrdu: 'صابن', exampleDevanagari: 'साबुन (Sābun - Soap)' },
        { letter: 'ض', devanagariSound: 'ज़्वाद', forms: { isolated: 'ज़', initial: 'ज़ـ', medial: 'ـज़ـ', final: 'ـज़' }, exampleUrdu: 'ضعیف', exampleDevanagari: 'ज़ईफ़ (Zaīf - Weak/Old)' },
        { letter: 'ط', devanagariSound: 'तोए', forms: { isolated: 'त', initial: 'तـ', medial: 'ـतـ', final: 'ـत' }, exampleUrdu: 'طوطا', exampleDevanagari: 'तोता (Totā - Parrot)' },
        { letter: 'ظ', devanagariSound: 'ज़ोए', forms: { isolated: 'ज़', initial: 'ज़ـ', medial: 'ـज़ـ', final: 'ـज़' }, exampleUrdu: 'ظالم', exampleDevanagari: 'ज़ालिम (Zālim - Cruel)' },
        { letter: 'ع', devanagariSound: 'ऐन', forms: { isolated: 'अ', initial: 'अـ', medial: 'ـअـ', final: 'ـअ' }, exampleUrdu: 'عینک', exampleDevanagari: 'ऐनक (Ainak - Spectacles)' },
        { letter: 'غ', devanagariSound: 'ग़ैन', forms: { isolated: 'ग़', initial: 'ग़ـ', medial: 'ـग़ـ', final: 'ـग़' }, exampleUrdu: 'غبارہ', exampleDevanagari: 'ग़ुब्बारा (Ghubbārā - Balloon)' },
        { letter: 'ف', devanagariSound: 'फ़े', forms: { isolated: 'फ', initial: 'फـ', medial: 'ـफـ', final: 'ـफ' }, exampleUrdu: 'فلم', exampleDevanagari: 'फ़िल्म (Film - Film)' },
        { letter: 'ق', devanagariSound: 'क़ाफ़', forms: { isolated: 'क़', initial: 'क़ـ', medial: 'ـक़ـ', final: 'ـक़' }, exampleUrdu: 'قلم', exampleDevanagari: 'क़लम (Qalam - Pen)' },
        { letter: 'ک', devanagariSound: 'काफ़', forms: { isolated: 'क', initial: 'कـ', medial: 'ـकـ', final: 'ـक' }, exampleUrdu: 'کتاب', exampleDevanagari: 'किताब (Kitāb - Book)' },
        { letter: 'گ', devanagariSound: 'गाफ़', forms: { isolated: 'ग', initial: 'गـ', medial: 'ـगـ', final: 'ـग' }, exampleUrdu: 'گائے', exampleDevanagari: 'गाये (Gāye - Cow)' },
        { letter: 'ل', devanagariSound: 'लाम', forms: { isolated: 'ल', initial: 'लـ', medial: 'ـलـ', final: 'ـल' }, exampleUrdu: 'لڈو', exampleDevanagari: 'लड्डू (Laḍḍū - Sweet ball)' },
        { letter: 'म', devanagariSound: 'मीम', forms: { isolated: 'म', initial: 'मـ', medial: 'ـमـ', final: 'ـम' }, exampleUrdu: 'مچھلی', exampleDevanagari: 'मछली (Machhlī - Fish)' },
        { letter: 'न', devanagariSound: 'नून', forms: { isolated: 'न', initial: 'नـ', medial: 'ـनـ', final: 'ـन' }, exampleUrdu: 'ناک', exampleDevanagari: 'नाक (Nāk - Nose)' },
        { letter: 'ں', devanagariSound: 'नून ग़ुन्ना', forms: { isolated: 'ँ', initial: '', medial: 'ـनـ', final: 'ـँ' }, exampleUrdu: 'ماں', exampleDevanagari: 'माँ (Mā̃ - Mother)' },
        { letter: 'व', devanagariSound: 'वाव', forms: { isolated: 'व', initial: 'व', medial: 'ـव', final: 'ـव' }, exampleUrdu: 'وقت', exampleDevanagari: 'वक़्त (Waqt - Time)' },
        { letter: 'ह', devanagariSound: 'हे (छोटी)', forms: { isolated: 'ह', initial: 'हـ', medial: 'ـहـ', final: 'ـह' }, exampleUrdu: 'ہاتھی', exampleDevanagari: 'हाथी (Hāthī - Elephant)' },
        { letter: 'ھ', devanagariSound: 'हे (दो चश्मी)', forms: { isolated: 'ह', initial: 'हـ', medial: 'ـहـ', final: 'ـह' }, exampleUrdu: 'بھارت', exampleDevanagari: 'भारत (Bhārat - India)' }, // Used in combinations - forms are approximations
        { letter: 'ء', devanagariSound: 'हमज़ा', forms: { isolated: 'अ', initial: '', medial: 'अ', final: 'अ' }, exampleUrdu: 'شے', exampleDevanagari: 'शै (Shai - Thing/Object)' }, // Forms are approximations
        { letter: 'य', devanagariSound: 'ये (छोटी)', forms: { isolated: 'य', initial: 'यـ', medial: 'ـयـ', final: 'ـय' }, exampleUrdu: 'یاد', exampleDevanagari: 'याद (Yād - Memory)' },
        { letter: 'ये', devanagariSound: 'ये (बड़ी)', forms: { isolated: 'ए', initial: '', medial: '', final: 'ـए' }, exampleUrdu: 'پیسے', exampleDevanagari: 'पैसे (Paise - Money)' } // Forms are approximations
    ];


    // --- DOM Elements ---
    const isolatedFormEl = document.getElementById('isolated-form');
    const initialFormEl = document.getElementById('initial-form');
    const medialFormEl = document.getElementById('medial-form');
    const finalFormEl = document.getElementById('final-form');
    const devanagariSoundEl = document.getElementById('devanagari-sound');
    const revealBtn = document.getElementById('reveal-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const counterEl = document.getElementById('counter');
    // === New DOM Element References ===
    const exampleUrduEl = document.getElementById('example-urdu');
    const exampleDevanagariEl = document.getElementById('example-devanagari');
    // === END New DOM Element References ===


    // --- State ---
    let currentIndex = 0;
    let contentVisible = false; // Renamed from soundVisible to reflect hiding examples too

    // --- Functions ---
    function displayLetter(index) {
        const currentLetter = urduAlphabet[index];

        isolatedFormEl.textContent = currentLetter.forms.isolated || '';
        initialFormEl.textContent = currentLetter.forms.initial || '';
        medialFormEl.textContent = currentLetter.forms.medial || '';
        finalFormEl.textContent = currentLetter.forms.final || '';
        devanagariSoundEl.textContent = currentLetter.devanagariSound;

        // === Update Example Words ===
        exampleUrduEl.textContent = currentLetter.exampleUrdu || '';
        exampleDevanagariEl.textContent = currentLetter.exampleDevanagari || '';
        // === END Update Example Words ===


        // Hide sound and examples initially
        devanagariSoundEl.classList.add('hidden');
        exampleUrduEl.classList.add('hidden'); // Hide Urdu example
        exampleDevanagariEl.classList.add('hidden'); // Hide Devanagari example

        contentVisible = false; // Reset state
        revealBtn.textContent = 'Reveal Details'; // Updated button text

        // Update counter
        counterEl.textContent = `${index + 1} / ${urduAlphabet.length}`;
    }

    function showNextLetter() {
        currentIndex = (currentIndex + 1) % urduAlphabet.length; // Wrap around
        displayLetter(currentIndex);
    }

    function showPrevLetter() {
        currentIndex = (currentIndex - 1 + urduAlphabet.length) % urduAlphabet.length; // Wrap around
        displayLetter(currentIndex);
    }

    function toggleContent() { // Renamed from toggleSound
        contentVisible = !contentVisible;
        if (contentVisible) {
            devanagariSoundEl.classList.remove('hidden');
            exampleUrduEl.classList.remove('hidden'); // Show Urdu example
            exampleDevanagariEl.classList.remove('hidden'); // Show Devanagari example
            revealBtn.textContent = 'Hide Details'; // Updated button text
        } else {
            devanagariSoundEl.classList.add('hidden');
             exampleUrduEl.classList.add('hidden'); // Hide Urdu example
            exampleDevanagariEl.classList.add('hidden'); // Hide Devanagari example
            revealBtn.textContent = 'Reveal Details'; // Updated button text
        }
    }

    // --- Event Listeners ---
    nextBtn.addEventListener('click', showNextLetter);
    prevBtn.addEventListener('click', showPrevLetter);
    revealBtn.addEventListener('click', toggleContent); // Call the new function

    // --- Initial Display ---
    displayLetter(currentIndex);
});