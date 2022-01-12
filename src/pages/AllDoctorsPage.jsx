import React, { useContext, useEffect } from 'react';
import { userContext } from '../contexts/userContext';
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap';
const AllDoctorsPage = () => {
    const { getAllDocs, doctors } = useContext(userContext)
    useEffect(() => {
        getAllDocs()
    }, [])

    return (
        <div style={{ textAlign: 'center', }}>
            {
                doctors ? (
                    <Table style={{ fontSize: '20px', color: '#31B8BF' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Ф.И.О доктора</th>
                                <th>Специальность</th>

                            </tr>
                        </thead>
                        <tbody>
                            {doctors.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td><><Link style={{ textDecoration: 'none', color: '#1C374C', }} to={'/doctor/' + item.id}>{item.username}</Link><br /></></td>
                                    <td>{item.specialty}</td>
                                </tr>

                            ))}
                        </tbody>
                    </Table>
                ) : (<h2>Loading</h2>)
            }
            {/* asd */}
        </div >
    );
};

export default AllDoctorsPage;