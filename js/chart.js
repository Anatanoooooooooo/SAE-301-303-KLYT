// Variables globales pour stocker les instances des graphiques
let graphiqueBar = null;
let graphiquePie = null;
let graphiqueRadar = null;

function afficherGraphique(pourcentages) {
    console.log("Lancement du bar");

    const labels = Object.keys(pourcentages);
    const bonDonnee = labels.map(projet => parseFloat(pourcentages[projet].bon));
    const mitigeDonnee = labels.map(projet => parseFloat(pourcentages[projet].mitige));
    const insatisfaisantDonnee = labels.map(projet => parseFloat(pourcentages[projet].insatisfaisant));
    const aucunAvisDonnee = labels.map(projet => parseFloat(pourcentages[projet].aucunAvis));

    let ctx = document.getElementById("graph2").getContext('2d');

    // Détruire le graphique existant s'il y en a un
    if (graphiqueBar) {
        graphiqueBar.destroy();
    }

    let data1 = {
        labels: labels,
        datasets: [{
            label: "Aucun avis émis",
            data: aucunAvisDonnee,
            backgroundColor: '#9B7EFD',
            borderColor: '#9B7EFD',
            borderWidth: 2
        },
        {
            label: "Insatisfaisant",
            data: insatisfaisantDonnee,
            backgroundColor: '#F36D6A',
            borderColor: '#F36D6A',
            borderWidth: 2
        }, 
        {
            label: "Mitigé",
            data: mitigeDonnee,
            backgroundColor: '#F7D12B',
            borderColor: '#F7D12B',
            borderWidth: 2
        }, 
        {
            label: "Bon",
            data: bonDonnee,
            backgroundColor: '#54A7F7',
            borderColor: '#54A7F7',
            borderWidth: 2
        }]
    };

    graphiqueBar = new Chart(ctx, {
        type: "bar",
        data: data1,
        options: {
            responsive: true,
            animations: {
                colors: {
                    type: 'color',
                    properties: ['borderColor', 'backgroundColor'],
                    from: 'transparent',
                },
                tension: {
                    duration: 2000,
                    easing: 'easeOutBounce',
                    from: 0.5,
                    to: 0,
                    loop: false
                }
            },
            scales: {
                y: {
                    min: 0,
                    max: 100,
                }
            }
        }
    });
}

