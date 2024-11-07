/*
function calculerAnneeNaissance() {
    const age = document.getElementById('ageInput').value;
    const anneeActuelle = new Date().getFullYear();
    
    if (age && age > 0) {
        const anneeNaissance = anneeActuelle - age;
        document.getElementById('resultatAnneeNaissance').innerText = `Votre année de naissance est : ${anneeNaissance}`;
    } else {
        document.getElementById('resultatAnneeNaissance').innerText = "Veuillez entrer un âge valide.";
    }
}

function calculerAge() {
    const dateNaissance = document.getElementById('dateNaissanceInput').value;
    if (dateNaissance) {
        const aujourdHui = new Date();
        const dateN = new Date(dateNaissance);
        let age = aujourdHui.getFullYear() - dateN.getFullYear();
        const mois = aujourdHui.getMonth() - dateN.getMonth();
        if (mois < 0 || (mois === 0 && aujourdHui.getDate() < dateN.getDate())) {
            age--;
        }
        document.getElementById('resultatAge').innerText = `Votre âge est : ${age}`;
    } else {
        document.getElementById('resultatAge').innerText = "Veuillez entrer une date de naissance valide.";
    }
}
    */


function calculerAnneeNaissance() {
    const anneeActuelle = new Date().getFullYear();
    let age = document.getElementById('ageInput').value;
  if (age) {
    if (age > 0) {
      let anneeNaissance = anneeActuelle - age;
      document.getElementById('afficheAnneeNaissance').innerText = "Vous êtes né(e) en :" + anneeNaissance;
    } else {
      document.getElementById('afficheAnneeNaissance').innerText = "Age pas valide";
    }
  }
}

function calculerAge() {
    // Récupère la date de naissance
    let dateNaissance = document.getElementById('dateNaissanceInput').value;

    if (dateNaissance) {
        // Calcul de l'âge
        let aujourdHui = new Date();
        let anneeNaissance = new Date(dateNaissance).getFullYear();
        let age = aujourdHui.getFullYear() - anneeNaissance;

        document.getElementById('resultatAge').innerText = "Votre âge est : " + age + " ans";
    } else {
        document.getElementById('resultatAge').innerText = "Veuillez entrer une date de naissance valide.";
    }
}





























