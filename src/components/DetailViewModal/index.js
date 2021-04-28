import React from 'react';
import './DetailViewModal.css';

export const DetailViewModal = ({ post, show, setShow }) => {
    if (!show) {
        return null
    }

    const { title, body, userId } = post;
    console.log("modal", post)

    const onClose = () => {
        setShow(false);
    }

    return (
        <div className="modal">
            <section className="modal-main">
                <h1>Title: {title}</h1>
                <h3>Desc: {body}</h3>
                <div className="modal-footer">
                    <span>By user id: {userId}</span>
                    <button onClick={onClose} className="modal-close-button">Close</button>
                </div>
            </section>
        </div>
    )

}