"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobForm = exports.JobSalaryPaymentMethod = void 0;
var JobSalaryPaymentMethod;
(function (JobSalaryPaymentMethod) {
    JobSalaryPaymentMethod["HOURLY"] = "HOURLY";
    JobSalaryPaymentMethod["MONTHLY"] = "MONTHLY";
    JobSalaryPaymentMethod["DAILY"] = "DAILY";
    JobSalaryPaymentMethod["WEEKLY"] = "WEEKLY";
    JobSalaryPaymentMethod["YEARLY"] = "YEARLY";
    JobSalaryPaymentMethod["NEGOTIABLE"] = "NEGOTIABLE";
    JobSalaryPaymentMethod["OTHER"] = "OTHER";
})(JobSalaryPaymentMethod || (exports.JobSalaryPaymentMethod = JobSalaryPaymentMethod = {}));
var JobForm;
(function (JobForm) {
    JobForm["FULL_TIME"] = "FULL_TIME";
    JobForm["PART_TIME"] = "PART_TIME";
    JobForm["CONTRACT"] = "CONTRACT";
    JobForm["INTERNSHIP"] = "INTERNSHIP";
    JobForm["TEMPORARY"] = "TEMPORARY";
    JobForm["VOLUNTEER"] = "VOLUNTEER";
    JobForm["OTHER"] = "OTHER";
})(JobForm || (exports.JobForm = JobForm = {}));
