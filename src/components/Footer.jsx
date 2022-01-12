import React from 'react';
import logo_img10 from '../images/footerpic.svg'


const Footer = () => {
    return (
        <div className='my-footer'>
            <div>
                <img style={{ width: '100%', paddingTop: '30px' }} src={logo_img10} alt="" />
            </div>
            <div style={{ backgroundColor: '#31B8BF', width: '100%', height: 'auto', display: 'flex', justifyContent: 'space-evenly', color: 'white', paddingTop: '25px', paddingBottom: '25px' }}>
                <div>
                    <strong>Hi Doctor</strong>
                    <p className='para'>О нас</p>
                    <p className='para'>Помощь</p>
                    <p className='para'>Вопросы и ответы</p>
                    <p className='para'>Контакты</p>
                </div>
                {/* qwe */}
                <div className='first_footer_inner'>
                    <strong>Наши Услуги</strong>
                    <p className='para'>Самодиагностика</p>
                    <p className='para'>Онлайн консультации</p>
                    <p className='para'>Онлайн помощь</p>
                    <p className='para'>Стать нашим Партнерам</p>
                </div>
                <div className='second_footer_inner'>
                    <strong>Пациентам</strong>
                    <p className='para'>Медицинские учреждения</p>
                    <p className='para'>Врачи</p>
                    <p className='para'>Аптеки</p>
                    <p className='para'>Лаборатории</p>
                </div>
                <div className='third_footer_inner'>
                    <strong >Контакты</strong>
                    <p className='para'>Телефон: +996 777 52 14 41</p>
                    <p className='para'>Email: hello@gmail.com</p>
                    <p className='para'>Адрес: ул.Усубалиева, 120</p>

                </div>

            </div>
        </div>
    );
};

export default Footer;