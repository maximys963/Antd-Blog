import React from 'react';
import {Comment, Icon, Tooltip, Avatar} from 'antd';
import moment from 'moment';



const CommentContainer = (props) =>(
  <Comment
    style={{backgroundColor: 'white', width: '600px', marginTop: '20px'}}
    author={<a>Han Solo</a>}
    avatar={(
      <Avatar
        style={{ marginLeft: '10px'}}
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    )}
    content={(
      <p>{props.children}</p>
    )}
    datetime={(
      <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().fromNow()}</span>
      </Tooltip>
    )}/>
);

export default CommentContainer;