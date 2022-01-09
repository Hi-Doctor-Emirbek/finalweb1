import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { serviceContext } from '../contexts/serviceContext';

const CartPage = () => {
    const { changeCountService, getAll, cart } = useContext(serviceContext)
    useEffect(() => {
        getAll()
    }, [])
    return (
        <div>
            <h2 style={{ color: '#31B8BF', textAlign: 'center', marginTop: '25px' }} >Корзина</h2>
            {
                cart ? (
                    cart.services.length ? (
                        <>
                            <Table striped bordered hover style={{ fontSize: '12px' }} >
                                <thead>
                                    <tr>
                                        <th>Услуга</th>
                                        <th align="right">Категория</th>
                                        <th align="right">Количество</th>
                                        <th align="right">Сумма</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {cart.services.map((item) => (
                                        <tr
                                            key={item.service.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <td component="th" scope="row">
                                                {item.service.name}
                                            </td>
                                            <td align="right">{item.service.category}</td>
                                            <td align="right">
                                                <input type="number" onChange={(e) => changeCountService(e.target.value, item.service.id)} value={item.count} style={{ width: '40px' }} />
                                            </td>
                                            <td align="right">{item.subPrice}</td>
                                        </tr>
                                    ))}

                                    <tr >
                                        <td colSpan={3} align="right" style={{ fontWeight: 'bold', fontSize: '18px' }}>Total: </td>
                                        <td align="right" style={{ fontWeight: 'bold', fontSize: '18px' }}>{cart ? cart.totalPrice : 0} сом</td>
                                    </tr>

                                </tbody>
                            </Table>


                            <h3>Total price: {cart ? cart.totalPrice : 0} сом</h3>
                            {

                                cart ? <Link to='/order'><Button style={{ backgroundColor: '#31B8BF', border: 'none' }}>Произвести оплату</Button></Link> : <></>
                            }</>
                    ) : (
                        <h2 style={{ color: '#1C374C', textAlign: 'center', marginTop: '25px' }}>Вы еще не добавили услуги в корзину</h2>
                    )
                ) : (
                    <h2 style={{ color: '#1C374C', textAlign: 'center', marginTop: '25px' }}>Вы еще не добавили услуги в корзину</h2>
                )
            }



        </div>
    );
};

export default CartPage;