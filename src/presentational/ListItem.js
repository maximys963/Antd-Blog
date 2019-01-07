import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const ListItemWrapper = styled.div`
  height: auto;
  width: auto;
  margin: 20px 40px 20px 40px;
  box-shadow: 21px 17px 138px -31px rgba(0,0,0,0.75);
`;


const {Meta} = Card;

const ListItem = (props) =>(
    <ListItemWrapper>
        <Link to={`/posts/${props.id}`}>
            <Card
                hoverable
                style={{ width: 240 }}
                onClick={props.onClick}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
                }
                 >
                <Meta
                    title={props.text}
                    description="07/01/2019"
                />
            </Card>
        </Link>
    </ListItemWrapper>
    )

;



export default ListItem