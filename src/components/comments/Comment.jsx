import React, { useContext, useEffect, useState } from 'react'
import { FormControl, InputGroup, Button, Card } from 'react-bootstrap';
import { timeSince } from '../../config/calcTimeLeft';
import { commentsContext } from '../../contexts/commentsContext';
import CommentBody from './CommentBody';
const Comment = (props) => {
    const { addComments, getCommentsForRoom, commentToEdit, getCommentToEdit, saveEditedComment, deleteComment, comments } = useContext(commentsContext)
    const [comment, setComment] = useState('')
    function handleChange(e) {
        //   console.log(true)
        setComment(e.target.value)
    }
    function handleDelete(com) {
        deleteComment(com)
    }
    useEffect(() => {
        getCommentsForRoom(props.doctor.id)
    }, [])
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    function creatingComment(e) {
        e.preventDefault()
        let time = new Date();
        let timeMls = Date.now();
        addComments(comment, user.username, props.doctor.id, time, timeMls)
        setComment('')
    }
    let commenting
	const [bool, setBool] = useState(false)
	const [editComm, setEditComm] = useState('')
	function handleChangeEdit(e){
		setEditComm(e.target.value)
	}
	function saveComment(item){
		saveEditedComment(editComm, item.id)
		setBool(false)
	}
    function handleEdit(item) {
		setBool(true)
		commenting = <><InputGroup className="mb-3 createComment">
		<FormControl
			rows={2}
			as="textarea"
			placeholder="Оставьте отзыв о враче"
			maxLength="140"
			onChange={handleChangeEdit}
			value={comment}
		/>
		<Button style={{ backgroundColor: '#31B8BF', border: 'none' }} onClick={creatingComment}>
			Отправить
		</Button>
	</InputGroup><Button onClick={()=> saveComment(item)}>Сохранить</Button></>
        getCommentToEdit(item.id)
    }
    return (
        <>
			{
				user.type === 'pacient' ? (
					<div className='mt-4 container'>
                <InputGroup className="mb-3 createComment">
                    <FormControl
                        rows={2}
                        as="textarea"
                        placeholder="Оставьте отзыв о враче"
                        maxLength="140"
                        onChange={handleChange}
                        value={comment}
                    />
                    <Button style={{ backgroundColor: '#31B8BF', border: 'none' }} onClick={creatingComment}>
                        Отправить
                    </Button>
                </InputGroup>

            </div>
				) : (
					<></>
				)
			}
            
            <div className="mt-4 container bg-secondary">
                {
                    comments ? (comments.sort((a, b) => b.createdAtMs - a.createdAtMs).map(item => (
                        <CommentBody key={item.id} item={item} doctor={props.doctor}/>
                    ))) : (<h2>Loading...</h2>)
                }

            </div>
        </>
    )
};

export default Comment;