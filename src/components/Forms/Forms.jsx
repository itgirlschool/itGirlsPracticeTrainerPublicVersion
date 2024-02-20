import React from "react";
import "./Forms.scss"

const Forms = () => {
    return(
        <div className='forms-container'>
            <section className="formsAll">
                <div className="form">
                    <h2>Форма 1</h2>
                    <form name="formOne" className="firstForm">
                        <label htmlFor="firstName" className="form__label">Имя:</label>
                        <input type="text" id="firstName" name="firstName" className="form__input"/>
                        <br/>
                        <label htmlFor="firstEmail" className="form__label">Email:</label>
                        <input type="email" id="firstEmail" name="firstEmail" className="form__input"/>
                        <br/>
                        <label htmlFor="firstSelect" className="form__label">Выберите опцию:</label>
                        <select id="firstSelect" name="firstSelect" className="form__select">
                            <option value="Опция 1">Опция 1</option>
                            <option value="Опция 2">Опция 2</option>
                            <option value="Опция 3">Опция 3</option>
                        </select>
                        <br/>
                        <button type="submit" name="firstButton" className="form__submit">Отправить</button>
                        <p className="error-message" id="errorMessage"></p>
                    </form>
                </div>

                <div className="form">
                    <h2>Форма 2</h2>
                    <form name="formTwo" className="secondForm">
                        <label htmlFor="secondName" className="form__label">Имя:</label>
                        <input type="text" id="secondName" name="secondName" className="form__input"/>
                        <br/>
                        <label htmlFor="secondEmail" className="form__label">Email:</label>
                        <input type="email" id="secondEmail" name="secondEmail" className="form__input"/>
                        <br/>
                        <label className="form__label">Выберите варианты:</label>
                        <div className="flex">
                            <input type="checkbox" id="checkbox1" name="checkboxOne"
                                   className="form__checkbox"/>
                            <label htmlFor="checkbox1">Вариант 1</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" id="checkbox2" name="checkboxTwo"
                                   className="form__checkbox"/>
                            <label htmlFor="checkbox2">Вариант 2</label>
                        </div>
                        <div className="flex">
                            <input type="checkbox" id="checkbox3" name="checkboxThree"
                                   className="form__checkbox"/>
                            <label htmlFor="checkbox3">Вариант 3</label>
                        </div>
                        <input name="secondButton" type="submit" value="Отправить" className="form__submit"/>
                    </form>
                </div>

                <div className="form">
                    <h2>Форма 3</h2>
                    <form name="formThree" className="thirdForm">
                        <label htmlFor="thirdName" className="form__label">Имя:</label>
                        <input type="text" id="thirdName" name="thirdName" className="form__input" placeholder="Ваше имя"/>
                        <br/>
                        <label htmlFor="thirdEmail" className="form__label">Email:</label>
                        <input type="email" id="thirdEmail" name="thirdEmail" className="form__input"/>
                        <br/>
                        <input type="submit" name="thirdButton" value="Отправить" className="form__submit"/>
                    </form>
                </div>

                <div className="form">
                    <h2>Форма 4</h2>
                    <form name="formFour" className="fourthForm">
                        <label className="form__label">Зарегистрируемся?</label>
                        <input type="radio" name="fourthName" value="Я хочу зарегистрироваться" className="form__input"/>
                        <span>Я хочу зарегистрироваться</span>
                        <br/>
                        <input type="submit" name="fourthButton" value="Отправить" className="form__submit b-13"/>
                        <p id="practicum13"></p>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Forms;