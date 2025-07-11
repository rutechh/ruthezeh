# Resume Setup Instructions

## Adding Your Resume PDF

To add your actual resume PDF to the portfolio:

1. **Replace the HTML file**: Delete `resume.html` and add your PDF file as `resume.pdf` in the `public` directory.

2. **Update the portfolio data**: In `src/data/portfolioData.ts`, change the resume path:
   ```typescript
   resume: "/resume.pdf"  // Change from "/resume.html"
   ```

3. **Update the utility function**: The download function in `src/utils/resumeDownload.ts` will automatically work with PDF files.

## Current Setup

Currently, the portfolio is set up with:
- **HTML Resume**: `resume.html` - A formatted HTML version that can be printed to PDF
- **Utility Function**: Handles both HTML and PDF files automatically

## Converting HTML to PDF

If you want to convert the current HTML resume to PDF:

### Method 1: Browser Print
1. Open `http://localhost:5174/resume.html` in your browser
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Choose "Save as PDF"
4. Save as `resume.pdf` in the `public` directory

### Method 2: Online Tools
1. Visit any HTML to PDF converter (e.g., HTML/CSS to PDF)
2. Upload or paste the HTML content
3. Download the generated PDF
4. Save as `resume.pdf` in the `public` directory

### Method 3: Command Line (if tools are available)
```bash
# Using wkhtmltopdf (if installed)
wkhtmltopdf public/resume.html public/resume.pdf

# Using pandoc (if installed)
pandoc public/resume.html -o public/resume.pdf
```

## Customizing the Resume

To customize the resume content:
1. Edit `public/resume.html` directly
2. Update the personal information, experience, skills, etc.
3. The styling is embedded in the HTML file for easy customization

## File Structure

```
public/
├── resume.html          # Current HTML resume
├── resume.pdf          # Your PDF resume (to be added)
└── RESUME_INSTRUCTIONS.md  # This file
```

## Notes

- The portfolio will automatically detect the file type and handle downloads appropriately
- PDF files will download directly
- HTML files will open in a new tab with a print dialog
- Make sure to update the portfolio data file when changing file names or types 