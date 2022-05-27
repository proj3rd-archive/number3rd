"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionFromString = void 0;
function versionFromString(str) {
    return str.split(".").map(versionFromChar);
}
exports.versionFromString = versionFromString;
function versionFromChar(char) {
    const converted = Number(char);
    if (!Number.isNaN(converted)) {
        return converted;
    }
    return char.charCodeAt(0) - "a".charCodeAt(0) + 10;
}
//# sourceMappingURL=version.js.map