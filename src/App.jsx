import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import { languages } from "./data/language"

function TelegramLogin() {
  // console.log(language);
  return (
    <div className="login-container">
      <h1 className="text-center h2">Telifon raqamingizni kiriting.</h1>

      <p>Iltimos, mamlakat kodingizni tasdiqlang va mobil telefon raqamingizni kiriting.</p>

      <select className="bg-light w-100 mx-auto d-block py-1 countrys-select mt-5">
        {
          languages.map( (language) => {

            return (
              <option key={language.id} value={language.prop}>{language.name}</option>
            )
          })
        }
      </select>

      <input type="text" value="+998" className="phone-first-nomber" />
      <input type="number" className="mt-5 phone-number"/>


      <button className="btn btn-primary btn-block py-3 w-50 mx-auto my-5">NEXT</button>
    </div>
  )
}

export default TelegramLogin
