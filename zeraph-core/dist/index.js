"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationAlreadyPreparedException = void 0;
const zeraph_exceptions_1 = require("@vyrnn/zeraph-exceptions");
class ApplicationAlreadyPreparedException extends zeraph_exceptions_1.Exception {
    constructor(status, message) { super(status, message); }
}
exports.ApplicationAlreadyPreparedException = ApplicationAlreadyPreparedException;
