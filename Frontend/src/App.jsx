import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // ถ้าใช้ proxy ใน vite -> เรียกเป็น relative path ได้
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  const send = async () => {
    const payload = { name: 'Kanaphat' };
    const res = await fetch('/api/echo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const json = await res.json();
    console.log('reply', json);
    alert(JSON.stringify(json));
  };

  return (
    <div style={{ padding: 24 }}>
      <h1>Frontend (React)</h1>
      <p>Message from backend: <b>{message}</b></p>
      <button onClick={send}>Send POST to backend</button>
    </div>
  );
}

export default App;
