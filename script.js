document.addEventListener('DOMContentLoaded', () => {
    // --- Data: Urdu Alphabet with Forms, Devanagari Sound, and Examples ---
    const urduAlphabet = [
        // Note: Devanagari transliterations are approximate representations of sound.
        { letter: 'ا', devanagariSound: 'अलिफ़', forms: { isolated: 'ا', initial: 'ا', medial: 'ـا', final: 'ـا' }, exampleUrdu: 'انار', exampleDevanagari: 'अनार (Anār - Pomegranate)' },
        { letter: 'ب', devanagariSound: 'बे', forms: { isolated: 'ب', initial: 'بـ', medial: 'ـبـ', final: 'ـب' }, exampleUrdu: 'بلی', exampleDevanagari: 'बिल्ली (Billī - Cat)' },
        { letter: 'پ', devanagariSound: 'पे', forms: { isolated: 'پ', initial: 'پـ', medial: 'ـپـ', final: 'ـپ' }, exampleUrdu: 'پانی', exampleDevanagari: 'पानी (Pānī - Water)' },
        { letter: 'ت', devanagariSound: 'ते', forms: { isolated: 'ت', initial: 'تـ', medial: 'ـتـ', final: 'ـت' }, exampleUrdu: 'تارا', exampleDevanagari: 'तारा (Tārā - Star)' },
        { letter: 'ٹ', devanagariSound: 'टे', forms: { isolated: 'ٹ', initial: 'ٹـ', medial: 'ـٹـ', final: 'ـٹ' }, exampleUrdu: 'ٹوپی', exampleDevanagari: 'टोपी (Ṭopī - Hat/Cap)' },
        { letter: 'ث', devanagariSound: 'से', forms: { isolated: 'ث', initial: 'ثـ', medial: 'ـثـ', final: 'ـث' }, exampleUrdu: 'ثمر', exampleDevanagari: 'समर (Samar - Fruit/Result)' },
        { letter: 'ج', devanagariSound: 'जीम', forms: { isolated: 'ج', initial: 'جـ', medial: 'ـجـ', final: 'ـج' }, exampleUrdu: 'جہاز', exampleDevanagari: 'जहाज़ (Jahāz - Ship/Plane)' },
        { letter: 'چ', devanagariSound: 'चे', forms: { isolated: 'چ', initial: 'چـ', medial: 'ـچـ', final: 'ـچ' }, exampleUrdu: 'چاند', exampleDevanagari: 'चाँद (Chānd - Moon)' },
        { letter: 'ح', devanagariSound: 'हे (बड़ी)', forms: { isolated: 'ح', initial: 'حـ', medial: 'ـحـ', final: 'ـح' }, exampleUrdu: 'حلوا', exampleDevanagari: 'हलवा (Halvā - Sweet dish)' },
        { letter: 'خ', devanagariSound: 'ख़े', forms: { isolated: 'خ', initial: 'خـ', medial: 'ـخـ', final: 'ـخ' }, exampleUrdu: 'خرگوش', exampleDevanagari: 'ख़रगोश (Khargosh - Rabbit)' },
        { letter: 'د', devanagariSound: 'दाल', forms: { isolated: 'د', initial: 'د', medial: 'ـد', final: 'ـد' }, exampleUrdu: 'دروازہ', exampleDevanagari: 'दरवाज़ा (Darvāzā - Door)' },
        { letter: 'ڈ', devanagariSound: 'डाल', forms: { isolated: 'ڈ', initial: 'ڈ', medial: 'ـڈ', final: 'ـڈ' }, exampleUrdu: 'ڈر', exampleDevanagari: 'डर (Ḍar - Fear)' },
        { letter: 'ذ', devanagariSound: 'ज़ाल', forms: { isolated: 'ذ', initial: 'ذ', medial: 'ـذ', final: 'ـذ' }, exampleUrdu: 'ذرہ', exampleDevanagari: 'ज़र्रा (Zarrā - Particle)' },
        { letter: 'ر', devanagariSound: 'रे', forms: { isolated: 'ر', initial: 'ر', medial: 'ـر', final: 'ـر' }, exampleUrdu: 'ریل', exampleDevanagari: 'रेल (Rel - Train)' },
        { letter: 'ڑ', devanagariSound: 'ड़े', forms: { isolated: 'ڑ', initial: 'ڑ', medial: 'ـڑ', final: 'ـڑ' }, exampleUrdu: 'پہاڑ', exampleDevanagari: 'पहाड़ (Pahāṛ - Mountain)' },
        { letter: 'ز', devanagariSound: 'ज़े', forms: { isolated: 'ز', initial: 'ز', medial: 'ـز', final: 'ـز' }, exampleUrdu: 'زمین', exampleDevanagari: 'ज़मीन (Zamīn - Land/Earth)' },
        { letter: 'ژ', devanagariSound: 'झे', forms: { isolated: 'ژ', initial: 'ژ', medial: 'ـژ', final: 'ـژ' }, exampleUrdu: 'ژالہ', exampleDevanagari: 'झाला (Zhālā - Hail)' },
        { letter: 'س', devanagariSound: 'सीन', forms: { isolated: 'س', initial: 'سـ', medial: 'ـسـ', final: 'ـس' }, exampleUrdu: 'سیب', exampleDevanagari: 'सेब (Seb - Apple)' },
        { letter: 'ش', devanagariSound: 'शीन', forms: { isolated: 'ش', initial: 'شـ', medial: 'ـشـ', final: 'ـش' }, exampleUrdu: 'شیر', exampleDevanagari: 'शेर (Sher - Lion/Tiger)' },
        { letter: 'ص', devanagariSound: 'स्वाद', forms: { isolated: 'ص', initial: 'صـ', medial: 'ـصـ', final: 'ـص' }, exampleUrdu: 'صابن', exampleDevanagari: 'साबुन (Sābun - Soap)' },
        { letter: 'ض', devanagariSound: 'ज़्वाद', forms: { isolated: 'ض', initial: 'ضـ', medial: 'ـضـ', final: 'ـض' }, exampleUrdu: 'ضعیف', exampleDevanagari: 'ज़ईफ़ (Zaīf - Weak/Old)' },
        { letter: 'ط', devanagariSound: 'तोए', forms: { isolated: 'ط', initial: 'طـ', medial: 'ـطـ', final: 'ـط' }, exampleUrdu: 'طوطا', exampleDevanagari: 'तोता (Totā - Parrot)' },
        { letter: 'ظ', devanagariSound: 'ज़ोए', forms: { isolated: 'ظ', initial: 'ظـ', medial: 'ـظـ', final: 'ـظ' }, exampleUrdu: 'ظالم', exampleDevanagari: 'ज़ालिम (Zālim - Cruel)' },
        { letter: 'ع', devanagariSound: 'ऐन', forms: { isolated: 'ع', initial: 'عـ', medial: 'ـعـ', final: 'ـع' }, exampleUrdu: 'عینک', exampleDevanagari: 'ऐनक (Ainak - Spectacles)' },
        { letter: 'غ', devanagariSound: 'ग़ैन', forms: { isolated: 'غ', initial: 'غـ', medial: 'ـغـ', final: 'ـغ' }, exampleUrdu: 'غبارہ', exampleDevanagari: 'ग़ुब्बारा (Ghubbārā - Balloon)' },
        { letter: 'ف', devanagariSound: 'फ़े', forms: { isolated: 'ف', initial: 'فـ', medial: 'ـفـ', final: 'ـف' }, exampleUrdu: 'فلم', exampleDevanagari: 'फ़िल्म (Film - Film)' },
        { letter: 'ق', devanagariSound: 'क़ाफ़', forms: { isolated: 'ق', initial: 'قـ', medial: 'ـقـ', final: 'ـق' }, exampleUrdu: 'قلم', exampleDevanagari: 'क़लम (Qalam - Pen)' },
        { letter: 'ک', devanagariSound: 'काफ़', forms: { isolated: 'ک', initial: 'کـ', medial: 'ـکـ', final: 'ـک' }, exampleUrdu: 'کتاب', exampleDevanagari: 'किताब (Kitāb - Book)' },
        { letter: 'گ', devanagariSound: 'गाफ़', forms: { isolated: 'گ', initial: 'گـ', medial: 'ـگـ', final: 'ـگ' }, exampleUrdu: 'گائے', exampleDevanagari: 'गाये (Gāye - Cow)' },
        { letter: 'ل', devanagariSound: 'लाम', forms: { isolated: 'ل', initial: 'لـ', medial: 'ـلـ', final: 'ـل' }, exampleUrdu: 'لڈو', exampleDevanagari: 'लड्डू (Laḍḍū - Sweet ball)' },
        { letter: 'م', devanagariSound: 'मीम', forms: { isolated: 'م', initial: 'مـ', medial: 'ـمـ', final: 'ـم' }, exampleUrdu: 'مچھلی', exampleDevanagari: 'मछली (Machhlī - Fish)' },
        { letter: 'ن', devanagariSound: 'नून', forms: { isolated: 'ن', initial: 'نـ', medial: 'ـنـ', final: 'ـن' }, exampleUrdu: 'ناک', exampleDevanagari: 'नाक (Nāk - Nose)' },
        { letter: 'ں', devanagariSound: 'नून ग़ुन्ना', forms: { isolated: 'ں', initial: '', medial: 'ـنـ', final: 'ـں' }, exampleUrdu: 'ماں', exampleDevanagari: 'माँ (Mā̃ - Mother)' },
        { letter: 'و', devanagariSound: 'वाव', forms: { isolated: 'و', initial: 'و', medial: 'ـو', final: 'ـو' }, exampleUrdu: 'وقت', exampleDevanagari: 'वक़्त (Waqt - Time)' },
        { letter: 'ہ', devanagariSound: 'हे (छोटी)', forms: { isolated: 'ہ', initial: 'ہـ', medial: 'ـہـ', final: 'ـہ' }, exampleUrdu: 'ہاتھی', exampleDevanagari: 'हाथी (Hāthī - Elephant)' },
        { letter: 'ھ', devanagariSound: 'हे (दो चश्मी)', forms: { isolated: 'ھ', initial: 'ھـ', medial: 'ـھـ', final: 'ـھ' }, exampleUrdu: 'بھارت', exampleDevanagari: 'भारत (Bhārat - India)' }, // Used in combinations
        { letter: 'ء', devanagariSound: 'हमज़ा', forms: { isolated: 'ء', initial: '', medial: 'ء', final: 'ء' }, exampleUrdu: 'شے', exampleDevanagari: 'शै (Shai - Thing/Object)' },
        { letter: 'ی', devanagariSound: 'ये (छोटी)', forms: { isolated: 'ی', initial: 'یـ', medial: 'ـیـ', final: 'ـی' }, exampleUrdu: 'یاد', exampleDevanagari: 'याद (Yād - Memory)' },
        { letter: 'ے', devanagariSound: 'ये (बड़ी)', forms: { isolated: 'ے', initial: '', medial: '', final: 'ـے' }, exampleUrdu: 'پیسے', exampleDevanagari: 'पैसे (Paise - Money)' }
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