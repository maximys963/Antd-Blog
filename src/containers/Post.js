import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import { Card, Input  } from 'antd'
import CommentContainer from './Comment'
import CommentInput from './CommentInput'
import {postComment} from "../actionCreators/actionCreators";


const { TextArea } = Input;

const Contatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%
  margin-top: 5%;
`;

const Post  = (props) => (
    <Contatiner>
        <div>
        {
        props.data !== undefined
            ? props.data.posts
                .filter(elem => elem.id === parseInt(props.location.pathname.slice(7,8)))
                .map((elem, i) =>  (<Card key={i} title={elem.title} bordered={false} style={{ width: '600px' }}>
                    <p>{elem.body}</p>
                </Card>
                ))
        : "wait please ..."
    }
        </div>
        <div>{
            props.data !== undefined
                ? props.data.comments
                    .filter(elem => elem.postId === parseInt(props.location.pathname.slice(7,8)))
                    .map((elem, i) =>  (
                        <CommentContainer key={i}>{elem.body}</CommentContainer>
                    ))
                : "wait please ..."
        }</div>
        <CommentInput onPressButton={props.clicked} postNumber={parseInt(props.location.pathname.slice(7,8))}/>
    </Contatiner>
);


const mapStateToProps = (state) =>({
    data: state.db,
});

const mapDispatchToProps = (dispatch) => ({  clicked: (text) =>
{ dispatch(postComment(text)) }
});



export default connect(mapStateToProps, mapDispatchToProps)(Post);

// props.postBody.posts.filter(elem => elem.id === 1)
// parseInt(props.location.pathname.slice(7,8)
