'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface Comment {
  id: number
  author: string
  email: string
  content: string
  date: string
  replies?: Comment[]
}

export default function CommentSection({ postId, postTitle }: { postId: number; postTitle: string }) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: 'Alex Chen',
      email: 'alex@example.com',
      content: 'Great article! The explanation of RANS vs LES was particularly helpful for my research.',
      date: '2025-01-11',
    },
    {
      id: 2,
      author: 'Jordan Smith',
      email: 'jordan@example.com',
      content: 'Could you elaborate more on the shock-boundary layer interactions? I\'m working on a related project.',
      date: '2025-01-10',
    },
  ])

  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [authorEmail, setAuthorEmail] = useState('')

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() && authorName.trim()) {
      const comment: Comment = {
        id: Math.max(...comments.map(c => c.id), 0) + 1,
        author: authorName,
        email: authorEmail,
        content: newComment,
        date: new Date().toISOString().split('T')[0],
      }
      setComments([...comments, comment])
      setNewComment('')
      setAuthorName('')
      setAuthorEmail('')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Comments ({comments.length})</h2>

      {/* Comment Form */}
      <div className="mb-12 p-6 border border-border rounded-lg bg-card">
        <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
              className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
            />
            <input
              type="email"
              placeholder="Your Email (not published)"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              className="px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary"
            />
          </div>
          <textarea
            placeholder="Your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
            rows={4}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary resize-none"
          />
          <Button type="submit" className="bg-secondary hover:bg-secondary/90">
            Post Comment
          </Button>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="pb-6 border-b border-border last:border-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-semibold">{comment.author}</p>
                <p className="text-sm text-muted-foreground">{new Date(comment.date).toLocaleDateString()}</p>
              </div>
            </div>
            <p className="text-foreground mt-3">{comment.content}</p>
            <button className="mt-3 text-sm font-semibold text-secondary hover:underline">
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
