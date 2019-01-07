import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import { Card, Input, Button } from 'antd';
import CommentContainer from '../presentational/Comment';
import CommentInput from '../presentational/CommentInput';
import {postComment, dispatchPosition} from '../actionCreators/actionCreators';
import {postsSelector} from '../selectors/Selectors';


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
    {props.passPosition(props.location.pathname)}
    <div>
      {
        props.data !== undefined
          ? props.data.posts
            .filter(elem => elem.id === parseInt(props.location.pathname.slice(7,8)))
            .map((elem, i) =>  (<Card key={i} title={elem.title} bordered={false} style={{ width: '600px' }}>
              <p>{elem.body}</p>
            </Card>
            ))
          : <Button shape={'circle'} loading />
      }
    </div>
    <div>{
      props.data !== undefined
        ? props.data.comments
          .filter(elem => elem.postId === parseInt(props.location.pathname.slice(7,8)))
          .map((elem, i) =>  (
            <CommentContainer key={i}>{elem.body}</CommentContainer>
          ))
        : <Button shape={'circle'} loading />
    }</div>
    <CommentInput onPressButton={props.clicked} postNumber={parseInt(props.location.pathname.slice(7,8))}/>
  </Contatiner>
);


const mapStateToProps = (state) =>({
  data: state.db,
});


const mapDispatchToProps = (dispatch) => (
  {
    clicked: (text) => {dispatch(postComment(text));},
    passPosition: (location) => {dispatch(dispatchPosition(location));}}

);


export default connect(mapStateToProps, mapDispatchToProps)(Post);

// props.postBody.posts.filter(elem => elem.id === 1)
// parseInt(props.location.pathname.slice(7,8)
// postChosen: postsSelector(state.db, state.currentPosition)