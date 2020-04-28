const reviewData = {
    "restaurant_id": 2,
    "name": "Stacy",
    "rating": 5,
    "comments": "It was awesome"
}

const API = {
    createReview: () => {
        fetch("https://frest.glitch.me/reviews", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
            .then( response => response.json() )
            .then( data => console.log(data) )
            .catch( error => console.error(error));
    }
};

module.exports = API;