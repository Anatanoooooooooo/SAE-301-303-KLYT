const RCSVF = './SAE-301-303-KLYT/fichier/csv/donnee.csv'; // Remplacez par le chemin de votre fichier CSV

d3.dsv(";", RCSVF).then(data => {

    const GroupementDonnees = {};
    console.log(data);

    // Préparer les options uniques pour les filtres
    const projets = new Set();
    const methodes = new Set();
    const familles = new Set();
    const filieres = new Set();

    data.forEach(row => {
        const projet = row['Nom du projet '];
        const satisfaction = row['Niveau de satisfaction de l\'utilisation de la méthode'];
        const methode = row['Nom méthode '];
        const famille = row['Famille méthode de contrôle biologique'];
        const filiere = row['Filière'];

        projets.add(projet);
        methodes.add(methode);
        familles.add(famille);
        filieres.add(filiere);

        if (!GroupementDonnees[projet]) {
            GroupementDonnees[projet] = {
                bon: 0,
                mitige: 0,
                insatisfaisant: 0,
                aucunAvis: 0,
                methodes: new Set(),
                familles: new Set(),
                filieres: new Set(),
            };
        }

        // Incrémenter le niveau de satisfaction
        switch (satisfaction.toLowerCase()) {
            case 'bon':
                GroupementDonnees[projet].bon += 1;
                break;
            case 'mitigé':
                GroupementDonnees[projet].mitige += 1;
                break;
            case 'insatisfaisant':
                GroupementDonnees[projet].insatisfaisant += 1;
                break;
            case 'aucun avis émis':
                GroupementDonnees[projet].aucunAvis += 1;
                break;
        }

        GroupementDonnees[projet].methodes.add(methode);
        GroupementDonnees[projet].familles.add(famille);
        GroupementDonnees[projet].filieres.add(filiere);
    });

    console.log("Données regroupées : ", GroupementDonnees);

    // Ajouter les options aux filtres
    ajouterOptions('#FiltreProjets', projets);
    ajouterOptions('#FiltreMethodes', methodes);
    ajouterOptions('#FiltreFamilles', familles);
    ajouterOptions('#FiltreFilieres', filieres);

    // Ajouter des écouteurs d'événements pour les filtres
    const filtreProjets = document.getElementById('FiltreProjets');
    const filtreMethodes = document.getElementById('FiltreMethodes');
    const filtreFamilles = document.getElementById('FiltreFamilles');
    const filtreFilieres = document.getElementById('FiltreFilieres');

    filtreProjets.addEventListener('change', appliquerFiltres);
    filtreMethodes.addEventListener('change', appliquerFiltres);
    filtreFamilles.addEventListener('change', appliquerFiltres);
    filtreFilieres.addEventListener('change', appliquerFiltres);

    // Fonction pour appliquer les filtres et mettre à jour les graphiques
    function appliquerFiltres() {
        const projetFiltre = filtreProjets.value;
        const methodeFiltre = filtreMethodes.value;
        const familleFiltre = filtreFamilles.value;
        const filiereFiltre = filtreFilieres.value;

        // Filtrer les données
        const donneesFiltrees = data.filter(row => {
            return (
                (projetFiltre === '' || row['Nom du projet '] === projetFiltre) &&
                (methodeFiltre === '' || row['Nom méthode '] === methodeFiltre) &&
                (familleFiltre === '' || row['Famille méthode de contrôle biologique'] === familleFiltre) &&
                (filiereFiltre === '' || row['Filière'] === filiereFiltre)
            );
        });

        console.log("Données filtrées :", donneesFiltrees);

        // Recalculer les pourcentages pour les données filtrées
        const pourcentages = calculerPourcentages(donneesFiltrees);

        // Mettre à jour les graphiques
        afficherGraphique(pourcentages);
        afficherGraphiquePie(pourcentages);
        afficherGraphiqueRadar(pourcentages);
    }

    // Fonction pour calculer les pourcentages
    function calculerPourcentages(donnees) {
        const regroupement = {};

        donnees.forEach(row => {
            const projet = row['Nom du projet '];
            const satisfaction = row['Niveau de satisfaction de l\'utilisation de la méthode'];

            if (!regroupement[projet]) {
                regroupement[projet] = {
                    bon: 0,
                    mitige: 0,
                    insatisfaisant: 0,
                    aucunAvis: 0
                };
            }

            switch (satisfaction.toLowerCase()) {
                case 'bon':
                    regroupement[projet].bon += 1;
                    break;
                case 'mitigé':
                    regroupement[projet].mitige += 1;
                    break;
                case 'insatisfaisant':
                    regroupement[projet].insatisfaisant += 1;
                    break;
                case 'aucun avis émis':
                    regroupement[projet].aucunAvis += 1;
                    break;
            }
        });

        const pourcentages = {};
        Object.keys(regroupement).forEach(projet => {
            const totalAvis = regroupement[projet].bon + regroupement[projet].mitige + regroupement[projet].insatisfaisant + regroupement[projet].aucunAvis;
            pourcentages[projet] = {
                bon: (regroupement[projet].bon / totalAvis * 100).toFixed(2) + '%',
                mitige: (regroupement[projet].mitige / totalAvis * 100).toFixed(2) + '%',
                insatisfaisant: (regroupement[projet].insatisfaisant / totalAvis * 100).toFixed(2) + '%',
                aucunAvis: (regroupement[projet].aucunAvis / totalAvis * 100).toFixed(2) + '%'
            };
        });

        return pourcentages;
    }

    // Fonction pour ajouter les options dans les listes déroulantes
    function ajouterOptions(selector, valeurs) {
        const select = document.querySelector(selector);
        valeurs.forEach(valeur => {
            const option = document.createElement('option');
            option.value = valeur;
            option.textContent = valeur;
            select.appendChild(option);
        });
    }

    // Calcul initial des pourcentages et affichage des graphiques
    const pourcentages = calculerPourcentages(data);
    afficherGraphique(pourcentages);
    afficherGraphiquePie(pourcentages);
    afficherGraphiqueRadar(pourcentages);

}).catch(error => {
    console.error("Error loading CSV data:", error);
});
