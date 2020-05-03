function _formatParsedInput(input: string[]) {
  return input.map(i => {
    const { 0: quantity = "1", 1: name } = i.split(/([0-9]+) /g).filter(v => v);
    return { quantity: Number(quantity), name };
  });
}

export function parseTextFormat(value: string) {
  const arr = value.split(/\r?\n|\r/gm).filter(v => v);
  return _formatParsedInput(arr);
}
