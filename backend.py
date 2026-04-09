import pymongo
import collections
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import certifi
from fastapi import UploadFile, File, Query, Form
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv(".env")
OPENAI_API_KEY = os.environ.get("api_key")
app = FastAPI()

# Add the CORS middleware to allow all origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

class UserDetails(BaseModel):
    first_name : str
    email : str
    message : str

class NewsLetter(BaseModel):
    email : str

load_dotenv()

db_link = "mongodb+srv://admin:pgagi123@cluster0.0zbgskq.mongodb.net/"
client = pymongo.MongoClient(db_link, tlsCAFile=certifi.where())  
db = client["pgagi"]


@app.post("/user_details")
def user_details(request : UserDetails):
    k = db["userDetails"].insert_one({"firstName" : request.first_name, "email" : request.email, "message" : request.message})
    return {"message" : "Stored to database"}
@app.post("/newsletter")
def newsletter(request : NewsLetter):
    k = db["newsletter"].insert_one({"email" : request.email})
    return {"message" : "Stored to database"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)