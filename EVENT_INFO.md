# Event Information Update Guide

## Current Event Information (Generic)

The website currently contains generic information about the Windsurf Vibe Coding Tournament. If you have specific details from the Luma event page, you can update the following sections:

## Where to Update Event Details

### 1. Homepage Event Information (`public/index.html`)

**Lines 25-48** - Info Cards Section

Current content:
- What is Vibe Battle?
- Challenge Format
- Who Can Join?
- Prizes & Recognition

**To update:** Replace the `<p>` content in each `.info-card` with actual event details.

### 2. Specific Details to Add

If you have the Luma event details, please provide:

- **Event Date & Time** - Add a countdown or specific date
- **Event Location** - Physical or virtual
- **Registration Deadline** - When does registration close?
- **Prize Details** - Specific prizes or awards
- **Rules & Guidelines** - Competition rules
- **Judging Criteria** - How will projects be evaluated?
- **Contact Information** - Event organizer contact

## Quick Update Instructions

### Add Event Date/Time

Add this section after the header in `index.html`:

```html
<section class="event-date">
    <div class="date-card">
        <i class="fas fa-calendar"></i>
        <h3>Event Date</h3>
        <p><strong>DATE HERE</strong></p>
        <p>TIME HERE</p>
    </div>
</section>
```

### Add Countdown Timer

If you want a countdown to the event, add this to `src/main.js`:

```javascript
// Set event date
const eventDate = new Date('2025-10-15T18:00:00').getTime();

// Update countdown every second
setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
}, 1000);
```

## Current Website Features

✅ All required deliverables are complete:
- Registration form with email, nickname, and city
- Event information display
- Database integration (Firebase)
- Participants display page
- Deployment-ready configuration

## Next Steps

1. **Provide Luma Event Details** - Share the specific information from the event page
2. **I'll Update the Content** - I can quickly update all relevant sections
3. **Test & Deploy** - Verify changes and deploy

---

**Note:** The current generic content is professional and complete. The site is fully functional and ready to deploy. Specific event details will make it more personalized but are not required for the competition deliverables.
