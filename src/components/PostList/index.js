import React from 'react';
import { ScrollView } from 'react-native';

import Post from '../Post';
import styles from './styles';

const PostList = ({ posts }) => (
  <ScrollView style={styles.mainList}>
    {posts.map(post => (
      <Post key={post.id} title={post.title} author={post.author} resume={post.resume} />
    ))}
  </ScrollView>
);

export default PostList;
