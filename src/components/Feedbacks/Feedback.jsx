import React, { useContext, useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating'
import { feedbackContext } from '../../contexts/feedbackContext';

const Feedback = (props) => {
    const [rating, setRating] = useState(0)
    const { getFeedbacks, feedbacks, addFeedback, getFeedbacksToEdit, feedbacksToEdit, saveEditedFeedbacks } = useContext(feedbackContext)
    useEffect(() => {
        getFeedbacks(props.doctor.id)
    }, [])

    let user = JSON.parse(localStorage.getItem('user'))
    let avgRate = 0
    feedbacks ? (feedbacks.forEach(element => {
    })
    ) : (<></>)
    let idFeedTemp, checkFeed, myRate
    let count = 0
    feedbacks ? (avgRate /= feedbacks.length) : (<></>)

    if (feedbacks) {
        feedbacks.forEach(item => {
            if (item.doctorId === props.doctor.id && item.owner === user.username) {
                idFeedTemp = item.id
                checkFeed = true
                myRate = item.rate
            }
            if (item.doctorId === props.doctor.id) {
                count++
                avgRate += item.rate
            }
        })
    }
    avgRate /= count
    if (count === 0) {
        avgRate = 0
    }
    const handleRating = (rate) => {
        setRating(rate)
        if (checkFeed) {
            let editRate = {
                owner: user.username,
                doctorId: props.doctor.id,
                rate: rate,
                id: idFeedTemp,
            }
            saveEditedFeedbacks(editRate)
        } else {
            addFeedback(user.username, props.doctor.id, rate)
        }
    }

    return (
        <div>
            {
                user.type === 'pacient' ? (
                    <Rating onClick={handleRating} ratingValue={myRate} /* Rating Props */ />
                ) : (
                    <></>
                )
            }
            <p style={{ color: '#9E9E9E', justifyContent: 'space-between', }}>Рейтинг врача: ({(Math.round(avgRate * 10) / 10)}), количество отзывов ({feedbacks ? count : 0}) </p>
        </div>
    );
};

export default Feedback;