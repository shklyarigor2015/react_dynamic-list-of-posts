import PropTypes from 'prop-types';

const userShape = PropTypes.shape({
  name: PropTypes.string,
  email: PropTypes.string,
  address: PropTypes.shape({
    city: PropTypes.string,
    street: PropTypes.string,
  }),
});

export const UserProps = {
  user: userShape,
};

const commentsShape = {
  body: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
};

export const CommentProps = {
  comment: PropTypes.shape({
    body: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export const CommentsListProps = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export const PostItemProps = {
  post: PropTypes.shape({
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        body: PropTypes.string,
        email: PropTypes.string,
        name: PropTypes.string,
      }).isRequired,
    ).isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        city: PropTypes.string,
        street: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export const PostListProps = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
    user: PropTypes.shape(userShape),
  })),
  commentList: PropTypes.arrayOf(
    PropTypes.shape(commentsShape),
  ),
};
