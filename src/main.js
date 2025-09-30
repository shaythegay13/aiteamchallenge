import { firebaseConfig } from './firebase-config.js';

// Initialize Firebase
let database;
let participantsRef;

// Check if Firebase config is set up
const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";

if (isFirebaseConfigured) {
    // Import Firebase modules
    import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js').then(({ initializeApp }) => {
        import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js').then(({ getDatabase, ref, push, set }) => {
            const app = initializeApp(firebaseConfig);
            database = getDatabase(app);
            participantsRef = ref(database, 'participants');
            console.log('Firebase initialized successfully');
        });
    });
}

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
        if (isFirebaseConfigured) {
            // Save to Firebase
            const { getDatabase, ref, push, set } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
            const newParticipantRef = push(participantsRef);
            await set(newParticipantRef, {
                email,
                nickname,
                city,
                timestamp: new Date().toISOString()
            });
            
            showMessage('🎉 Successfully joined the waitlist! Check the participants page.', 'success');
        } else {
            // Fallback to localStorage for demo purposes
            const participants = JSON.parse(localStorage.getItem('participants') || '[]');
            participants.push({
                id: Date.now().toString(),
                email,
                nickname,
                city,
                timestamp: new Date().toISOString()
            });
            localStorage.setItem('participants', JSON.stringify(participants));
            
            showMessage('🎉 Successfully joined the waitlist! (Using local storage - configure Firebase for production)', 'success');
        }
        
        // Reset form
        form.reset();
        
    } catch (error) {
        console.error('Error submitting form:', error);
        showMessage('❌ Error submitting form. Please try again.', 'error');
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
});

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
