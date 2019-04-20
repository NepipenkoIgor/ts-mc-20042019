"use strict";
var Size;
(function (Size) {
    Size[Size["S"] = 44] = "S";
    Size[Size["M"] = 48] = "M";
    Size[Size["XL"] = 52] = "XL";
})(Size || (Size = {}));
var middleSize = Size.M;
var smallSize = Size[44];
console.log(middleSize, smallSize);
//# sourceMappingURL=index.js.map