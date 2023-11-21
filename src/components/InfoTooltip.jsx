import React from 'react';

export default function InfoTooltip() {
    const className = card ? 'popup_opened' : '';

    return (
        <div className={`popup ${className}`} id={card?.name}>
            <div className="popup__container">
                <button id="closedIconPopupImage" className="popup__closed" type="button" onClick={closeFunc} />
                <div className="popup__tooltip" src={card?.link} alt={card?.name} />
                <h2 className="popup__titleImage">{card?.name}</h2>
            </div>
        </div>
    )
}