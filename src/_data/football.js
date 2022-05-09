const EleventyFetch = require("@11ty/eleventy-fetch");


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
		'X-RapidAPI-Key': 'cebcf67a84msh9c1af70b7cf022bp1087ecjsnd25814936ef8'
	}
};


module.exports = async function () {
	let url = "https://api-football-v1.p.rapidapi.com/v3/timezone";

	/* This returns a promise */
	return EleventyFetch(url, options, {

		duration: "1d", // save for 1 day
		type: "json"    // we’ll parse JSON for you
	}).then(response => response.json()
		.then(response => response.json())
		.catch(err => console.error(err))


	);
};  