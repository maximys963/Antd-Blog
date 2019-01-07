import React, {Component} from 'react';
import {connect} from 'react-redux'
import {doRequest} from "../actionCreators/actionCreators";
import { Collapse } from 'antd';

const Panel = Collapse.Panel;

function callback(key) {
    console.log(key);
}


class List extends Component{
    render(){
        return(
            <div>
                <button style={{ width: '160px'}} onClick={ () => this.props.clicked()}>Simple button</button>
                <Collapse defaultActiveKey={['1']} onChange={callback}>
                    { this.props.animes !== undefined
                        ?this.props.animes.map( (elem, i) => (
                            <Panel header={elem.title} key={i}>
                                <p>{elem.description}</p>
                            </Panel>
                         ))
                         : null

                    }






                </Collapse>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({  clicked: () =>
    { dispatch(doRequest()) }
});

const mapStateToProps = (state) =>({
    animes: state.data
});

export default connect(mapStateToProps,mapDispatchToProps)(List);


