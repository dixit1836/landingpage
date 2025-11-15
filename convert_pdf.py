from pdf2image import convert_from_path

# Path of PDF
pdf_path = "Diabits kits.pdf"

# Convert PDF to images in HD (300–600 DPI)
images = convert_from_path(pdf_path, dpi=400)  # change dpi = 300/400/600 for quality

# Save each page
for i, img in enumerate(images):
    img.save(f"page_{i+1}.png", "PNG")

print("Conversion done! Images saved as page_1.png, page_2.png ...")
