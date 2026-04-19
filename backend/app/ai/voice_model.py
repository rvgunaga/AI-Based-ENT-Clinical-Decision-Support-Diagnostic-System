import librosa
import numpy as np

def predict_voice(file_path):
    y, sr = librosa.load(file_path, sr=None)

    energy = np.mean(np.abs(y))
    pitch = np.mean(librosa.yin(y, fmin=50, fmax=400))

    # Simple rule-based prototype
    if energy < 0.01:
        prediction = "Paresis"
        confidence = 86
    elif pitch < 170:
        prediction = "Dysphonia"
        confidence = 88
    else:
        prediction = "Healthy"
        confidence = 90

    return {
        "prediction": prediction,
        "confidence": confidence
    }