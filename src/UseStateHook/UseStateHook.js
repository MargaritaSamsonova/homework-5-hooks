import React, { useState } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/

export const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail(e.target.email.value);
        setPassword(e.target.password.value);
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input id='email-input' type="text" name='email' data-testid='email-input'/>
            <input id='password-input' type="password" name='password' data-testid='password-input'/>
            <input id='submit' type="submit" data-testid='submit'/>
            <div data-testid="success-message">{(email && password) && 'Вы вошли'}</div>
        </form>
    )
};
