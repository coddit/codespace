import React from 'react';
import styled from 'styled-components/macro';
import CommentDetail from './Detail';
import CommentContent from './Content';

const Wrapper = styled.div`
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
  background-color: #ffffff;
`;

const Comment = ({ body, ...details }) => (
  <Wrapper>
    <CommentDetail {...details} />
    <CommentContent body={body} />
  </Wrapper>
);

export default Comment;