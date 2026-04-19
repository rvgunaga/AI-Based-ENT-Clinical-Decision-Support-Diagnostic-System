import React, { useEffect, useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    symptoms: ""
  });

  const API = "http://127.0.0.1:8000/patients/";

  const loadPatients = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setPatients(data);
  };

  useEffect(() => {
    loadPatients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...form,
        age: parseInt(form.age)
      })
    });

    setForm({
      name: "",
      age: "",
      gender: "",
      phone: "",
      symptoms: ""
    });

    loadPatients();
  };

  const deletePatient = async (id) => {
    await fetch(API + id, {
      method: "DELETE"
    });

    loadPatients();
  };

  return (
    <div style={{ padding: "30px", color: "white" }}>
      <h1>Patients Management</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />

        <input placeholder="Gender"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        />

        <input placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <input placeholder="Symptoms"
          value={form.symptoms}
          onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
        />

        <button type="submit">Add Patient</button>
      </form>

      <table border="1" cellPadding="10" style={{ width: "100%", color: "white" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Symptoms</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.gender}</td>
              <td>{p.phone}</td>
              <td>{p.symptoms}</td>
              <td>
                <button onClick={() => deletePatient(p.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}