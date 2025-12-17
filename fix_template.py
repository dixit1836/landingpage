import os

# Read the file
file_path = r'd:\2026\landingpage\main\templates\main\admin_panel.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the syntax errors
content = content.replace("current_status_filter=='pending'", "current_status_filter == 'pending'")
content = content.replace("current_status_filter=='confirmed'", "current_status_filter == 'confirmed'")

# Write back
with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("File fixed successfully!")
print("Lines with the old syntax have been updated.")
