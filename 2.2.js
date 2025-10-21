const bank = {
    name: "Bank Przykładowy",
    contact: "kontakt@bank.pl"
};

const security = {
    maxLoginAttempts: 3
};

const user = {
    username: "jan",
    password: "1234",
    balance: 3000,
    loginAttempts: 0,
    locked: false
};

let session = {
    loggedIn: false
};

function login(password) {
    if (user.locked) {
        console.log("Konto zablokowane!");
        return;
    }

    if (password === user.password) {
        session.loggedIn = true;
        user.loginAttempts = 0;
        console.log("Zalogowano!");
    } else {
        user.loginAttempts++;
        console.log("Złe hasło!");
        if (user.loginAttempts >= security.maxLoginAttempts) {
            user.locked = true;
            console.log("Konto zablokowane po 3 próbach!");
        }
    }
}

function logout() {
    session.loggedIn = false;
    console.log("Wylogowano.");
}

function transaction(amount) {
    if (!session.loggedIn) {
        console.log("Musisz się zalogować!");
        return;
    }

    if (amount > user.balance) {
        console.log("Brak środków!");
        return;
    }

    user.balance -= amount;
    console.log(`Przelano ${amount}. Nowe saldo: ${user.balance}`);
}

function resetLogin() {
    user.locked = false;
    user.loginAttempts = 0;
    console.log("Konto odblokowane przez support.");
}

// DEMO DZIAŁANIA
console.log("=== DEMO ===");
login("zle");
login("zle");
login("zle");
login("1234");
resetLogin();
login("1234");
transaction(1000);
logout();
console.log("=== KONIEC ===");
//