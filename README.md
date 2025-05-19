# X-Clone Post Component Guide

This guide will help you create a Post component that mimics X's (Twitter) UI for your portfolio project.

## Post Component Structure

The Post component should include the following elements:

1. **User Information Section**
   - Avatar (circular image)
   - Username
   - Handle (@username)
   - Post timestamp
   - More options menu (three dots)

2. **Content Section**
   - Post text
   - Optional image(s)
   - Optional link preview

3. **Interaction Section**
   - Comment button with count
   - Repost button with count
   - Like button with count
   - View count
   - Bookmark button
   - Share button

## Implementation Steps

### 1. Update Post Component Structure

```tsx
// src/components/post.tsx
import Image from 'next/image'
import { FaRegComment, FaRetweet, FaRegHeart, FaRegBookmark, FaRegShareSquare, FaEllipsisH } from 'react-icons/fa'
import { BsGraphUp } from 'react-icons/bs'

interface PostProps {
  username: string
  handle: string
  content: string
  timestamp: string
  avatarUrl: string
  imageUrl?: string
  likes: number
  comments: number
  reposts: number
  views: number
}

const Post = ({
  username,
  handle,
  content,
  timestamp,
  avatarUrl,
  imageUrl,
  likes,
  comments,
  reposts,
  views
}: PostProps) => {
  return (
    <div className="p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      {/* User Info Section */}
      <div className="flex items-start space-x-3">
        <Image
          src={avatarUrl}
          alt={username}
          width={48}
          height={48}
          className="rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <span className="font-bold">{username}</span>
              <span className="text-gray-500">@{handle}</span>
              <span className="text-gray-500">·</span>
              <span className="text-gray-500">{timestamp}</span>
            </div>
            <button className="text-gray-500 hover:text-blue-500">
              <FaEllipsisH />
            </button>
          </div>
          
          {/* Content Section */}
          <p className="mt-2 text-gray-900">{content}</p>
          {imageUrl && (
            <div className="mt-3 rounded-xl overflow-hidden">
              <Image
                src={imageUrl}
                alt="Post image"
                width={500}
                height={300}
                className="w-full object-cover"
              />
            </div>
          )}
          
          {/* Interaction Section */}
          <div className="flex items-center justify-between mt-3 text-gray-500">
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <FaRegComment />
              <span>{comments}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-green-500">
              <FaRetweet />
              <span>{reposts}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-red-500">
              <FaRegHeart />
              <span>{likes}</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-blue-500">
              <BsGraphUp />
              <span>{views}</span>
            </button>
            <div className="flex items-center space-x-4">
              <button className="hover:text-blue-500">
                <FaRegBookmark />
              </button>
              <button className="hover:text-blue-500">
                <FaRegShareSquare />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
```

### 2. Update ForYou Component

```tsx
// src/components/for-you.tsx
import Post from './post'

const ForYou = () => {
  const samplePost = {
    username: "John Doe",
    handle: "johndoe",
    content: "This is a sample post for my X-clone portfolio project! 🚀",
    timestamp: "2h",
    avatarUrl: "/path-to-avatar.jpg",
    imageUrl: "/path-to-image.jpg", // Optional
    likes: 42,
    comments: 12,
    reposts: 5,
    views: 1234
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Post {...samplePost} />
    </div>
  )
}

export default ForYou
```

## Required Dependencies

Add these to your `package.json`:

```json
{
  "dependencies": {
    "react-icons": "^4.10.0",
    "next": "latest"
  }
}
```

## Styling Notes

1. The component uses Tailwind CSS classes for styling
2. Hover effects are added to all interactive elements
3. The post has a subtle hover effect on the entire container
4. Icons are from react-icons library
5. Images are handled using Next.js Image component for optimization

## Usage Tips

1. Replace the sample data in ForYou component with your actual data
2. Add proper image paths for avatars and post images
3. Implement click handlers for the interaction buttons
4. Add proper routing for user profiles
5. Consider adding loading states and error handling
6. Implement proper date formatting for timestamps

## Additional Features to Consider

1. Add hover states for images to show alt text
2. Implement a dropdown menu for the more options button
3. Add animations for like/retweet interactions
4. Implement proper image galleries for multiple images
5. Add proper link previews for shared URLs
6. Implement proper date formatting with time-ago functionality

## Next Steps

1. Install required dependencies
2. Copy the Post component code
3. Update the ForYou component
4. Add your own styling customizations
5. Implement the interaction functionality
6. Add proper data fetching and state management