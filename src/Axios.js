import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://us-central1-clone-c48ca.cloudfunctions.net/api'
		// 'http://127.0.0.1:5001/clone-c48ca/us-central1/api'
});

export default instance;
