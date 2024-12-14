import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <div className="container">
      {/* Blog Heading */}
      <div className="blogHeading">
        <h1 style={{ color: 'blue' }}>Blog</h1>
        <h3>Latest Blogs</h3>
      </div>

      {/* Blog Posts Section */}
      <div className="blogPostsSection">
        {/* Blog Post 1 */}
        <div className="blogPost">
          <div className="blogImageWrapper">
            <Image
              src="/blog1.webp"  // Image path for Blog 1
              alt="Blog Post 1"
              width={600}
              height={400}
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className="blogDetails">
            <h2 style={{ color: 'blue' }}>Blog Post 1</h2>
            <p><strong>Author 1</strong> | December 9, 2024 | <em>Design</em></p>
            <p>This is a brief excerpt from the blog post.</p>
            <Link href="/blog/blog-post-1">Read More</Link>
          </div>
        </div>

        {/* Blog Post 2 */}
        <div className="blogPost">
          <div className="blogImageWrapper">
            <Image
              src="/blog2.webp"  // Image path for Blog 2
              alt="Blog Post 2"
              width={600}
              height={400}
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className="blogDetails">
            <h2 style={{ color: 'blue' }}>Blog Post 2</h2>
            <p><strong>Author 2</strong> | December 8, 2024 | <em>Technology</em></p>
            <p>This is another brief excerpt from the second blog post.</p>
            <Link href="/blog/blog-post-2">Read More</Link>
          </div>
        </div>

        {/* Blog Post 3 */}
        <div className="blogPost">
          <div className="blogImageWrapper">
            <Image
              src="/blog3.webp"  // Image path for Blog 3
              alt="Blog Post 3"
              width={600}
              height={400}
              style={{ borderRadius: '8px' }}
            />
          </div>
          <div className="blogDetails">
            <h2 style={{ color: 'blue' }}>Blog Post 3</h2>a
            <p><strong>Author 3</strong> | December 7, 2024 | <em>Travel</em></p>
            <p>An excerpt from the third blog post about travel.</p>
            <Link href="/blog/blog-post-3">Read More</Link>
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="sidebar">
        <div className="search">
          <h3 style={{ color: 'blue' }}>Search</h3>
          <input
            type="text"
            placeholder="Search here"
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div className="categories">
          <h3 style={{ color: 'blue' }}>Categories</h3>
          <ul>
            <li><Link href="/blog/category/women">Women (21)</Link></li>
            <li><Link href="/blog/category/men">Men (15)</Link></li>
            <li><Link href="/blog/category/kids">Kids (9)</Link></li>
          </ul>
        </div>

        <div className="recentPosts">
          <h3 style={{ color: 'blue' }}>Recent Posts</h3>
          <ul>
            <li>
              <Link href="/blog/recent-post-1">Recent Blog 1 - December 6, 2024</Link>
            </li>
            <li>
              <Link href="/blog/recent-post-2">Recent Blog 2 - December 5, 2024</Link>
            </li>
            <li>
              <Link href="/blog/recent-post-3">Recent Blog 3 - December 4, 2024</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Section with more links */}
      <div className="footerLinks">
        <div className="footerSection">
          <h2 style={{ color: 'blue' }}>Hekto</h2>
          <p>Enter your email address:</p>
          <input
            type="email"
            placeholder="Email Address"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />
          <button
            style={{
              backgroundColor: 'pink',
              color: 'white',
              padding: '10px 20px',
              marginTop: '10px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Sign Up
          </button>
        </div>

        <div className="footerSection">
          <h3 style={{ color: 'blue' }}>Categories</h3>
          <ul>
            <li><Link href="/laptops-computers">Laptops & Computers</Link></li>
            <li><Link href="/cameras-photography">Cameras & Photography</Link></li>
            <li><Link href="/smartphones-tablets">Smart Phones & Tablets</Link></li>
            <li><Link href="/video-games-consoles">Video Games & Consoles</Link></li>
            <li><Link href="/waterproof-headphones">Waterproof Headphones</Link></li>
          </ul>
        </div>

        <div className="footerSection">
          <h4 style={{ color: 'blue' }}>Customer Care</h4>
          <ul>
            <li><Link href="/my-account">My Account</Link></li>
            <li><Link href="/discount">Discount</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/order-history">Order History</Link></li>
            <li><Link href="/order-tracking">Order Tracking</Link></li>
          </ul>
        </div>

        <div className="footerSection">
          <h4 style={{ color: 'blue' }}>Pages</h4>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/browse-the-shop">Browse the Shop</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li><Link href="/pre-built-pages">Pre-Built Pages</Link></li>
            <li><Link href="/visual-composer-elements">Visual Composer Elements</Link></li>
            <li><Link href="/woocommerce-pages">WooCommerce Pages</Link></li>
          </ul>
        </div>

        <div className="footerBottom">
          <p>&copy; Webecy - All Rights Reserved</p>
        </div>

        {/* Moved Contact Info Section to the bottom */}
        <div className="contactInfo" style={{ marginTop: '20px' }}>
          <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
