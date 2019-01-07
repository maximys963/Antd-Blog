import React, {Component} from 'react';
import {connect} from 'react-redux';
import {doRequest} from '../actionCreators/actionCreators';
import styled from 'styled-components';
import ListItem from '../presentational/ListItem';
import {Button} from 'antd';

const Container = styled.div`
 margin-top: 5%;
 display: flex;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: center;
 align-items: center;
`;



class List extends Component{

  render(){
    return(
      <Container>
        {
          this.props.postData !== undefined
            ? this.props.postData.posts.map( (elem) =>(
              <ListItem text={elem.title} key={elem.id} id={elem.id}/>
            ))
            : <Button shape={'circle'} loading />
        }
      </Container>
    );
  }
}



const mapStateToProps = (state) =>({
  postData: state.db
});

export default connect(mapStateToProps)(List);


