import React from "react";
import { Button } from "../components";


function Form() {
  const lang = "ru";
  return (
    <form
      className="Form"
      action="https://dev.rusdat.net/api/test/crm/send_lead"
      method="post"
    >
      <input className="Form__field" name="name" type="text" placeholder="Введите имя" />
      <input className="Form__field" name="email" type="email" placeholder="E-mail" />
      <input className="Form__field" name="age" type="number" placeholder="Введите возраст" />
      <input name="lang" type="hidden" value={lang} />
      <select className="Form__field Form__select" name="target">
        <option value="" disabled selected hidden>
          Какого возраста хотите найти девушку?
        </option>
        <option className="Form__select-option" value="1">20-30</option>
        <option className="Form__select-option" value="2">30-40</option>
        <option className="Form__select-option" value="3">40-50</option>
      </select>
      <Button type="submit" theme="main" children="Подписаться" />
      <input name="policy" type="checkbox" required checked/>
      <label for="policy">
        При нажатии на кнопку вы соглашаетесь с условиями
        <a href="/policy">Политики конфиденциальности</a>
      </label>
      <input name="mailing" type="checkbox" />
      <label for="mailing">Scales</label>
    </form>
  )
}


export default Form;