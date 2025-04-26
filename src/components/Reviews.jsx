import React from 'react';
import  GoogleReviews from 'react-google-reviews';

const Reviews = () => {
  return (
    <div>
      <h2>Recensioni di Google</h2>
      <GoogleReviews placeId="ChIJX8_-v-v9ExMRrLgbfGoUv4s" />
    </div>
  );
}

export default Reviews;
