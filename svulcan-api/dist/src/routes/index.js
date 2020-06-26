"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const Issues_1 = tslib_1.__importDefault(require("./Issues"));
const router = express_1.Router();
router.use('/issues', Issues_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map