import { firebaseConfig } from './firebase-config.js';

// DOM Elements
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error-message');
const tableBody = document.getElementById('participants-body');
const emptyState = document.getElementById('empty-state');
const totalCount = document.getElementById('total-count');
const tableContainer = document.querySelector('.table-container');

// Check if Firebase is configured
const isFirebaseConfigured = firebaseConfig.apiKey !== "YOUR_API_KEY";

// Load participants
async function loadParticipants() {
    try {
        loadingElement.style.display = 'block';
        errorElement.style.display = 'none';
        emptyState.style.display = 'none';
        tableContainer.style.display = 'none';
        
        let participants = [];
        
        if (isFirebaseConfigured) {
            // Load from Firebase
            const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
            const { getDatabase, ref, onValue } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js');
            
            const app = initializeApp(firebaseConfig);
            const database = getDatabase(app);
            const participantsRef = ref(database, 'participants');
            
            // Listen for data
            onValue(participantsRef, (snapshot) => {
                const data = snapshot.val();
                participants = [];
                
                if (data) {
                    Object.keys(data).forEach(key => {
                        participants.push({
                            id: key,
                            ...data[key]
                        });
                    });
                }
                
                displayParticipants(participants);
            }, (error) => {
                console.error('Firebase error:', error);
                showError('Error loading participants from Firebase. Please check your configuration.');
            });
        } else {
            // Load from localStorage (fallback)
            participants = JSON.parse(localStorage.getItem('participants') || '[]');
            displayParticipants(participants);
        }
        
    } catch (error) {
        console.error('Error loading participants:', error);
        showError('Error loading participants. Please try again later.');
    }
}

// Display participants in table
function displayParticipants(participants) {
    loadingElement.style.display = 'none';
    
    if (participants.length === 0) {
        emptyState.style.display = 'block';
        tableContainer.style.display = 'none';
        totalCount.textContent = '0';
        return;
    }
    
    // Sort by timestamp (newest first)
    participants.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    
    // Update count
    totalCount.textContent = participants.length;
    
    // Clear table
    tableBody.innerHTML = '';
    
    // Populate table
    participants.forEach((participant, index) => {
        const row = document.createElement('tr');
        
        const formattedDate = formatDate(participant.timestamp);
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><strong>${escapeHtml(participant.nickname)}</strong></td>
            <td>${escapeHtml(participant.email)}</td>
            <td>${escapeHtml(participant.city)}</td>
            <td>${formattedDate}</td>
        `;
        
        tableBody.appendChild(row);
    });
    
    tableContainer.style.display = 'block';
    emptyState.style.display = 'none';
}

// Show error message
function showError(message) {
    loadingElement.style.display = 'none';
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    tableContainer.style.display = 'none';
    emptyState.style.display = 'none';
}

// Format date
function formatDate(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    // Less than 1 minute
    if (diff < 60000) {
        return 'Just now';
    }
    
    // Less than 1 hour
    if (diff < 3600000) {
        const minutes = Math.floor(diff / 60000);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
    
    // Less than 24 hours
    if (diff < 86400000) {
        const hours = Math.floor(diff / 3600000);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    }
    
    // Less than 7 days
    if (diff < 604800000) {
        const days = Math.floor(diff / 86400000);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    }
    
    // Format as date
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Load participants on page load
loadParticipants();
