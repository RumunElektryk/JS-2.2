
function sprawdzTypDanych(wartosc, oczekiwanyTyp) {
    return typeof wartosc === oczekiwanyTyp;
}

//To jest komentarz żeby mi załapało zmiane xD
function walidujTekst(wartosc) {
    if (wartosc === undefined) return 'Pole nie zostało zainicjalizowane';
    if (wartosc === null || wartosc === '') return 'Pole jest puste';
    if (!sprawdzTypDanych(wartosc, 'string')) return 'Wartość nie jest tekstem';
    return 'OK';
}

function walidujLiczbe(wartosc) {
    if (wartosc === undefined) return 'Pole nie zostało zainicjalizowane';
    if (wartosc === null || wartosc === '') return 'Pole jest puste';
    if (!sprawdzTypDanych(wartosc, 'number')) return 'Wartość nie jest liczbą';
    return 'OK';
}

function walidujBoolean(wartosc) {
    if (wartosc === undefined) return 'Pole nie zostało zainicjalizowane';
    if (!sprawdzTypDanych(wartosc, 'boolean')) return 'Wartość nie jest typu boolean';
    return 'OK';
}


function walidujFormularz(formularz) {
    console.log('--- Walidacja formularza ---');
    console.log('Imię:', walidujTekst(formularz.imie));
    console.log('Nazwisko:', walidujTekst(formularz.nazwisko));
    console.log('Wiadomość:', walidujTekst(formularz.wiadomosc));
    console.log('Wiek:', walidujLiczbe(formularz.wiek));
    console.log('Zgoda na newsletter:', walidujBoolean(formularz.zgodaNaNewsletter));
    console.log('--- Koniec walidacji ---\n');
}


const formularz1 = {
    imie: 'Jan',
    nazwisko: 'Kowalski',
    wiadomosc: 'Witam!',
    wiek: 25,
    zgodaNaNewsletter: true
};

const formularz2 = {
    imie: '',
    nazwisko: 123,
    wiadomosc: undefined,
    wiek: 'trzydzieści',
    zgodaNaNewsletter: 'tak'
};


walidujFormularz(formularz1);
walidujFormularz(formularz2);
``
