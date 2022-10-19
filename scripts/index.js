const main = document.querySelector('.main');
const profileEditBtn = main.querySelector('.profile__edit-button');
const profileName = main.querySelector('.profile__name');
const profileDescription = main.querySelector('.profile__description');
const popup = document.querySelector('.popup');
const form = popup.querySelector('.form');
const popupProfileName = popup.querySelector('.form__input_type_profile-name');
const popupProfileDescription = popup.querySelector('.form__input_type_profile-description');
const popupSubmitBtn = popup.querySelector('.form__submit-button');
const popupClose = popup.querySelector('.form__close-button');

function popupToggle() {
    popup.classList.toggle('popup_opened')
    popupProfileName.value = profileName.textContent
    popupProfileDescription.value = profileDescription.textContent
}

function formSubmit(evt) {
    evt.preventDefault()
    profileName.textContent = popupProfileName.value
    profileDescription.textContent = popupProfileDescription.value
    popupToggle()
}

profileEditBtn.addEventListener('click', popupToggle);
form.addEventListener('submit', formSubmit)
popupClose.addEventListener('click', popupToggle);