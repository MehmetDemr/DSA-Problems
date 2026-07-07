let s1 = [1, 7, 2, 4];
let k1 = 3;

function nonDivisibleSubset(k = 0, s = []) {
  // k tane kova oluştur (index 0'dan k-1'e kadar), hepsi 0 ile başlasın
  let remainderCount = new Array(k).fill(0);

  // Her elemanın kalanını bul, ilgili kovayı bir artır
  for (let i = 0; i < s.length; i++) {
    let remainder = s[i] % k;
    remainderCount[remainder]++;
  }

  let finalCounter = 0;

  // Kalan 0 grubu: en fazla 1 eleman alınabilir
  if (remainderCount[0] > 0) {
    finalCounter += 1;
  }

  // r = 1'den k/2'ye kadar dön, her çifti bir kere kontrol et
  for (let r = 1; r <= Math.floor(k / 2); r++) {
    let opposite = k - r;

    if (r === opposite) {
      // k çift ise, tam ortadaki kalan kendi kendisiyle çakışır
      if (remainderCount[r] > 0) {
        finalCounter += 1;
      }
    } else {
      // r ile (k-r) çakışır, büyük olan kovayı seç
      finalCounter += Math.max(remainderCount[r], remainderCount[opposite]);
    }
  }

  return finalCounter;
}

console.log(nonDivisibleSubset(k1, s1)); // 3
