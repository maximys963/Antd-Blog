import React from 'react';
import {connect} from 'react-redux'
import styled from 'styled-components';
import { Card } from 'antd'
import CommentContainer from './Comment'



const Contatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%
  margin-top: 5%;
`;

const Post  = (props, match) => (
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
                        <CommentContainer>{elem.body}</CommentContainer>
                    ))
                : "wait please ..."

        }</div>
    </Contatiner>
);


const mapStateToProps = (state) =>({
    data: state.db,
});

export default connect(mapStateToProps)(Post);

// props.postBody.posts.filter(elem => elem.id === 1)
// parseInt(props.location.pathname.slice(7,8)
