import PostCard from './posts-card'
import { type Post } from '@/app/types/posts'

export function PostList({ posts }: { posts: Post[] | null }) {

  return (
    <>
      {
        posts?.map(post => {
          const {
            id,
            user,
            content
          } = post

          const {
            username: userName,
            name: userFullname,
            avatar_url: avatarUrl,
          } = user

          return (
            <PostCard
              key={id}
              userName={userName}
              userFullname={userFullname}
              avatarUrl={avatarUrl}
              content={content}
            />
          )
        })
      }
    </>
  )
}