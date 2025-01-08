import React from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Choose Shivansh Physiotherapy Clinic",
      excerpt: "Discover why Shivansh Physiotherapy Clinic is your best choice for rehabilitation needs under the expert care of Doctor Naveen Moghi.",
      link: "/Blogs/Blog1"
    },
    {
      id: 2, 
      title: "The Importance of Physiotherapy",
      excerpt: "Learn about the vital role of physiotherapy in maintaining overall health and preventing future problems at Shivansh Physiotherapy Clinic.",
      link: "/Blogs/Blog2"
    },
    {
      id: 3,
      title: "Meet Doctor Naveen Moghi",
      excerpt: "Get to know Doctor Naveen Moghi, your trusted physiotherapist at Shivansh Physiotherapy Clinic in Ujjain.",
      link: "/Blogs/Blog3"
    },
    {
      id: 4,
      title: "Rehabilitation and Pain Management",
      excerpt: "Explore our comprehensive rehabilitation and pain management services at Shivansh Physiotherapy Clinic.",
      link: "/Blogs/Blog4"
    }
  ];

  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link href={blog.link} key={blog.id}>
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h2>
              <p className="text-gray-600">{blog.excerpt}</p>
              <div className="mt-4 text-amber-800 font-medium">Read More →</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogPage;
