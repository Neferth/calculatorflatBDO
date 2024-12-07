function calculate() {
  try {
    // Récupérer les valeurs des champs
    const C2 = parseFloat(document.getElementById('C2').value) || 0;
    const C4 = parseFloat(document.getElementById('C4').value) || 0;
    const C5 = parseFloat(document.getElementById('C5').value) || 1;
    const B5 = document.getElementById('B5').checked;
    const C7 = parseFloat(document.getElementById('C7').value) || 0;
    const B7 = document.getElementById('B7').checked;
    const C9 = parseFloat(document.getElementById('C9').value) || 1;
    const B9 = document.getElementById('B9').checked;

    // Calculer C8 (à adapter selon votre logique)
    const C8 = C2 * C4 * 0.5; // Exemple de calcul, ajustez selon vos besoins

    // Calculer le résultat final
    const result = ((C2 * C4 * (B5 ? C5 : 1)) + (C8 * C2 * (B7 ? C7 : 0))) * (B9 ? C9 : 1);

    // Afficher le résultat
    if (!isNaN(result)) {
      document.getElementById('result').innerText = `Résultat : ${result.toFixed(2)}`;
    } else {
      document.getElementById('result').innerText = "Erreur : Vérifiez les entrées.";
    }
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    document.getElementById('result').innerText = "Erreur : Consultez la console pour plus d'informations.";
  }
}
