let ranked1 = [100, 100, 50, 40, 40, 20, 10];

let player1 = [5, 25, 50, 120];

function climbingLeaderboard(ranked = [], player = []) {
  let ranking = 1;
  let str = "";

  const unique = [...new Set(ranked)];

  unique.sort((a, b) => b - a);

  for (let i = 0; i < player.length; i++) {
    ranking = 1;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] > player[i]) {
        ranking++;
      } else {
        break;
      }
    }
    str += ranking + "\n";
  }

  str = str.trimEnd();
  return str;
}

//with binary search

function climbingLeaderboard1(ranked, player) {
  const unique = [...new Set(ranked)].sort((a, b) => b - a);
  let result = [];

  for (let i = 0; i < player.length; i++) {
    let lo = 0;
    let hi = unique.length;

    // unique[mid] <= player[i] olan ilk index'i bul
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (unique[mid] <= player[i]) {
        hi = mid; // sola daralt, belki daha erken bir index de uyar
      } else {
        lo = mid + 1; // sağa git
      }
    }

    result.push(lo + 1); // index 0-based, ranking 1-based
  }

  return result;
}

//two pointer yöntemi

//önemli nokta burda player da sıralı olmak zorunda

function climbingLeaderboard2(ranked, player) {
  const unique = [...new Set(ranked)].sort((a, b) => a - b); // artan sıralı

  // Orijinal index'leri koru, sonra player'ı artan sırala
  const indexed = player.map((score, idx) => ({ score, idx }));
  indexed.sort((a, b) => a.score - b.score);

  const result = new Array(player.length);
  let i = 0; // unique dizisi için pointer, asla geri gitmez

  for (const { score, idx } of indexed) {
    // score'dan büyük olan unique elemanlarını "geçmiş" say
    while (i < unique.length && unique[i] <= score) {
      i++;
    }
    // i, score'dan büyük eleman sayısını verir
    result[idx] = unique.length - i + 1;
  }

  return result;
}

console.log(climbingLeaderboard(ranked1, player1));
