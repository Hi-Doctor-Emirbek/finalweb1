import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { userContext } from '../../contexts/userContext';
import { commentsContext } from '../../contexts/commentsContext'
import { Button, Form, Modal } from 'react-bootstrap';
import * as yup from "yup";
import { Formik } from "formik";
import Comment from '../comments/Comment'
import Feedback from '../Feedbacks/Feedback'
const DoctorRoom = () => {
    const { user, getDoctor, doctor, editDoctor, deleteUser, logoutUser, clearState } = useContext(userContext)
    const { getCommentsForRoom } = useContext(commentsContext)
    const [show, setShow] = useState(false);
    useEffect(() => {
        clearState()
    }, [])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleDelete() {
        if (window.confirm('Вы уверены что хотите удалить профиль?')) {
            logoutUser();
            deleteUser(params.id)
            history('/')
            localStorage.clear();
        }
    }
    const schema = yup.object().shape({
        specialty: yup.string().min(2).max(30).required("Required"),
        education: yup.string().min(2).max(30).required("Required"),
        experience: yup.string().min(2).max(30).required("Required"),
    });
    const params = useParams();
    useEffect(() => {
        getDoctor(params.id);
    }, []);
    const history = useNavigate()
    useEffect(() => {
        getCommentsForRoom(params.id)
    }, [])
    return (
        <div className='container1' style={{ backgroundColor: '#F4F4F4' }} >
            {
                doctor ? (
                    <div className='container' style={{ backgroundColor: 'white', boxShadow: '4px 4px 8px 0px rgba(23, 27, 30, 0.63)', textAlign: 'center' }} >
                        <h2>Личный кабинет:  {doctor.username}</h2>
                        <h3>Специальность: {
                            doctor.specialty ? (
                                doctor.specialty
                            ) : (
                                "Не заполнено"
                            )
                        }</h3>
                        <h3>Возраст: {
                            doctor.age ? (
                                doctor.age
                            ) : (
                                'Не заполнено'
                            )}</h3>
                        <h3>Образование: {
                            doctor.education ? (
                                doctor.education
                            ) : (
                                'Не заполнено'
                            )}</h3>
                        <h3>Опыт работы: {
                            doctor.experience ? (
                                doctor.experience
                            ) : (
                                'Не заполнено'
                            )}</h3>
                        <Feedback doctor={doctor} />

                    </div>
                ) : (
                    <h2>Loading</h2>
                )
            }
            {
                user ? (user.type === 'doctor' ? (<><Button style={{ border: 'none', fontSize: '20px', backgroundColor: '#31B8BF', marginLeft: '60px' }} onClick={handleShow}>Редактировать данные</Button>
                    <Button style={{ border: 'none', fontSize: '20px', backgroundColor: '#31B8BF', marginLeft: '10px' }} onClick={handleDelete}>
                        Удалить профиль
                    </Button></>) : (
                    <>
                        <Button >Записаться к врачу</Button>
                    </>
                )) : (<h2>Loading</h2>)




            }
            {
                doctor ? (<Comment doctor={doctor} />) : (<h2>Load</h2>)
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Изменить данные</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        doctor ? (
                            <Formik
                                validationSchema={schema}
                                onSubmit={(data) => {
                                    editDoctor(data, doctor);
                                    getDoctor(doctor.id)
                                }}
                                initialValues={doctor}
                            >
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <Form
                                        style={{ width: "90%", margin: '0 auto' }}
                                        className="bg-light p-4"
                                        onSubmit={handleSubmit}
                                    >

                                        <Form.Group className="mb-3" controlId="formBasicEmail3">
                                            <Form.Label>Ваша специальность</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Введите вашу специальность"
                                                name="specialty"
                                                onChange={handleChange}
                                                isValid={!errors.specialty && touched.specialty}
                                                isInvalid={!!errors.specialty}
                                                value={values.specialty}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.specialty}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail4">
                                            <Form.Label>Ваше образование</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Введите ваше образование"
                                                name="education"
                                                onChange={handleChange}
                                                isValid={!errors.education && touched.education}
                                                isInvalid={!!errors.education}
                                                value={values.education}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.education}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail5">
                                            <Form.Label>Ваш опыт работы</Form.Label>
                                            <Form.Control
                                                type="text"
                                                placeholder="Введите ваш опыт работы"
                                                name="experience"
                                                onChange={handleChange}
                                                isValid={!errors.experience && touched.experience}
                                                isInvalid={!!errors.experience}
                                                value={values.experience}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.experience}
                                            </Form.Control.Feedback>
                                        </Form.Group>


                                        <Button variant="primary" type="submit" onClick={handleClose}>
                                            Изменить
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        ) : (<h3>Loading...</h3>)
                    }

                </Modal.Body>

            </Modal>

        </div>
    );
};

export default DoctorRoom;