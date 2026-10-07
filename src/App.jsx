import { useState } from "react";

function Header({ title, subtitle }) {
  return (
    <header style={{ textAlign: "center", marginBottom: "20px" }}>
      <h1 style={{ color: "#1F4E79" }}>{title}</h1>
      <p style={{ color: "#666" }}>{subtitle}</p>
    </header>
  );
}

function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        width: "280px",
        margin: "0 auto 20px",
        textAlign: "center",
      }}
    >
      <h3>Interactive Counter</h3>

      <p>
        Current Count: <strong>{count}</strong>
      </p>

      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "8px", padding: "6px 12px" }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginRight: "8px", padding: "6px 12px" }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ padding: "6px 12px" }}
      >
        Reset
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Header
        title="Open-Source Software Practices"
        subtitle="Experiment 9: React.js Component Architecture Demo"
      />

      <CounterComponent />
    </div>
  );
}