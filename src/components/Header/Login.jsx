import React from 'react'
import '../../styles/Login.scss'

const Login = ({ loginView, loginDiseble }) => {
  return (
    (loginView) ?
      <div className="login" onClick={loginDiseble}>
        <div className="login__block" onClick={e => e.stopPropagation()}>
          <div className="login__del" onClick={loginDiseble}>
            <img src="/img/del.svg" alt="del" />
          </div>
          <h3 className="login__title">Войдите в аккаунт</h3>
          <form action="">
            <span className="login__info">Телефон</span>
            <input type="tel" className="login__phone" required />
            <p className="login__info-text">
              Указывая номер телефона, вы принимаете условия <br />
              <span>пользовательского соглашения</span>
            </p>
            <div className="login__button-inner">
              <button className="login__submit" type='submit' onClick={e => e.preventDefault()}>Войти</button>
            </div>
          </form>
        </div>
      </div>
      : false
  )
}

export default Login