import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { Button } from "../components";
import "../styles/scss/components/Form.scss";


function Form({ targetArray, submitHandler }) {
  const language = navigator.language;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [activeTarget, setActiveTarget] = React.useState(null);
  const [isTargetPopupOpen, setIsTargetPopupOpen] = React.useState(false);
  const [isPolicyAccepted, setIsPolicyAccepted] = React.useState(true);
  const [isMailingAccepted, setIsMailingAccepted] = React.useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleAgeChange = (event) => {
    const value = event.target.value;
    setAge(value > 100 ? 100 : value);
  }

  const handlePopup = () => {
    setIsTargetPopupOpen(!isTargetPopupOpen);
  }

  const handlePolicyCheckbox = () => {
    setIsPolicyAccepted(!isPolicyAccepted);
  }

  const handleMailingCheckbox = () => {
    setIsMailingAccepted(!isMailingAccepted);
  }

  const renderActiveTarget = () => {
    if (!activeTarget) {
      return <p className="Form__select-active">
        Какого возраста хотите найти девушку?
      </p>
    } else {
      return <p className="Form__select-active Form__select-active_active">
        Хочу найти девушку {targetArray[activeTarget - 1].value} лет
      </p>
    }
  }

  const sendForm = () => {
    fetch("https://dev.rusdat.net/api/test/crm/send_lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        age: age,
        target: targetArray[activeTarget - 1],
        lang: language,
        policy: isPolicyAccepted,
        mailing: isMailingAccepted
      })
    });
    submitHandler();
  }

  return (
    <form className="Form" onSubmit={sendForm}>
      <input
        className="Form__field"
        name="name"
        type="text"
        placeholder="Введите имя"
        required
        maxLength={50}
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="Form__field"
        name="email"
        type="email"
        placeholder="E-mail"
        required
        maxLength={50}
        value={email}
        onChange={handleEmailChange}
      />
      <input
        className="Form__field"
        name="age"
        type="number"
        min="18"
        max="100"
        placeholder="Введите возраст"
        required
        value={age}
        onChange={handleAgeChange}
      />
      <div
        className={classNames(
          "Form__field",
          "Form__select",
          { "Form__select_active": isTargetPopupOpen }
        )}
        onClick={handlePopup}
      >
        {renderActiveTarget()}

        <div className={classNames(
          "Form__select-popup",
          { "Form__select-popup_active": isTargetPopupOpen }
        )}>
          {targetArray.map((target) => {
            return <div
              key={target.id}
              className={classNames(
                "Form__popup-item",
                { "Form__popup-item_active": target.id === activeTarget }
              )}
              onClick={() => {
                setActiveTarget(target.id);
                setIsTargetPopupOpen(false);
              }}
            >
              <div className={classNames(
                "Form__popup-item-marker",
                { "Form__popup-item-marker_active": target.id === activeTarget }
              )} />
              <p className={classNames(
                "Form__popup-item-text",
                { "Form__popup-item-text_active": target.id === activeTarget }
              )}>
                {target.value}
              </p>
            </div>
          })}
        </div>
      </div>

      <Button
        className="Form__button"
        type="submit"
        theme="main"
        disabled={age && name && activeTarget && email && isPolicyAccepted ? false : true}
        children="Подписаться"
      />
      <div className="Form__checkbox-wrapper">
        <div
          className={classNames(
            "Form__checkbox",
            { "Form__checkbox_checked": isPolicyAccepted }
          )}
          onClick={handlePolicyCheckbox}
        />
        <p className="Form__checkbox-label">
          При нажатии на кнопку вы соглашаетесь
          с условиями <a href="/policy">Политики конфиденциальности</a>
        </p>
      </div>

      <div className="Form__checkbox-wrapper">
        <div
          className={classNames(
            "Form__checkbox",
            { "Form__checkbox_checked": isMailingAccepted }
          )}
          onClick={handleMailingCheckbox}
        />
        <p className="Form__checkbox-label">
          Я согласен получать уведомления и предложения
        </p>
      </div>

    </form >
  )
}


Form.propTypes = {
  targetArray: PropTypes.arrayOf(PropTypes.object),
  submitHandler: PropTypes.func
};



export default Form;