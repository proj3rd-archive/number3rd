export function versionFromString(str: string) {
  return str.split(".").map(versionFromChar);
}

function versionFromChar(char: string) {
  const converted = Number(char);
  if (!Number.isNaN(converted)) {
    return converted;
  }
  return char.charCodeAt(0) - "a".charCodeAt(0) + 10;
}
