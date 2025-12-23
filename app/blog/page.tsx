import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Adeloop',
  description: 'Latest insights, tutorials, and updates from the Adeloop team.',
}

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'Getting Started with Adeloop Analytics',
    excerpt: 'Learn how to set up your first analytics dashboard and start gaining insights from your data.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Tutorial',
    slug: 'getting-started-adeloop-analytics'
  },
  {
    id: '2',
    title: 'Advanced Data Visualization Techniques',
    excerpt: 'Discover powerful visualization methods to make your data tell compelling stories.',
    date: '2025-01-10',
    readTime: '8 min read',
    category: 'Guide',
    slug: 'advanced-data-visualization'
  },
  {
    id: '3',
    title: 'Building Real-time Dashboards',
    excerpt: 'Step-by-step guide to creating interactive dashboards that update in real-time.',
    date: '2025-01-05',
    readTime: '12 min read',
    category: 'Tutorial',
    slug: 'building-realtime-dashboards'
  },
  {
    id: '4',
    title: 'Data Security Best Practices',
    excerpt: 'Essential security measures to protect your data and ensure compliance.',
    date: '2025-01-01',
    readTime: '6 min read',
    category: 'Security',
    slug: 'data-security-best-practices'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and updates from the Adeloop team to help you make the most of your data.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {post.category}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-card-foreground mb-4">
            Stay Updated
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest posts and updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}