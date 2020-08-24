import React, { Component } from "react";
import './TechnicalServicePage.scss'
import {Link} from "react-router-dom";

class TechnicalServicePage extends Component {

    state = {
        buttons: ['Смены','Отчеты','ТРК','Обслуживание','Инкассация'],
        links: ['btnBack', 'btnHome', 'btnBack']
    }

    render() {

        const {buttons, links} = this.state;

        return (
            <div className='TechnicalService__wrapper'>
                <div className="bashneftLogo">
                    <Link to="/">
                        <div>
                            <img src="/images/bashneft.png" alt=""/>
                            <span>башнефть</span>
                        </div>
                    </Link>
                </div>
                <h3>Главное меню технического обслуживания</h3>
                <h3>Выберите действие</h3>
                <div className='buttons'>
                    {
                        buttons.map((button,i) => (
                            <div key={i} className='button'>
                                <div className='shadow'></div>
                                    <Link to="/">
                                        <div className='message'>
                                            <p>{button}</p>
                                        </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="homeBack">
                    {
                        links.map((link) => (
                            <Link to="/">
                                <div className={link}>
                                    <img src={`/images/${link}.png`} alt=""/>
                                </div>
                            </Link>
                        ))
                    }

                </div>
            </div>
        )
    }
}

export default TechnicalServicePage;