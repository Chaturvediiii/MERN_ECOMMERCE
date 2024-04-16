import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  const [user,setUser] = useState({})
  useEffect(() => {
    const getUser = async () => {
      try {
        console.log(post.userRef);
        const res = await fetch(`/api/user/${post.userId}`);
        const data = await res.json();
        if (res.ok) {
          setUser(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getUser();
  }, [post]);
  return (
<div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-64 object-cover"
        src={user.avatar}
        alt="Profile Photo"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{user.username}</div>
        <p className="text-gray-700 text-base">{post.title}</p>
        <p className="text-gray-700 text-base">{post.createdAt}</p>
      </div>
    </div>
  );
}