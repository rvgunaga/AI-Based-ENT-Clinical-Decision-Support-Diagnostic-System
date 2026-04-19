import React, { useState } from "react";

function App() {
  const [page, setPage] = useState("dashboard");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const analyzeVoice = async () => {
    if (!file) {
      setResult("Please select a WAV file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setResult("Analyzing voice sample...");

    try {
      const res = await fetch("http://127.0.0.1:8000/analyze-voice/", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      setResult(
        `Prediction: ${data.prediction} | Confidence: ${data.confidence}%`
      );
    } catch {
      setResult("Backend connection failed.");
    }
  };

  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      fontFamily: "Arial",
      background: "#0f172a",
      color: "white"
    }}>

      {/* Sidebar */}
      <div style={{
        width: "250px",
        background: "#111827",
        padding: "25px",
        borderRight: "1px solid #1f2937"
      }}>
        <h2 style={{ color: "#38bdf8" }}>ENT AI</h2>
        <p style={{ color: "#94a3b8" }}>Clinical Intelligence</p>
        <hr style={{ borderColor: "#1f2937" }} />

        <Menu title="Dashboard" onClick={() => setPage("dashboard")} />
        <Menu title="Patients" onClick={() => setPage("patients")} />
        <Menu title="Voice Analysis" onClick={() => setPage("voice")} />
        <Menu title="Audiogram" />
        <Menu title="Reports" />
        <Menu title="Settings" />
      </div>

      {/* Main */}
      <div style={{ flex: 1, padding: "30px" }}>

        {/* Header */}
        <div style={{
          background: "#111827",
          padding: "20px",
          borderRadius: "14px",
          marginBottom: "25px"
        }}>
          <h1 style={{ margin: 0 }}>AI-Based ENT Clinical Decision Support</h1>
          <p style={{ color: "#94a3b8" }}>
            Smart diagnostics • Faster triage • Better outcomes
          </p>
        </div>

        {/* Dashboard */}
        {page === "dashboard" && (
          <>
            <h2>Dashboard</h2>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Card title="Patients Today" value="24" />
              <Card title="Voice Tests" value="11" />
              <Card title="High Risk Cases" value="3" />
              <Card title="Reports Generated" value="17" />
            </div>

            <div style={{
              marginTop: "25px",
              background: "#111827",
              padding: "20px",
              borderRadius: "14px"
            }}>
              <h3>Today's Insights</h3>
              <p style={{ color: "#94a3b8" }}>
                Most common complaint: Hoarseness
              </p>
              <p style={{ color: "#94a3b8" }}>
                Average triage time reduced by 31%
              </p>
            </div>
          </>
        )}

        {/* Patients */}
        {page === "patients" && (
          <>
            <h2>Patient Registration</h2>

            <SectionBox>
              <input placeholder="Full Name" style={inputStyle} />
              <input placeholder="Age" style={inputStyle} />
              <input placeholder="Phone" style={inputStyle} />
              <input placeholder="Symptoms" style={inputStyle} />
              <button style={btnStyle}>Save Patient</button>
            </SectionBox>
          </>
        )}

        {/* Voice */}
        {page === "voice" && (
          <>
            <h2>Voice Disorder Screening</h2>

            <SectionBox>
              <input
                type="file"
                accept=".wav"
                onChange={(e) => setFile(e.target.files[0])}
              />

              <br /><br />

              <button style={btnStyle} onClick={analyzeVoice}>
                Analyze Voice
              </button>

              <div style={{
                marginTop: "20px",
                background: "#0f172a",
                padding: "18px",
                borderRadius: "12px",
                border: "1px solid #1f2937"
              }}>
                {result || "Upload a voice sample for AI analysis."}
              </div>
            </SectionBox>
          </>
        )}

      </div>
    </div>
  );
}

function Menu({ title, onClick }) {
  return (
    <p
      onClick={onClick}
      style={{
        cursor: "pointer",
        padding: "10px",
        borderRadius: "8px",
        color: "#e5e7eb"
      }}
    >
      {title}
    </p>
  );
}

function Card({ title, value }) {
  return (
    <div style={{
      background: "#111827",
      padding: "20px",
      borderRadius: "14px",
      width: "220px",
      boxShadow: "0 4px 18px rgba(0,0,0,0.2)"
    }}>
      <p style={{ color: "#94a3b8", marginBottom: "10px" }}>{title}</p>
      <h1 style={{ margin: 0, color: "#38bdf8" }}>{value}</h1>
    </div>
  );
}

function SectionBox({ children }) {
  return (
    <div style={{
      background: "#111827",
      padding: "25px",
      borderRadius: "14px",
      maxWidth: "600px"
    }}>
      {children}
    </div>
  );
}

const btnStyle = {
  padding: "12px 18px",
  background: "#0284c7",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "bold"
};

const inputStyle = {
  display: "block",
  marginBottom: "12px",
  padding: "12px",
  width: "100%",
  maxWidth: "350px",
  borderRadius: "8px",
  border: "1px solid #334155",
  background: "#0f172a",
  color: "white"
};

export default App;