import axios from 'axios';

const KEY = 'AIzaSyDRgIXCxFZW75sLArqQP0W45e6DeCRFstU';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY		
	}
});