import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Post = ({ title, author, resume }) => (
  <View style={styles.mainCard}>
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.authorText}>{author}</Text>
    <Text style={styles.resumeText}>{resume}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Post;
