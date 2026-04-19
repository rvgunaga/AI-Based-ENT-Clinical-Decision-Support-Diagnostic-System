from fastapi import APIRouter, HTTPException
import sqlite3

router = APIRouter(prefix="/patients", tags=["Patients"])

DB = "ent_ai.db"

def init_db():
    conn = sqlite3.connect(DB)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS patients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            age INTEGER,
            gender TEXT,
            phone TEXT,
            symptoms TEXT
        )
    """)
    conn.commit()
    conn.close()

init_db()

@router.post("/")
def create_patient(data: dict):
    conn = sqlite3.connect(DB)
    cur = conn.cursor()

    cur.execute("""
        INSERT INTO patients (name, age, gender, phone, symptoms)
        VALUES (?, ?, ?, ?, ?)
    """, (
        data["name"],
        data["age"],
        data["gender"],
        data["phone"],
        data["symptoms"]
    ))

    conn.commit()
    conn.close()

    return {"message": "Patient created"}

@router.get("/")
def get_patients():
    conn = sqlite3.connect(DB)
    cur = conn.cursor()

    cur.execute("SELECT * FROM patients")
    rows = cur.fetchall()

    conn.close()

    return rows