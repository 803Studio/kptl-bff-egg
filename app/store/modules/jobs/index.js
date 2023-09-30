"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const randJobInfo_1 = require("../../../model/jobs/randJobInfo");
const jobStoreIndexes = (0, utils_1.createStoreIndexes)([
    'id',
    'companyId',
    'recruiterId'
]);
const jobStore = {
    name: 'job',
    init: async () => {
        for (let i = 0; i < 200; i++) {
            jobStoreIndexes.addItem((0, randJobInfo_1.randJobInfo)());
        }
    },
    indexes: jobStoreIndexes,
};
exports.default = jobStore;
