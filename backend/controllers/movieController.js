import https from 'https';

export const getNowPlayingMovies = (req, res) => {
    const options = {
        method: 'GET',
        hostname: 'imdb8.p.rapidapi.com',
        port: null,
        path: '/actors/get-all-filmography?nconst=nm0001667', // This path might need to be dynamic later
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY, // Use environment variable for API key
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    const request = https.request(options, function (response) {
        const chunks = [];

        response.on('data', function (chunk) {
            chunks.push(chunk);
        });

        response.on('end', function () {
            const body = Buffer.concat(chunks);
            res.status(200).json(JSON.parse(body.toString()));
        });
    });

    request.on('error', (e) => {
        res.status(500).json({ message: 'Error fetching movie data', error: e.message });
    });

    request.end();
};
