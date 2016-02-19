"use strict";

const npmPackageJson = require("package-json")
    , gitPackageJson = require("git-package-json")
    , gitSource = require("git-source")
    ;

module.exports = function packageJson(input, version, callback) {

    let parsed = gitSource(input);

    if (typeof version === "function") {
        callback = version;
        version = undefined;
    }

    if (parsed.protocol === "file") {
        npmPackageJson(input, version).then(callback.bind(this, null), callback);
    } else {
        gitPackageJson(parsed, callback);
    }
};
