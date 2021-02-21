export function historySort(data) {
  data.sort(function (a, b) {
    if (a.date > b.date) {
      return -1;
    } else {
      return 1;
    }
  });
}
