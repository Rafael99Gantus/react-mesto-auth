import React from 'react';

export default function InfoTooltip(props) {
    const className = props.isOpen ? 'popup_opened' : '';

    return (
        <div className={`popup ${className}`} >
            <div className="popup__container">
                <button id="closedIconPopupImage" className="popup__closed" type="button" onClick={props.closeFunc} />
                <div className="popup__tooltip" src={''} alt={'Image'} />
                <p className="popup__text">{''}</p>
            </div>
        </div>
    )
}