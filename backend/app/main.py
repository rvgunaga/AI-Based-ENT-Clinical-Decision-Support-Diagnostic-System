from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.voice import router as voice_router
from app.api import patients

app = FastAPI(title="ENT AI System")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Existing router
app.include_router(voice_router)

# New Patients router
app.include_router(patients.router)

@app.get("/")
def home():
    return {"message": "ENT AI Backend Running"}