import pdfplumber
import json

pdf_path = r"c:\Users\sruja\OneDrive\Documents\MyPortfolio\src\my_resume (2).pdf"

try:
    with pdfplumber.open(pdf_path) as pdf:
        full_text = ""
        for page in pdf.pages:
            text = page.extract_text()
            if text:
                full_text += text + "\n\n"
        
        print("=== RESUME CONTENT ===")
        print(full_text)
        print("=== END OF RESUME ===")
        
except Exception as e:
    print(f"Error reading PDF: {e}")
