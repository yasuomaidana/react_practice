import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../users/usersSlice";

import React from 'react'
import { Form,Row,Col, Button } from "react-bootstrap";

export const AddPostFormComponent = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title,content,userId)
            );
            setTitle('');
            setContent('');
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

  return (
    <section>
            <h2>Add a New Post</h2>
            <Form>
                <Form.Group as={Row} className="pb-2">
                    <Form.Label htmlFor="postTitle" as={Col} xs={4} md={1}>Post Title:</Form.Label>
                    <Col md={8} lg={4}><Form.Control
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={title}
                        onChange={onTitleChanged}
                    /></Col>
                </Form.Group>
                <Form.Group as={Row} className="pb-2">
                    <Form.Label htmlFor="postAuthor" as={Col} xs={4} md={1}>Author:</Form.Label>
                    <Col md={8} lg={4}>
                        <Form.Select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                            {usersOptions}
                        </Form.Select>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="pb-2">
                    <Form.Label htmlFor="postContent" as={Col} xs={4} md={1}>Content:</Form.Label>
                    <Col md={8} lg={4} className="ms-1">
                        <Form.Control as="textarea"
                        id="postContent"
                        name="postContent"
                        value={content}
                        onChange={onContentChanged}/>
                    </Col>
                </Form.Group>
                <Row>
                    <Col md={9} lg={5} className="text-center">
                    <Button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                    >Save Post</Button>
                    </Col>
                </Row>
            </Form>
        </section>
  );
}
