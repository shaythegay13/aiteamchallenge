# 🏆 Windsurf Vibe Coding Tournament Registration Page

A fully functional web-based registration page for the Windsurf Vibe Coding Tournament, built with vanilla HTML, CSS, and JavaScript with Firebase integration.

## ✨ Features

✅ **Event Information Display** - Comprehensive details about the Vibe Battle tournament  
✅ **Waitlist Registration Form** - Collects email, nickname, and city  
✅ **Database Integration** - Firebase Realtime Database for data persistence  
✅ **Participants Display Page** - Dynamic table showing all registered participants  
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices  
✅ **Real-time Updates** - Participant list updates automatically  
✅ **Form Validation** - Client-side validation for all inputs  
✅ **Error Handling** - Graceful error messages and loading states  

## 🚀 Quick Start

### Option 1: Local Development (No Database)

The app works out of the box with localStorage as a fallback:

```bash
# Open index.html directly in your browser
# Or use a local server:
npx http-server public -p 8080 -o
```

### Option 2: With Firebase (Recommended for Production)

1. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Realtime Database

2. **Configure Firebase**
   - Copy your Firebase config from Project Settings
   - Update `src/firebase-config.js` with your credentials

3. **Set Database Rules** (for development)
   ```json
   {
     "rules": {
       ".read": true,
       ".write": true
     }
   }
   ```

4. **Run Locally**
   ```bash
   npm install
   npm start
   ```

## 📦 Deployment

### Deploy to Netlify (Recommended)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

   Or drag and drop the `public` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to Settings > Pages
3. Select branch and `/public` folder
4. Your site will be live at `https://username.github.io/repo-name`

### Deploy to Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

## 📁 Project Structure

```
vibe-competition/
├── public/
│   ├── index.html           # Main registration page
│   └── participants.html    # Participants display page
├── src/
│   ├── firebase-config.js   # Firebase configuration
│   ├── main.js             # Form handling logic
│   └── participants.js     # Participants display logic
├── styles/
│   └── main.css            # All styles
├── package.json            # Dependencies
├── netlify.toml           # Netlify config
├── vercel.json            # Vercel config
└── README.md              # This file
```

## 🎯 Competition Deliverables Checklist

- ✅ **Deploy a Website with a Public URL** - Ready for deployment
- ✅ **Ensure Website Loads Without Errors** - No console errors
- ✅ **Display Event Information** - Comprehensive tournament details
- ✅ **Create a Waitlist Form with Email Input** - Email field included
- ✅ **Collect Nickname and City in Form** - Both fields present
- ✅ **Integrate Form with a Database** - Firebase integration ready
- ✅ **Develop a Second Page to Display Participants** - participants.html with dynamic table

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **JavaScript (ES6+)** - Vanilla JS with modules
- **Firebase** - Realtime Database for data storage
- **Font Awesome** - Icons
- **Responsive Design** - Mobile-first approach

## 🔧 Configuration

### Firebase Setup

1. Replace values in `src/firebase-config.js`:
   ```javascript
   export const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT_ID.appspot.com",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID",
       databaseURL: "YOUR_DATABASE_URL"
   };
   ```

### Local Storage Fallback

If Firebase is not configured, the app automatically uses localStorage for development/testing.

## 📝 Form Fields

- **Email** - Required, validated format
- **Nickname** - Required, text input
- **City** - Required, text input

## 🎨 Design Features

- Dark theme with purple/blue gradient
- Smooth animations and transitions
- Hover effects on cards and buttons
- Loading states and error handling
- Real-time participant count
- Responsive grid layout

## 🔒 Security Notes

⚠️ **Important**: The current Firebase rules allow public read/write access. For production:

1. Implement proper authentication
2. Add security rules to Firebase
3. Validate data server-side
4. Add rate limiting
5. Sanitize all user inputs

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

This is a competition project, but feel free to fork and customize for your own events!

## 📄 License

MIT License - feel free to use this project for your own tournaments!

## 🎉 Acknowledgments

Built for the Windsurf Vibe Coding Tournament using Windsurf AI-powered development tools.

---

**Ready to deploy?** Choose your hosting platform and go live in minutes! 🚀
