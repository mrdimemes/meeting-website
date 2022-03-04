import React from "react";
import classNames from "classnames";
import { Button } from "../components";
import "../styles/scss/components/Form.scss";


function Form({ targetArray }) {
  const language = navigator.language;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [age, setAge] = React.useState("");
  const [activeTarget, setActiveTarget] = React.useState(null);
  const [isTargetPopupOpen, setIsTargetPopupOpen] = React.useState(false);

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

  return (
    <form
      className="Form"
      action="https://dev.rusdat.net/api/test/crm/send_lead"
      method="post"
    >
      <input
        className="Form__field"
        name="name"
        type="text"
        placeholder="Введите имя"
        required
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="Form__field"
        name="email"
        type="email"
        placeholder="E-mail"
        required
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
      <input name="lang" type="hidden" value={language} />
      <input
        name="target"
        type="hidden"
        value={targetArray[activeTarget - 1]}
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
        disabled={age && name && activeTarget && email ? false : true}
        children="Подписаться"
      />
      <div className="Form__checkbox-wrapper">
        <input
          className="Form__checkbox"
          name="policy"
          type="checkbox"
          required
          defaultChecked
        />
        <label className="Form__checkbox-label" htmlFor="policy">
          При нажатии на кнопку вы соглашаетесь
          с условиями <a href="/policy">Политики конфиденциальности</a>
        </label>
      </div>

      <div className="Form__checkbox-wrapper">
        <input
          className="Form__checkbox"
          name="mailing"
          type="checkbox"
        />
        <label className="Form__checkbox-label" htmlFor="mailing">
          Я согласен получать уведомления и предложения
        </label>
      </div>

    </form >
  )
}


export default Form;