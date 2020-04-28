const reviewData = {
    "restaurant_id": 1,
    "name": "Fernando",
    "rating": 3,
    "comments": "It was fine"
}

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
};

const API = {
    url: "https://frest.glitch.me/reviews",
    createReview: options => {
        fetch(this.url, options)
            .then( response => response.json() )
            .then( data => console.log(data) )
            .catch( error => console.error(error));
    }
};

module.exports = API;