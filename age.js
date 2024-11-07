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





























