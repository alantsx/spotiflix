const URL = window.location.hostname.includes('localhost') ?
'http://localhost:8080' :
'https://alan-spotiflix.herokuapp.com';

export default {
    URL,
};