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

  const handleSubmit = async (e) => {
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

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <button 
        onClick={handleClick} 
        style={{ 
          backgroundColor: 'blue', 
          width: '100px', 
          height: '50px',
          fontSize: '12px',
          cursor: 'pointer',
          marginBottom: '400px' 
        }}
      >
        redis send
      </button>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input 
          type="text" 
          placeholder="Enter key" 
          value={key} 
          onChange={(e) => setKey(e.target.value)} 
          style={{ marginBottom: '20px', padding: '5px', fontSize: '16px', width: '200px' }}
        />
        <input 
          type="text" 
          placeholder="Enter value" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          style={{ marginBottom: '20px', padding: '5px', fontSize: '16px', width: '200px' }}
        />
        <button 
          type="submit" 
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: 'blue' }}
        >
          page jump
        </button>
      </form>
    </div>
  );
}