import axios from "axios";

const URL = axios.create();

URL.defaults.baseURL = `https://api.bithumb.com/public/transaction_history`;

export default URL;
