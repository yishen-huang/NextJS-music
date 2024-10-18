'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const router = useRouter();
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const handleClick = () => {
    router.push('/audio/upload');
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const res = await fetch('/api/redis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key, value }),
    });

    if (res.ok) {
      alert('Data stored in Redis');
    } else {
      alert('Failed to store data');
    }
  };

  const handleRedirect = () => {
    window.location.href = 'https://www.baidu.com';
  };

  return (
    <div className="container">

      <button onClick={handleClick} className="button">
        page jump
      </button>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Please enter key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Please enter value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="input"
        />
        <button type="submit" className="submit-button">
          redis send
        </button>
      </form>
      <button onClick={handleRedirect} className="redirect-button">
        Go to Baidu
      </button>
      <p>本页面支持音乐列表管理和数据存储到Redis等功能.</p>
    </div>
  );
}
