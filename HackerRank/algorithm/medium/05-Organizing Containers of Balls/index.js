let containers = [
  [1, 4],
  [2, 3],
];

function organizingContainers(container=[]) {
  const n = container.length;

  // Satır toplamları (Konteyner Kapasiteleri)
  const containerCapacities = new Array(n).fill(0);
  // Sütun toplamları (Top Türü Miktarları)
  const typeCounts = new Array(n).fill(0);

  // 1. Matrisi gezerek satır ve sütun toplamlarını hesaplayalım
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      containerCapacities[i] += container[i][j];
      typeCounts[j] += container[i][j];
    }
  }

  // 2. İki diziyi de küçükten büyüğe sıralayalım
  containerCapacities.sort((a, b) => a - b);
  typeCounts.sort((a, b) => a - b);

  // 3. Sıralanmış dizilerin birebir aynı olup olmadığını kontrol edelim
  for (let i = 0; i < n; i++) {
    if (containerCapacities[i] !== typeCounts[i]) {
      return "Impossible";
    }
  }

  return "Possible";
}

console.log(organizingContainers(containers));
