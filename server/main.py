"""AI Village: Realm of Shadows — FastAPI server entry point."""

from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI(title="AI Village: Realm of Shadows")

# Serve the client as static files
app.mount("/static", StaticFiles(directory="client"), name="static")


@app.get("/")
async def root():
    return FileResponse("client/index.html")


@app.get("/health")
async def health():
    return {"status": "ok", "game": "AI Village: Realm of Shadows"}
