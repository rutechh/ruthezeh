// Helper function to determine file type
const getFileType = (url: string): 'pdf' | 'html' | 'unknown' => {
  const lowercaseUrl = url.toLowerCase();
  if (lowercaseUrl.endsWith('.pdf')) return 'pdf';
  if (lowercaseUrl.endsWith('.html') || lowercaseUrl.endsWith('.htm')) return 'html';
  return 'unknown';
};

export const handleResumeDownload = (resumeUrl: string) => {
  const fileType = getFileType(resumeUrl);
  
  if (fileType === 'pdf') {
    // For PDF files, create a download link
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Alex_Johnson_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else {
    // For HTML files, open in new tab and trigger print dialog
    const newWindow = window.open(resumeUrl, '_blank');
    
    if (newWindow) {
      // Add a slight delay to ensure the page loads, then trigger print dialog
      setTimeout(() => {
        newWindow.print();
      }, 1000);
    } else {
      // If popup blocker prevents new window, fallback to current window
      window.location.href = resumeUrl;
    }
  }
};

export const downloadResumeAsPDF = (resumeUrl: string) => {
  const fileType = getFileType(resumeUrl);
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  
  if (fileType === 'pdf') {
    link.download = 'Alex_Johnson_Resume.pdf';
  } else {
    link.download = 'Alex_Johnson_Resume.html';
  }
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Enhanced function that provides multiple options
export const handleResumeAction = (resumeUrl: string, action: 'view' | 'print' | 'download' = 'view') => {
  if (!resumeUrl) {
    console.error('Resume URL is not provided');
    return;
  }

  const fileType = getFileType(resumeUrl);
  
  switch (action) {
    case 'view':
      // Simply open in new tab
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
      break;
      
    case 'print':
      if (fileType === 'pdf') {
        // For PDF, just open it (user can print from PDF viewer)
        window.open(resumeUrl, '_blank', 'noopener,noreferrer');
      } else {
        // For HTML, open and trigger print dialog
        handleResumeDownload(resumeUrl);
      }
      break;
      
    case 'download':
      // Attempt to download the file
      downloadResumeAsPDF(resumeUrl);
      break;
      
    default:
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  }
};

// Function to check if resume file exists (for development purposes)
export const checkResumeExists = async (resumeUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(resumeUrl, { method: 'HEAD' });
    return response.ok;
  } catch (error) {
    console.error('Error checking resume file:', error);
    return false;
  }
}; 