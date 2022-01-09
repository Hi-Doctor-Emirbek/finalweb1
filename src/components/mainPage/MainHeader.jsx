import React from 'react';
import { Accordion, Card, FormControl, InputGroup } from 'react-bootstrap';
import './MainPage.css'
import logo_img1 from '../../images/firstCardOnline.svg'
import logo_img2 from '../../images/secondCardOnline.svg'
import logo_img3 from '../../images/thirdCardInline.svg'
import logo_img4 from '../../images/searchdoctor.svg'
import logo_img5 from '../../images/lookprofile.svg'
import logo_img6 from '../../images/makeappointment.svg'
import logo_img7 from '../../images/doctor.svg'
import logo_img8 from '../../images/dash.svg'
import logo_img9 from '../../images/picofhospital.svg'
import Button from '@restart/ui/esm/Button';
import { Carousel } from 'react-bootstrap';
import Footer from '../Footer';
import SearchDoc from './SearchDoc';
import { Link } from 'react-router-dom';


const MainHeader = () => {
    return (
        <>

            <div className="search">
                <div className="search-main-text">
                    <h1 className="main-text">Найдите проверенного врача и запишитесь на прием</h1>
                    <SearchDoc />
                </div>
            </div>
            <div className="first-cards d-flex container">
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "135px", margin: '0 auto', padding: '20px' }} src={logo_img1} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center', }}>Онлайн консультации</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button className="btn-first-session">Получить</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "100px", margin: '0 auto', padding: '15px' }} src={logo_img2} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Самодиагностика</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Button className="btn-first-session">Пройти</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "100px", margin: '0 auto', padding: '15px' }} src={logo_img3} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Записаться к врачу</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                        <Link to='/doctor'><Button className="btn-first-session" >Записаться </Button></Link>
                    </Card.Body>
                </Card>
            </div>
            <div className="second-cards d-flex container">
                <h2 className="second-main-text">Как это работает</h2>
                <h4 className="first-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</h4>
            </div>
            <div className="first-cards d-flex container">
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "130px", margin: '0 auto', padding: '20px' }} src={logo_img4} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center', }}>Найти врача</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "130px", margin: '0 auto', padding: '20px' }} src={logo_img5} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Посмотреть профиль</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)' }}>
                    <Card.Img style={{ width: "130px", margin: '0 auto', padding: '20px' }} src={logo_img6} />
                    <Card.Body>
                        <Card.Title style={{ color: '#31B8BF', textAlign: 'center' }}>Запишитесь на прием</Card.Title>
                        <Card.Text style={{ color: 'black', textAlign: 'center' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <div className="third-session">
                <div className="third-cards d-flex container">
                    <h2 className="third-main-text">Популярные врачи</h2>
                    <h4 className="second-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi…</h4>
                </div>
                <div className="slider">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className=" d-block w-100"
                                src={logo_img7}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Ибрагимова Альбина Фархатовна</h3>
                                <p>Акушер-гинеколог, Гинеколог, УЗИ-специалист.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo_img7}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Ури Крамер</h3>
                                <p>Невролог, Эпилептолог</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={logo_img7}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Ешим Йылдырым</h3>
                                <p>Онколог, Репродуктолог</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="fourth-session">
                    <div className="container">
                        <h2 className="fourth-main-text">Часто задаваемые вопросы</h2>
                        <div className="common-questions">
                            <div className="left-side" style={{ width: '220%' }}>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Как можно попасть на прием к специалистам «Hi Doctor»?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Можно ли на консультацию к вашим специалистам записать ребенка?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Можно ли в больнице сдать анализы перед госпитализацией?</Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Можно ли в вашей больнице оформить санитарную книжку?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                            est laborum.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                            <div className="right-side ms-4">
                                <img className="adaptive-pic" src={logo_img9} alt="" />
                                <h3 className="rigth-side-text">Lorem ipsum dolor sit amet?</h3>
                                <p>Id sit velit pariatur et magna nostrud qui nisi veniam cupidatat. Sunt voluptate amet fugiat labore veniam minim. Ad pariatur proident magna magna amet velit eiusmod. Minim occaecat tempor anim aute mollit do incididunt dolore officia est laborum aliqua. Nulla consequat ad et pariatur nostrud ex aute et. </p>
                                <Button className="btn-right-side">Ещё</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default MainHeader;