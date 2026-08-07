from openai import OpenAI  
import os
from dotenv import load_dotenv
load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))  

response = client.responses.create( 
    model="openai.gpt-oss-120b", 
    input=[ 
        {"role": "user", "content": "Write a one-sentence bedtime story about a unicorn."} 
    ] 
)  

print(response.output_text)