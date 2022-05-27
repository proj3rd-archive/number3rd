export function versionFromString(str) {
    return str.split(".").map(versionFromChar);
}
function versionFromChar(char) {
    const converted = Number(char);
    if (!Number.isNaN(converted)) {
        return converted;
    }
    return char.charCodeAt(0) - "a".charCodeAt(0) + 10;
}
//# sourceMappingURL=version.js.map