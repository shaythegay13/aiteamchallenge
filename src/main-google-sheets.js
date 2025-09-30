// Google Sheets Integration Version
// Your Google Sheets Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyPjpBmb-R_Z3ElKBhuUugUmQVxC1SXkYK3o34MtEv3PFC83pzezTN2W3FISlkDMQZx/exec';

// DOM Elements
const form = document.getElementById('waitlist-form');
const formMessage = document.getElementById('form-message');

// Form submission handler
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const nickname = document.getElementById('nickname').value.trim();
    const city = document.getElementById('city').value.trim();
    
    // Validate inputs
    if (!email || !nickname || !city) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address', 'error');
        return;
    }
    
    // Disable submit button
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    
    try {
        // Check if Google Script URL is configured
        if (GOOGLE_SCRIPT_URL === 'PASTE_YOUR_WEB_APP_URL_HERE') {
            throw new Error('Google Script URL not configured. Please update GOOGLE_SCRIPT_URL in main.js');
        }
        
        // Prepare data
        const formData = {
            email: email,
            nickname: nickname,
            city: city
        };
        
        // Send to Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        // Note: With no-cors mode, we can't read the response
        // But if no error is thrown, the submission was successful
        showMessage('🎉 Successfully joined the waitlist! Check your email for confirmation.', 'success');
        
        // Reset form
        form.reset();
        
        // Also save to localStorage as backup
        saveToLocalStorage(formData);
        
    } catch (error) {
        console.error('Error submitting form:', error);
        
        // Fallback to localStorage
        try {
            saveToLocalStorage({email, nickname, city});
            showMessage('⚠️ Saved locally. Please ensure Google Sheets is configured.', 'error');
        } catch (localError) {
            showMessage('❌ Error submitting form. Please try again.', 'error');
        }
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

// Save to localStorage as backup
function saveToLocalStorage(data) {
    const participants = JSON.parse(localStorage.getItem('participants') || '[]');
    participants.push({
        id: Date.now().toString(),
        ...data,
        timestamp: new Date().toISOString()
    });
    localStorage.setItem('participants', JSON.stringify(participants));
}

// Show message function
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
