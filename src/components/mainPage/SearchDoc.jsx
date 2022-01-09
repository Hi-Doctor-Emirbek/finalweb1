import React, { useContext, useEffect, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { userContext } from '../../contexts/userContext';
import logo_img from '../../images/search.svg'
import { Link } from 'react-router-dom'

const SearchDoc = () => {
    const { getAllDocs, doctors } = useContext(userContext)
    useEffect(() => {
        getAllDocs()
    }, [])
    const [dropDownDiv, setDropDownDiv] = useState(<div style={{ display: 'none' }}></div>)
    function handleChange(value) {
        if (value.length > 2) {
            setDropDownDiv(<>

                <div style={{ backgroundColor: 'white', color: '#31B8BF', width: '100%', fontSize: '20px', height: 'auto', display: 'block' }}>
                    <h2>
                        Поиск врача
                    </h2>
                    <ul >
                        {
                            doctors.map(item => {
                                // console.log(item)
                                let res = new RegExp(value)
                                if (item.username.toLowerCase().match(res)) {
                                    return <Link to={'/doctor/' + item.id}><li style={{ listStyleType: 'doted', color: '#0d4e97', textAlign: 'left' }} >{item.username}</li></Link>
                                }
                            })
                        }
                    </ul>

                </div>
            </>)
        } else {
            setDropDownDiv(<div style={{ display: 'nonee' }}></div>)
        }
    }
    return (
        <>
            <InputGroup size="lg" >
                <FormControl placeholder="пример: имя врача" onChange={(e) => { handleChange(e.target.value) }} />
                <InputGroup.Text id="inputGroup-sizing-lg"  >
                    <img src={logo_img} alt="" />
                </InputGroup.Text>
            </InputGroup>
            {dropDownDiv}
        </>
    );
};

export default SearchDoc;