function afficherGraphiquePie(pourcentages) {
    console.log("Lancement du pie");

    const labeels = Object.keys(pourcentages);
    const bonDonnee = labeels.map(projet => parseFloat(pourcentages[projet].bon));
    const mitigeDonnee = labeels.map(projet => parseFloat(pourcentages[projet].mitige));
    const insatisfaisantDonnee = labeels.map(projet => parseFloat(pourcentages[projet].insatisfaisant));
    const aucunAvisDonnee = labeels.map(projet => parseFloat(pourcentages[projet].aucunAvis));
    

    let ctx = document.getElementById("graph1").getContext('2d');

    // Détruire le graphique existant s'il y en a un
    if (graphiquePie) {
        graphiquePie.destroy();
    }

    console.log("ici les labels : ",labeels);
    console.log(bonDonnee[0]);

    let data1 = {
        labels: ["Bon", "Mitigé", "Insatisfaisant", "Aucun avis émis"],
        datasets: [
            
            {
                label: labeels[0],
                data: [bonDonnee[0],mitigeDonnee[0],insatisfaisantDonnee[0],aucunAvisDonnee[0]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[1],
                data: [bonDonnee[1],mitigeDonnee[1],insatisfaisantDonnee[1],aucunAvisDonnee[1]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[2],
                data: [bonDonnee[2],mitigeDonnee[2],insatisfaisantDonnee[2],aucunAvisDonnee[2]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[3],
                data: [bonDonnee[3],mitigeDonnee[3],insatisfaisantDonnee[3],aucunAvisDonnee[3]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[4],
                data: [bonDonnee[4],mitigeDonnee[4],insatisfaisantDonnee[4],aucunAvisDonnee[4]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[5],
                data: [bonDonnee[5],mitigeDonnee[5],insatisfaisantDonnee[5],aucunAvisDonnee[5]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[6],
                data: [bonDonnee[6],mitigeDonnee[6],insatisfaisantDonnee[6],aucunAvisDonnee[6]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[7],
                data: [bonDonnee[7],mitigeDonnee[7],insatisfaisantDonnee[7],aucunAvisDonnee[7]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[8],
                data: [bonDonnee[8],mitigeDonnee[8],insatisfaisantDonnee[8],aucunAvisDonnee[8]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[9],
                data: [bonDonnee[9],mitigeDonnee[9],insatisfaisantDonnee[9],aucunAvisDonnee[9]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[10],
                data: [bonDonnee[10],mitigeDonnee[10],insatisfaisantDonnee[10],aucunAvisDonnee[10]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[11],
                data: [bonDonnee[11],mitigeDonnee[11],insatisfaisantDonnee[11],aucunAvisDonnee[11]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[12],
                data: [bonDonnee[12],mitigeDonnee[12],insatisfaisantDonnee[12],aucunAvisDonnee[12]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[13],
                data: [bonDonnee[13],mitigeDonnee[13],insatisfaisantDonnee[13],aucunAvisDonnee[13]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[14],
                data: [bonDonnee[14],mitigeDonnee[14],insatisfaisantDonnee[14],aucunAvisDonnee[14]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[15],
                data: [bonDonnee[15],mitigeDonnee[15],insatisfaisantDonnee[15],aucunAvisDonnee[15]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[16],
                data: [bonDonnee[16],mitigeDonnee[16],insatisfaisantDonnee[16],aucunAvisDonnee[16]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[17],
                data: [bonDonnee[17],mitigeDonnee[17],insatisfaisantDonnee[17],aucunAvisDonnee[17]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[18],
                data: [bonDonnee[18],mitigeDonnee[18],insatisfaisantDonnee[18],aucunAvisDonnee[18]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[19],
                data: [bonDonnee[19],mitigeDonnee[19],insatisfaisantDonnee[19],aucunAvisDonnee[19]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[20],
                data: [bonDonnee[20],mitigeDonnee[20],insatisfaisantDonnee[20],aucunAvisDonnee[20]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[21],
                data: [bonDonnee[21],mitigeDonnee[21],insatisfaisantDonnee[21],aucunAvisDonnee[21]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[22],
                data: [bonDonnee[22],mitigeDonnee[22],insatisfaisantDonnee[22],aucunAvisDonnee[22]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[23],
                data: [bonDonnee[23],mitigeDonnee[23],insatisfaisantDonnee[23],aucunAvisDonnee[23]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[24],
                data: [bonDonnee[24],mitigeDonnee[24],insatisfaisantDonnee[24],aucunAvisDonnee[24]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[25],
                data: [bonDonnee[25],mitigeDonnee[25],insatisfaisantDonnee[25],aucunAvisDonnee[25]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[26],
                data: [bonDonnee[26],mitigeDonnee[26],insatisfaisantDonnee[26],aucunAvisDonnee[26]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[27],
                data: [bonDonnee[27],mitigeDonnee[27],insatisfaisantDonnee[27],aucunAvisDonnee[27]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[28],
                data: [bonDonnee[28],mitigeDonnee[28],insatisfaisantDonnee[28],aucunAvisDonnee[28]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[29],
                data: [bonDonnee[29],mitigeDonnee[29],insatisfaisantDonnee[29],aucunAvisDonnee[29]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: labeels[30],
                data: [bonDonnee[30],mitigeDonnee[30],insatisfaisantDonnee[30],aucunAvisDonnee[30]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#6A0B40',
                borderWidth: 1
            },
            {
                label: "Sans nom",
                data: [bonDonnee[31],mitigeDonnee[31],insatisfaisantDonnee[31],aucunAvisDonnee[31]],
                backgroundColor: ['#54A7F7','#F7D12B','#F36D6A','#9B7EFD'],
                borderColor: '#1A0415',
                borderWidth: 1
            },
        ]
    };

    graphiquePie = new Chart(ctx, {
        type: "pie",
        data: data1,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Répartition des avis, en %'
                }
            }
        }
    });
}

function afficherGraphiqueRadar(pourcentages) {
    const labels = Object.keys(pourcentages);
    const bonDonnee = labels.map(projet => parseFloat(pourcentages[projet].bon));
    const mitigeDonnee = labels.map(projet => parseFloat(pourcentages[projet].mitige));
    const insatisfaisantDonnee = labels.map(projet => parseFloat(pourcentages[projet].insatisfaisant));
    const aucunAvisDonnee = labels.map(projet => parseFloat(pourcentages[projet].aucunAvis));

    let ctx = document.getElementById("graph3").getContext('2d');

    // Détruire le graphique existant s'il y en a un
    if (graphiqueRadar) {
        graphiqueRadar.destroy();
    }

    let data1 = {
        labels: labels,
        datasets: [{
            label: "Bon",
            data: bonDonnee,
            backgroundColor: 'rgba(84, 167, 247, 0.2)',
            borderColor: '#54A7F7',
            pointBackgroundColor: '#54A7F7'
        }, {
            label: "Mitigé",
            data: mitigeDonnee,
            backgroundColor: 'rgba(247, 209, 43, 0.2)',
            borderColor: '#F7D12B',
            pointBackgroundColor: '#F7D12B'
        }, {
            label: "Insatisfaisant",
            data: insatisfaisantDonnee,
            backgroundColor: 'rgba(243, 109, 106, 0.2)',
            borderColor: '#F36D6A',
            pointBackgroundColor: '#F36D6A'
        }, {
            label: "Aucun avis émis",
            data: aucunAvisDonnee,
            backgroundColor: 'rgba(155, 126, 253, 0.2)',
            borderColor: '#9B7EFD',
            pointBackgroundColor: '#9B7EFD'
        }]
    };

    graphiqueRadar = new Chart(ctx, {
        type: "radar",
        data: data1,
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true,
                    min: 0,
                    max: 100
                }
            }
        }
    });
}
