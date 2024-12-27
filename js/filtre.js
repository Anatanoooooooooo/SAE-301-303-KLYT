// Filtrer les données

function Filtre() {

d3.dsv(";", RCSVF).then(data => {
    // Initialiser les filtres
    data.forEach(row => {
        const projet = row['Nom du projet '];
        const methode = row['Nom méthode '];
        const famille = row['Famille méthode de contrôle biologique'];
        const filiere = row['Filière'];

console.log('Projets :',projet, 'Methodes :',methode, 'Familles :',famille, 'Filieres :',filiere);

        const filtreProjets = document.getElementById('FiltreProjets');
        const filtreMethodes = document.getElementById('FiltreMethodes');
        const filtreFamilles = document.getElementById('FiltreFamilles');
        const filtreFilieres = document.getElementById('FiltreFilieres');

        projet.forEach(projet => {
        const choix = document.createElement('option');
        choix.value = projet;
        choix.text = projet;
        filtreProjets.add(choix);
    });

    methodes.forEach(methode => {
        const choix = document.createElement('option');
        choix.value = methode;
        choix.text = methode;
        filtreMethodes.add(choix);
    });

    familles.forEach(famille => {
        const choix = document.createElement('option');
        choix.value = famille;
        choix.text = famille;
        filtreFamilles.add(choix);
    });

    filieres.forEach(filiere => {
        const choix = document.createElement('option');
        choix.value = filiere;
        choix.text = filiere;
        filtreFilieres.add(choix);
    });
 });
}).catch(error => {
    console.error("Error loading CSV data:", error);
});
}