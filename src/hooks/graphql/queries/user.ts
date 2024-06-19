import { gql } from '@apollo/client';
export const USER_ACTIVITY = gql`
query UserActivity {
    userActivity {
        username
        public
        comments {
            totalComments
            content {
                title
            }
        }
        commentVotes {
            commentId
            voteType
        }
        postIts {
            content {
                title
            }
            totalPosts
        }
    }
}
`;