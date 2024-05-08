import React from 'react';
import './Modal.scss'; // import the CSS

const Modal = ({ article, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{article.title}</h2>
                <p>{article.content}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;