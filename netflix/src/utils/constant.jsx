export const API_END_POINT="https://netflix-project-backend.onrender.com";

    import https from "https";

export const options = {
	method: 'GET',
	hostname: 'imdb8.p.rapidapi.com',
	port: null,
	path: '/actors/get-all-filmography?nconst=nm0001667',
	headers: {
		'x-rapidapi-key': 'cd60fd74c2msh9eb933b18420089p1d01ffjsn90e35f60d256',
		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
	}
};

// export const options1 = {
// 	method: 'GET',
// 	hostname: 'imdb8.p.rapidapi.com',
// 	port: null,
// 	path: '/actors/v2/get-recommended-filmography?nconst=nm0000138&first=20&country=US&language=en-US',
// 	headers: {
// 		'x-rapidapi-key': '34c1bef25fmsh31ad85ed1e43093p14be2bjsn26504702a596',
// 		'x-rapidapi-host': 'imdb8.p.rapidapi.com'
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on('data', function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on('end', function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();

export const NOW_PLAYING_MOVIE="https://imdb8.p.rapidapi.com/actors/get-all-filmography?nconst=nm0001667";
// export const POPULAR_MOVIE="https://imdb8.p.rapidapi.com/actors/v2/get-recommended-filmography?nconst=nm0000138&first=20&country=US&language=en-US";
