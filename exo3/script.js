"use strict";

// Fonction B : prend un paramètre (float) et retourne un boolean (Slide 45 - Les Fonctions)
function B(note) {
    // Condition If/Else (Slide 42 - Les Conditions)
    if (note >= 10.0) {
        return true;
    } else {
        return false;
    }
}

// Fonction A : Appelle la fonction B
function A() {
    // Tableau (Slide 38 - Les Tableaux)
    let students = [
        [1000, "JOHN", "DOE", 14.0, 5],
        [2000, "BOB", "CARLTON", 7.0, 1],
        [3000, "RAYNE", "SMITH", 13.0, 3]
    ];

    // Boucle for (Slide 44 - Les Boucles)
    for (let i = 0; i < students.length; i++) {
        let id = students[i][0];
        let note = students[i][3]; // Index 3 contient la note
        
        // Appel de la fonction B (Slide 45)
        let estAdmis = B(note);

        // Affichage (Slide 33)
        if (estAdmis) {
            console.log(id + ": ADMIS");
        } else {
            console.log(id + ": AJOURNÉ");
        }
    }
}