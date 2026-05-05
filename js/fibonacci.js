export function fibsLoop(n) {
  const fibsSequence = [];
  for (let iteration = 0; iteration < n; iteration++) {
    if (typeof fibsSequence[iteration - 1] !== "number") {
      fibsSequence.push(0);
    } else if (typeof fibsSequence[iteration - 2] !== "number") {
      fibsSequence.push(1);
    } else {
      fibsSequence.push(
        fibsSequence[iteration - 2] + fibsSequence[iteration - 1],
      );
    }
  }

  return fibsSequence;
}
