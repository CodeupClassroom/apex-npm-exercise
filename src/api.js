const reviewData = {
    "restaurant_id": 1,
    "name": "Fer",
    "rating": 1,
    "comments": "yuck"
}

// default limit 30 solve -> https://frest.glitch.me/reviews?limit=50
const url = 'https://frest.glitch.me/reviews';

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(reviewData),
};

const REST_API = {
    postReview: () => {
        fetch(url, options)
            .then(response => response.json())
            .then(data => console.log('data posted', data))
            .catch(error => console.error(error));
    }
}

export default REST_API;