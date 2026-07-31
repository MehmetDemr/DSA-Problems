

function viralAdvertising(n=0) {
  let shared = 5;
  let cumulative = 0;

  for (let day = 1; day <= n; day++) {
    // 1. O günkü beğenen sayısını bul (yarısı)
    let liked = Math.floor(shared / 2);

    // 2. Toplam beğeniye ekle
    cumulative += liked;

    // 3. Ertesi gün reklamı görecek kişi sayısını güncelle (her beğenen 3 kişiye gönderir)
    shared = liked * 3;
  }

  return cumulative;
}

console.log(viralAdvertising(3));