import React, { useContext, useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { userContext } from "../../contexts/userContext";
const SignUpModal = (props) => {
    const { signUpUser } = useContext(userContext);
    let schema
    function handleSignup(data, role) {
        signUpUser(data.username, data.password, data.email, role, data.age, data.specialty, data.education, data.experience);
        props.handleClose();
    }
    const [role, setRole] = useState('doc')
    const [content, setContent] = useState()
    useEffect(() => {
        if (role === 'doc') {
            schema = yup.object().shape({
                username: yup.string().min(2).max(30).required("Required"),
                role: yup.string().min(4).max(6).required("Required"),
                email: yup.string().email().min(3).max(255).required("Required"),
                age: yup.number().min(1).max(220).required("Required"),
                specialty: yup.string().min(2).max(30).required("Required"),
                education: yup.string().min(2).max(30).required("Required"),
                experience: yup.string().min(2).max(30).required("Required"),
                password: yup
                    .string()
                    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
                    .min(8)
                    .max(24)
                    .required("Required"),
                passwordConfirmation: yup
                    .string()
                    .oneOf([yup.ref("password"), null], "Passwords must match")
                    .required("Required"),
            });
            setContent(<Formik
                validationSchema={schema}
                onSubmit={(data) => {
                    handleSignup(data, 'doctor');
                }}
                initialValues={{
                    username: "",
                    role: 'doctor',
                    email: "",
                    age: "",
                    specialty: "",
                    experience: "",
                    education: "",
                    password: "",
                    passwordConfirmation: "",
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form
                        style={{ width: "90%", margin: '0 auto' }}
                        className="bg-light p-4"
                        onSubmit={handleSubmit}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Ваш профиль</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите ваш профиль"
                                name="username"
                                onChange={handleChange}
                                isValid={!errors.username && touched.username}
                                isInvalid={!!errors.username}
                                value={values.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail1">
                            <Form.Label>Email адрес</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите email"
                                name="email"
                                onChange={handleChange}
                                isValid={!errors.email && touched.email}
                                isInvalid={!!errors.email}
                                value={values.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail2">
                            <Form.Label>Ваш возраст</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите ваш возраст"
                                name="age"
                                onChange={handleChange}
                                isValid={!errors.age && touched.age}
                                isInvalid={!!errors.age}
                                value={values.age}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.age}
                            </Form.Control.Feedback>
                        </Form.Group>
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
                        <Form.Group className="mb-3" controlId="formBasicPassword1">
                            <Form.Label>Пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Введите Пароль"
                                name="password"
                                onChange={handleChange}
                                isValid={!errors.password && touched.password}
                                isInvalid={!!errors.password}
                                value={values.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Повторите пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Повторите пароль"
                                name="passwordConfirmation"
                                onChange={handleChange}
                                isValid={
                                    !errors.passwordConfirmation &&
                                    touched.passwordConfirmation
                                }
                                isInvalid={!!errors.passwordConfirmation}
                                value={values.passwordConfirmation}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.passwordConfirmation}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>
                    </Form>
                )}
            </Formik>)
        } else {
            schema = yup.object().shape({
                username: yup.string().min(2).max(30).required("Required"),
                role: yup.string().min(4).max(6).required("Required"),
                email: yup.string().email().min(3).max(255).required("Required"),
                age: yup.number().min(1).max(220).required("Required"),
                password: yup
                    .string()
                    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
                    .min(8)
                    .max(24)
                    .required("Required"),
                passwordConfirmation: yup
                    .string()
                    .oneOf([yup.ref("password"), null], "Passwords must match")
                    .required("Required"),
            });
            setContent(<Formik
                validationSchema={schema}
                onSubmit={(data) => {
                    handleSignup(data, 'pacient');
                }}
                initialValues={{
                    username: "",
                    role: 'pacient',
                    email: "",
                    age: "",
                    specialty: "",
                    experience: "",
                    education: "",
                    password: "",
                    passwordConfirmation: "",
                }
                }

            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form
                        style={{ width: "90%", margin: '0 auto' }}
                        className="bg-light p-4"
                        onSubmit={handleSubmit}
                    >

                        <Form.Group className="mb-3" controlId="formBasicEmail1">
                            <Form.Label>Ваш профиль</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите профиль"
                                name="username"
                                onChange={handleChange}
                                isValid={!errors.username && touched.username}
                                isInvalid={!!errors.username}
                                value={values.username}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.username}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail2">
                            <Form.Label>Email адрес</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Введите email"
                                name="email"
                                onChange={handleChange}
                                isValid={!errors.email && touched.email}
                                isInvalid={!!errors.email}
                                value={values.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail3">
                            <Form.Label>Ваш возраст</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Введите возраст"
                                name="age"
                                onChange={handleChange}
                                isValid={!errors.age && touched.age}
                                isInvalid={!!errors.age}
                                value={values.age}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.age}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword4">
                            <Form.Label>Ваш пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Введите пароль"
                                name="password"
                                onChange={handleChange}
                                isValid={!errors.password && touched.password}
                                isInvalid={!!errors.password}
                                value={values.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword5">
                            <Form.Label>Повторите пароль</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Повторите пароль"
                                name="passwordConfirmation"
                                onChange={handleChange}
                                isValid={
                                    !errors.passwordConfirmation &&
                                    touched.passwordConfirmation
                                }
                                isInvalid={!!errors.passwordConfirmation}
                                value={values.passwordConfirmation}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.passwordConfirmation}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Отправить
                        </Button>
                    </Form>
                )}
            </Formik >)
        }
    }, [role])


    return (
        <>
            <Modal show={props.show} onHide={() => {
                props.handleClose()
                setRole('doc')
            }}>
                <Modal.Header closeButton>
                    <Modal.Title>Регистрация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Check
                            inline
                            label="Доктор"
                            name="group1"
                            type="radio"
                            id="inline-radio-1"
                            onChange={() => setRole('doc')}
                            defaultChecked
                        />
                        <Form.Check
                            inline
                            label="Пациент"
                            name="group1"
                            type="radio"
                            id="inline-radio-2"
                            onChange={() => setRole('pac')}
                        />
                    </Form.Group>
                    {content}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default SignUpModal;