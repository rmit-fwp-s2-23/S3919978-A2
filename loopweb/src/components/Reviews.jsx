import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Reviews({movie, setModal}) {
    const [reviews, setReviews] = useState([]);
    const [userReview, setUserReview] = useState("");
    const [error, setError] = useState("")


    const handleChange = e => {
        setUserReview(e.target.value)
    };


    useEffect(() => {
        if(movie.id){
            axios({
                method: 'post',
                url: "http://localhost:5000/api/reviews/",
                data: {
                    "movieId": movie.id,
                   }
            }).then((response) => {
                setReviews(response.data)
            })
        }
    }, [movie])

    const handleSubmit = e => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));

        if(!user) {
            setModal("login")
            return;
        }

        if (!userReview) {
            setError("Empty review!");
            return;
        }

        axios({
            method: "post",
            url: "http://localhost:5000/api/reviews/create",
            data: {
                content: userReview,
                movieId: movie.id,
                userEmail: user.email
            }
        }).then((response) => {
            if(response.data.error){
                setError(response.data.error)
                return
            }

            setReviews((prev) => [
                ...prev,
                ...response.data
            ])

            setUserReview("");
            setError("");
        })
    }


  return (
    <div className='reviews mt-5'>
        <h2 className='reviews-heading mb-3'>Reviews</h2>
        <ul className='mb-5'>
            {
                reviews && reviews.map((review) => {
                    return(
                        <li key={review.id}>
                            <b>{review.user.first_name} {review.user.last_name}</b>
                            <p>{review.content}</p>
                        </li>
                        )
                })
            }
        </ul>

        <form>
            <div className="mb-3">
                <span className={`error ${error ? 'active' : ''} `}>{error}</span>
                <textarea className="form-control" id="review-input" rows="3" placeholder='Leave your review here.' onChange={handleChange} value={userReview}></textarea>
                <button className="review-submit" onClick={handleSubmit}>Upload review</button>
            </div>
        </form>
    </div>
  )
}

export default Reviews

