"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionFromString = void 0;
function versionFromString(str) {
    const unit = str.length / 3;
    return [0, 1, 2]
        .map((step) => str.substring(step * unit, (step + 1) * unit))
        .map(versionFromChar);
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