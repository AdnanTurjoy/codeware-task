function countKCountdown(arr, len, sequenceEnd) {
  let flag = -1;

  let count = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] === sequenceEnd) flag = sequenceEnd;

    if (arr[i] === flag) flag--;
    else flag = -1;

    if (flag === 0) count++;
  }

  return count;
}

var arr = [4, 8, 3, 2, 1, 2];
len = arr.length;
sequenceEnd = 1;
console.log(countKCountdown(arr, len, sequenceEnd));
