// Etape 1: fonction decoupeChaine

function decoupeChaine(chaine) {
    return chaine.replace(/(.)\1*/g, '$& ').trim();
}

// Tests
console.log(decoupeChaine("ab"));        // "a b"
console.log(decoupeChaine("aabbca"));    // "aa bb c a"


//Etape 2: fonction decritChaine
function decritChaine(chaine) {
    return chaine.replace(/(.)\1*/g, match => match.length + match[0]);
}

// Tests
console.log(decritChaine("ab"));         // "1a1b"
console.log(decritChaine("aabbca"));     // "2a2b1c1a"


//Etape 3: fonction suiteConway
function suiteConway(carac, n) {
    let result = [carac];
    for (let i = 1; i < n; i++) {
        result.push(decritChaine(result[i - 1]));
    }
    console.log(result);
    return result;
}

suiteConway('a', 3);
suiteConway('1', 3);

//Etape 4: Affichage de la suite de conway
function afficherSuite(carac, n) {
    const container = document.getElementById('conway-container');
    const suite = suiteConway(carac, n);
    container.innerHTML = ''; // Clear previous content

    suite.forEach((line, index) => {
        const div = document.createElement('div');
        div.textContent = line;
        div.className = 'line';
        div.style.fontSize = `${16 + index * 2}px`; // Increasing font size for pyramid effect
        container.appendChild(div);
    });
}

// Exemple d'affichage
afficherSuite('a', 6);
