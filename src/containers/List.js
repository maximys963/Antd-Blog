import React, {Component} from 'react';
import {connect} from 'react-redux'
import {doRequest} from "../actionCreators/actionCreators";
import styled from 'styled-components';
import ListItem from '../presentational/ListItem'

const Container = styled.div`
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
 
`;



class List extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <Container>
                {
                    this.props.postData !== undefined
                    ? this.props.postData.posts.map( (elem) =>(
                            <ListItem text={elem.title} key={elem.id} id={elem.id} onClick={()=>{console.log("hello")} }/>
                        ))
                    : "wait please ..."

                }
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({  clicked: () =>
    { dispatch(doRequest()) }
});

const mapStateToProps = (state) =>({
    postData: state.db
});

export default connect(mapStateToProps,mapDispatchToProps)(List);


