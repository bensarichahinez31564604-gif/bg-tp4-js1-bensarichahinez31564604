"use strict";

// Tableau simple (Slide 38 - Les Tableaux)
function f1() {
    let etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];
    // Boucle for (Slide 44 - Les Boucles)
    for (let i = 0; i < etudiants.length; i++) {
        console.log(etudiants[i]);
    }
}

// Objet (Slide 39 - Les Objets)
function f2() {
    let etudiant = {
        nom: 'John',
        prenom: 'DOE',
        age: 30
    };
    console.log(etudiant);
}

// Tableau d'objets (Slide 40 - Tableau d'Objets)
function f3() {
    let etudiants = [
        { nom: 'nom1', prenom: 'prenom1', age: 21 },
        { nom: 'nom2', prenom: 'prenom2', age: 22 },
        { nom: 'nom3', prenom: 'prenom3', age: 23 }
    ];
    
    // Méthode forEach (Slide 44)
    etudiants.forEach(function(etudiant) {
        console.log(etudiant.nom + "-" + etudiant.prenom + "-" + etudiant.age);
    });
}