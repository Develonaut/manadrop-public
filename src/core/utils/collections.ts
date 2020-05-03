export function getCountPresentationString(value: number) {
  return value.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
}
