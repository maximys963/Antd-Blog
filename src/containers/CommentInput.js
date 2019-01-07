import React, {Component} from 'react';
import { Input, Button } from 'antd';
import styled from 'styled-components'
import {connect} from 'react-redux';
import {START_ADDING_COMMENT} from "../actions/actions";
import {postComment} from "../actionCreators/actionCreators";


const {TextArea} = Input;

const CommentInpContainer = styled.div`
 width: 600px;
 height: 200px;
 margin-top: 20px;
 display: flex;
 flex-direction: column;
 justify-content: flex-start;
 align-items: flex-end;
 
`;

class CommentInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: null
        }
    }

    toggleInput(e){
        this.setState({
            inputValue: e.target.value
        })
    }


    render(){
        const onClickAdd = () => {
         this.props.onPressButton(
                {   postId: this.props.postNumber,
                    body:this.state.inputValue
                }
            );
            window.location.reload();
        };
        return(
            <CommentInpContainer>
                <TextArea  style={{width: '100%' }} value={this.state.inputValue} onChange={(e) =>this.toggleInput(e)}/>
                <Button style={{marginTop: '10px'}} onClick={onClickAdd}>Add comment</Button>
            </CommentInpContainer>
        );
    }
}


export default CommentInput;