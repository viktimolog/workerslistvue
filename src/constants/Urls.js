// const baseUrl = 'https://workerslist1.herokuapp.com/api/workers/';
const baseUrl = 'http://localhost:5000/api/workers/';
const Urls = {
    addWorker: baseUrl + 'addWorker',
    delWorker: baseUrl + 'delWorker/',
    getWorkers: baseUrl + 'getWorkers',
    getWorker: baseUrl + 'getWorker/',
    updateWorker: baseUrl + 'updateWorker/',
};
export default Urls;