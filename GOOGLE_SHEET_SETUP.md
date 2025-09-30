# 📊 Google Sheets Integration Setup

## Your Google Sheet Details
- **Sheet Name:** Vibe Coding Competition Waitlist
- **Tab Name:** Sheet1
- **Sheet ID:** 1eal_NM6FVCUjlge33LCIsKMcSN9FHm8Z_UEYMbrLsKM

---

## 🚀 Setup Instructions (5 minutes)

### Step 1: Open Apps Script Editor

1. Open your Google Sheet: [Click here](https://docs.google.com/spreadsheets/d/1eal_NM6FVCUjlge33LCIsKMcSN9FHm8Z_UEYMbrLsKM/edit)
2. Click **Extensions** → **Apps Script**
3. Delete any existing code in the editor

### Step 2: Paste the Script

Copy and paste this entire script into the Apps Script editor:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
    
    // If Sheet1 doesn't exist, create it
    if (!sheet) {
      sheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet('Sheet1');
    }
    
    // Check if headers exist, if not add them
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Email', 'Nickname', 'City']);
      sheet.getRange('A1:D1').setFontWeight('bold');
    }
    
    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    
    // Get current timestamp
    var timestamp = new Date();
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      data.email,
      data.nickname,
      data.city
    ]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'success',
        'message': 'Data added successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        'status': 'error',
        'message': error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function to verify the script works
function testScript() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        email: 'test@example.com',
        nickname: 'TestUser',
        city: 'Test City'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

### Step 3: Deploy as Web App

1. Click the **Deploy** button (top right) → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description:** Vibe Competition Waitlist API
   - **Execute as:** Me (your email)
   - **Who has access:** Anyone
5. Click **Deploy**
6. **Authorize access** when prompted:
   - Click "Authorize access"
   - Choose your Google account
   - Click "Advanced" → "Go to [project name] (unsafe)"
   - Click "Allow"

### Step 4: Copy the Web App URL

1. After deployment, you'll see a **Web app URL**
2. It looks like: `https://script.google.com/macros/s/XXXXX/exec`
3. **COPY THIS URL** - you'll need it for the next step

### Step 5: Test the Script (Optional)

1. In Apps Script editor, select the `testScript` function from dropdown
2. Click **Run** (▶️ button)
3. Check your Google Sheet - you should see a test entry

---

## 📝 What This Script Does

- ✅ Automatically adds headers (Timestamp, Email, Nickname, City) if they don't exist
- ✅ Appends new form submissions to your sheet
- ✅ Adds timestamp for each submission
- ✅ Returns success/error messages
- ✅ Handles errors gracefully

---

## 🔒 Security Notes

- The script runs under YOUR Google account
- Only you can modify the script
- Anyone can submit data (needed for public form)
- Data is stored in your private Google Sheet

---

## ⚠️ Important

After you deploy and get the Web App URL, paste it here so I can update the form code!

**Format:** `https://script.google.com/macros/s/XXXXX/exec`

---

## 🆘 Troubleshooting

**Issue:** "Authorization required" error
- **Solution:** Make sure you authorized the script in Step 3

**Issue:** Data not appearing in sheet
- **Solution:** Check that "Who has access" is set to "Anyone"

**Issue:** Wrong sheet name
- **Solution:** Make sure your tab is named "Sheet1" or update the script

---

## 📊 Your Sheet Structure

After setup, your sheet will have these columns:

| Timestamp | Email | Nickname | City |
|-----------|-------|----------|------|
| 2025-09-30 19:20:00 | user@example.com | CodeMaster | New York |

---

**Ready?** Follow the steps above and paste the Web App URL when you're done! 🚀
