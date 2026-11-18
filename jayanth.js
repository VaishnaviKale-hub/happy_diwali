const belongsInRun = function (run, element) {
  if (run.length < 2) return true;

  const d1 = Math.sign(element - run.at(-1));
  const d2 = Math.sign(run.at(-1) - run.at(-2));

  if (d1 === 1 && d2 === 0) return true;
  if (d1 === 0 && d2 === 1) return true;
  return d1 === d2;
};

const findRuns = function (numbers) {
  const runs = [[]];

  for (const element of numbers) {
    if (!belongsInRun(runs.at(-1), element)) {
      runs.push([]);
    }
    runs.at(-1).push(element);
  }

  return runs;
};