from fastapi import APIRouter, UploadFile, File
import shutil
import os
from app.ai.voice_model import predict_voice

router = APIRouter()

UPLOAD_DIR = "storage/uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/analyze-voice/")
async def analyze_voice(file: UploadFile = File(...)):
    
    file_path = f"{UPLOAD_DIR}/{file.filename}"

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = predict_voice(file_path)

    return result