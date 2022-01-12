import React, { useContext, useEffect } from 'react';
import * as yup from 'yup'
import { Formik } from 'formik';
import { serviceContext } from '../contexts/serviceContext';
import { Form, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router';

const EditPage = () => {
    const { saveEditedServices, getServicesToEdit, serviceToEdit } = useContext(serviceContext)
    const params = useParams()
    useEffect(() => {
        getServicesToEdit(params.id)
    }, [])
    const schema = yup.object().shape({
        name: yup.string().min(2).max(30).required("Required"),
        category: yup.string().required("Required"),
        price: yup.string().min(3).max(255).required("Required"),
    })
    const navigate = useNavigate()
    return (
        <div>
            <h2>Редактирование</h2>
            {
                serviceToEdit ? (
                    <Formik
                        validationSchema={schema}
                        onSubmit={(data, { resetForm }) => {
                            saveEditedServices(data);
                            // resetForm()
                            navigate(-1)
                        }}
                        initialValues={serviceToEdit}
                    >
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form
                                style={{ width: "90%", margin: '0 auto' }}
                                className="bg-light p-4"
                                onSubmit={handleSubmit}
                            >
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Название услуги

                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите название услуги"
                                        name="name"
                                        onChange={handleChange}
                                        isValid={!errors.name && touched.name}
                                        isInvalid={!!errors.name}
                                        value={values.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail1">
                                    <Form.Label>Категория услуги</Form.Label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        name="category"
                                        onChange={handleChange}
                                        isValid={!errors.category && touched.category}
                                        isInvalid={!!errors.category}
                                        value={values.category}
                                    >
                                        <option>Выберите категорию</option>
                                        <option value="Анализы">Анализы</option>
                                        <option value="Диагностика">Диагностика</option>
                                        <option value="Лечение">Лечение</option>
                                        <option value="Реабилитация">Реабилитация</option>
                                    </Form.Select>

                                    <Form.Control.Feedback type="invalid">
                                        {errors.category}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail2">
                                    <Form.Label>Цена услуги</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Введите цену услуги"
                                        name="price"
                                        onChange={handleChange}
                                        isValid={!errors.price && touched.price}
                                        isInvalid={!!errors.price}
                                        value={values.price}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.price}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Отправить
                                </Button>
                            </Form>
                        )}
                    </Formik>
                ) : (
                    <h2>Loading...</h2>
                )
            }

        </div>
    );
};

export default EditPage;