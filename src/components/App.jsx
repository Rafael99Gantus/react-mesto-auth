import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import AddPlacePopup from './AddPlacePopup.js';
import api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CurrentCardInfo } from '../contexts/CurrentCardInfo.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsEditCardPopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAnswerPopupOpen, setIsAnswerPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });

    api.getAllCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeStatus(card._id, !isLiked)
      .then((res) => {
        setCards((state) => state.map((c) => c._id === card._id ? res : c));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then((res) => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function closeAllPopup() {
    setIsEditProfilePopupOpen(false);
    setIsEditCardPopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleEditCardsClick() {
    setIsEditCardPopupOpen(true);
  }
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleAnswerClick() {
    setIsAnswerPopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser(info) {
    api.saveInfoInServ(info)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopup();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(avatar) {
    api.saveAvatarInServ(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopup();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(name, link) {
    api.createCardInServ(name, link)
      .then((newPlace) => {
        setCards([newPlace, ...cards]);
        closeAllPopup();
      })
      .catch((err) => {
        console.log('Ошибка:', err);
      });
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentCardInfo.Provider value={cards}>
        <div className="root">

          <div className="page">
            <Header />
            <Main
              onEditProfile={handleEditProfileClick}
              onAddPlace={handleEditCardsClick}
              onEditAvatar={handleEditAvatarClick}
              onAnswer={handleAnswerClick}
              onCardClick={handleCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
            <Footer />
          </div>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            closeFunc={closeAllPopup}
            onUpdateUser={handleUpdateUser} />

          <AddPlacePopup
            closeFunc={closeAllPopup}
            isOpen={isAddPlacePopupOpen}
            onAddPlace={handleAddPlaceSubmit} />

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            closeFunc={closeAllPopup}
            onUpdateAvatar={handleUpdateAvatar} />

          <PopupWithForm
            name='answerPopup'
            title='Вы уверены?'
            buttonText='Да'
            closeFunc={closeAllPopup}
            openFunc={isAnswerPopupOpen} />

          <ImagePopup
            card={selectedCard}
            closeFunc={closeAllPopup}>
          </ImagePopup>

        </div>
      </CurrentCardInfo.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App;