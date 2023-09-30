"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randJobInfo = void 0;
const JobInfo_1 = require("./JobInfo");
// This function is used to generate a random JobInfo object.
// It is used to test the store.
// there are some rules of generation:
// 1. the id of the JobInfo object is start from 100000 and increase by 1 every time
// 2. the companyId of the JobInfo object is start from 100000 and increase by 1 every time
// 3. the recruiterId of the JobInfo object is start from 100000 and increase by 1 every time
// 4. the companyName of the JobInfo object is a name of a famous company
// 5. the recruiterName of the JobInfo object is a name of a famous person
// 6. the timestamp of the JobInfo object is a unix timestamp
// 7. the name of the JobInfo object is a random job name
function randJobInfo() {
    const id = 100000 + Math.floor(Math.random() * 100000);
    const companyId = 100000 + Math.floor(Math.random() * 100000);
    const recruiterId = 100000 + Math.floor(Math.random() * 100000);
    const companyName = ['Google', 'Facebook', 'Amazon', 'Microsoft', 'Apple'][Math.floor(Math.random() * 5)];
    const recruiterName = ['Bill Gates', 'Steve Jobs', 'Elon Musk', 'Jeff Bezos', 'Mark Zuckerberg'][Math.floor(Math.random() * 5)];
    const timestamp = Math.floor(Date.now() / 1000);
    const name = ['Software Engineer', 'Product Manager', 'Project Manager', 'Designer', 'Data Analyst'][Math.floor(Math.random() * 5)];
    const benefits = {
        salary: [1000, 2000, JobInfo_1.JobSalaryPaymentMethod.MONTHLY],
        items: ['free lunch', 'free gym', 'free snacks']
    };
    const requirements = {
        age: [20, 30],
        experience: [1, 3],
        education: 'Bachelor'
    };
    const recruitmentNumber = 3;
    const type = 'full-time';
    const form = JobInfo_1.JobForm.FULL_TIME;
    return {
        id,
        companyId,
        recruiterId,
        companyName,
        recruiterName,
        timestamp,
        name,
        benefits,
        requirements,
        recruitmentNumber,
        type,
        form
    };
}
exports.randJobInfo = randJobInfo;
