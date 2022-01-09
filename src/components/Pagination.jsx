import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { serviceContext } from '../contexts/serviceContext';

const Pagination = () => {
    const { totalPosts, postsPerPage, handlePage, currentPage } = useContext(serviceContext)
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div className="pagination-div">
            <ul>
                {
                    pageNumbers.map(page => (
                        <li key={page}>
                            {
                                currentPage === page ? (
                                    <Button variant="outline-success" style={{ backgroundColor: '#1C374C', border: 'none', padding: '0 20px', display: 'inline-block', height: '30px', marginTop: '13px', marginRight: '10px' }} onClick={() => {
                                        handlePage(page)
                                    }} >{page}</Button>
                                ) : (
                                    <Button style={{ backgroundColor: '#31B8BF', border: 'none', padding: '0 20px', display: 'inline-block', height: '30px', marginTop: '13px', marginRight: '10px' }} onClick={
                                        () => {
                                            handlePage(page)
                                        }
                                    } >{page}</Button>
                                )
                            }

                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Pagination;