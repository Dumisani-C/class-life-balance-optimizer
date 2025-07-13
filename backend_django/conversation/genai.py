import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load your environment variables from .env
load_dotenv()
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")

genai.configure(api_key=GOOGLE_API_KEY)

model = genai.GenerativeModel("gemini-pro")

def generate_schedule_prompt(preferences, activities):
    prompt = f"""You are an AI scheduler helping a student plan their weekly schedule.
Preferences:
- Sleep: {preferences.sleep_target_hours} hrs/night
- Work: {preferences.work_hours_per_week} hrs/week
- Class: {preferences.class_hours_per_week} hrs/week
- Workout: {preferences.workout_target_hours} hrs/week

The student also has the following activities:
"""

    for act in activities:
        prompt += f"- {act['title']} ({act['category']}) for {act['duration_hours']} hrs due by {act['deadline']}\n"

    prompt += "\nGenerate a smart weekly plan (in bullet points) that helps them balance tasks and self-care."

    return prompt


def get_ai_schedule(preferences, activities):
    prompt = generate_schedule_prompt(preferences, activities)
    response = model.generate_content(prompt)
    return response.text
