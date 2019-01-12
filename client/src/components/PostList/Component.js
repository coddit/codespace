import React from 'react';
import styled from 'styled-components/macro';
import PostListItem from './Item';

const List = styled.ul`
  list-style: none;
  border: 1px solid ${props => props.theme.border};
  border-radius: 2px;
`;

const mapPosts = posts =>
  posts.map((post, index) => <PostListItem key={index} {...post} />);

const PostList = ({ posts }) => posts && <List>{mapPosts(posts)}</List>;

export default PostList;