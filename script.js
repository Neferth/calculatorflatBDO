function calculate() {
  // Récupérer les valeurs
  const C2 = parseFloat(document.getElementById('C2').value) || 0;
  const C4 = parseFloat(document.getElementById('C4').value) || 0;
  const C5 = parseFloat(document.getElementById('C5').value) || 1;
  const B5 = document.getElementById('B5').checked;
  const C7 = parseFloat(document.getElementById('C7').value) || 0;
  const B7 = document.getElementById('B7').checked;
  const C9 = parseFloat(document.getElementById('C9').value) || 1;
  const B9 = document.getElementById('B9').checked;

  // Calcul de C8 (ajustez selon la formule nécessaire)
  const C8 = C2 * C4 * 0.5; // Exemple : C8 = 50% de C2 * C4 (à adapter selon votre logique)

  // Calculer le résultat final
  const result = ((C2 * C4 * (B5 ? C5 : 1)) + (C8 * C2 * (B7 ? C7 : 0))) * (B9 ? C9 : 1);

  // Afficher le résultat
  document.getElementById('result').innerText = `Résultat : ${result.toFixed(2)}`;
}
