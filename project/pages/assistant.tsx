
import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Assistant: NextPage = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const aiMessage = { text: data.message, isUser: false };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Error fetching AI message:', err);
      setMessages((prev) => [...prev, { text: 'Error talking to AI 😢', isUser: false }]);
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>NeuroLens Assistant</title>
        <meta name="description" content="Chat with your cognitive assistant" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NeuroLens Assistant</h1>

        <div className={styles.chatContainer}>
          {messages.map((msg, index) => (
            <div key={index} className={msg.isUser ? styles.userMessage : styles.aiMessage}>
              {msg.text}
            </div>
          ))}
          {loading && <div className={styles.aiMessage}>Typing...</div>}
        </div>

        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className={styles.chatInput}
          />
          <button type="submit" className={styles.sendButton} disabled={loading}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default Assistant;
