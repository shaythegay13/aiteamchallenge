# 🚀 Quick Setup Guide - Vibe Coding Tournament

## ⚡ 60-Minute Deployment Checklist

### Step 1: Test Locally (5 minutes)

1. Open `public/index.html` in your browser
2. Test the registration form (uses localStorage by default)
3. Navigate to participants page to see registered users
4. Verify all features work without errors

### Step 2: Set Up Firebase (10 minutes)

1. **Create Firebase Project**
   - Visit: https://console.firebase.google.com/
   - Click "Add Project"
   - Name it "vibe-tournament" (or your choice)
   - Disable Google Analytics (optional)
   - Click "Create Project"

2. **Enable Realtime Database**
   - In Firebase Console, go to "Realtime Database"
   - Click "Create Database"
   - Start in "Test Mode" (allows read/write for 30 days)
   - Click "Enable"

3. **Get Configuration**
   - Go to Project Settings (gear icon)
   - Scroll to "Your apps"
   - Click web icon `</>`
   - Register app name: "Vibe Tournament"
   - Copy the firebaseConfig object

4. **Update Configuration**
   - Open `src/firebase-config.js`
   - Replace the placeholder values with your config
   - Save the file

### Step 3: Deploy to Netlify (10 minutes)

**Option A: Drag & Drop (Easiest)**

1. Go to https://app.netlify.com/drop
2. Drag the entire `public` folder
3. Wait for deployment
4. Get your public URL: `https://random-name.netlify.app`
5. Done! 🎉

**Option B: CLI Deployment**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to project
cd vibe-competition

# Deploy
netlify deploy --prod

# Follow prompts:
# - Publish directory: public
# - Get your public URL
```

### Step 4: Deploy to Vercel (Alternative - 10 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project
cd vibe-competition

# Deploy
vercel --prod

# Follow prompts and get your URL
```

### Step 5: Verify Deployment (5 minutes)

✅ **Checklist:**

1. Visit your public URL
2. Check browser console (F12) - should have NO errors
3. Fill out the registration form
4. Submit and verify success message
5. Navigate to participants page
6. Verify your submission appears in the table
7. Test on mobile device (responsive design)

### Step 6: Submit Your Project (5 minutes)

📋 **What to Submit:**

- ✅ Public URL (e.g., `https://your-site.netlify.app`)
- ✅ Screenshot of homepage
- ✅ Screenshot of participants page with data
- ✅ Confirmation that console has no errors

---

## 🔥 Quick Troubleshooting

### Issue: Form submits but data doesn't persist
**Solution:** Make sure you updated `src/firebase-config.js` with your actual Firebase credentials.

### Issue: Participants page is empty
**Solution:** 
1. Submit a test entry on the homepage first
2. Check Firebase Console > Realtime Database to see if data is there
3. Refresh the participants page

### Issue: Console errors about Firebase
**Solution:** 
1. Verify Firebase config is correct
2. Make sure Realtime Database is enabled
3. Check database rules allow read/write

### Issue: Site not loading after deployment
**Solution:**
1. Check that you deployed the `public` folder
2. Verify index.html is in the root of deployed folder
3. Check hosting service logs for errors

---

## 🎯 Alternative Hosting Options

### GitHub Pages
```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main

# Enable GitHub Pages in repo settings
# Select branch: main, folder: /public
```

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select your project
# Public directory: public
# Single-page app: No
firebase deploy
```

---

## 📊 Testing Checklist

Before submitting, verify:

- [ ] Homepage loads without errors
- [ ] Event information is displayed clearly
- [ ] Registration form has all 3 fields (email, nickname, city)
- [ ] Form validation works (try invalid email)
- [ ] Form submits successfully
- [ ] Success message appears after submission
- [ ] Participants page loads
- [ ] Submitted data appears in participants table
- [ ] Participant count is correct
- [ ] Timestamps are formatted properly
- [ ] Site is responsive on mobile
- [ ] Navigation between pages works
- [ ] No console errors (F12)

---

## 💡 Pro Tips

1. **Speed Up Deployment**: Use Netlify Drop for instant deployment
2. **Test First**: Always test locally before deploying
3. **Firebase Rules**: Remember to secure your database rules for production
4. **Custom Domain**: Add a custom domain in your hosting service settings
5. **Analytics**: Add Google Analytics to track registrations

---

## 🆘 Need Help?

- Firebase Docs: https://firebase.google.com/docs
- Netlify Docs: https://docs.netlify.com
- Vercel Docs: https://vercel.com/docs

---

**Time Estimate:** 30-45 minutes total (well under the 60-minute limit!)

Good luck with your competition! 🏆
