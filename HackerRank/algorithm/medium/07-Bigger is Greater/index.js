let w1 = "bacd";

function biggerIsGreater(w = "") {
  let isEffected = false;
  w = w.split("");

  // 1. Sola doğru ilk artışı bul
  for (let i = w.length - 1; i > 0; i--) {
    if (w[i].charCodeAt() > w[i - 1].charCodeAt()) {
      // 2. En sağdan başlayarak w[i-1]'den büyük ilk karakteri bul
      let swapIndex = w.length - 1;
      while (w[swapIndex].charCodeAt() <= w[i - 1].charCodeAt()) {
        swapIndex--;
      }

      // 3. w[i-1] ile bulunan karakterin yerini değiştir
      [w[i - 1], w[swapIndex]] = [w[swapIndex], w[i - 1]];

      // 4. i'den sona kadar olan kısmı ters çevir (en küçük sıraya getir)
      let left = i;
      let right = w.length - 1;
      while (left < right) {
        [w[left], w[right]] = [w[right], w[left]];
        left++;
        right--;
      }

      isEffected = true;
      break;
    }
  }

  if (!isEffected) {
    return "no answer";
  }

  return w.join("");
}

console.log(biggerIsGreater(w1));
