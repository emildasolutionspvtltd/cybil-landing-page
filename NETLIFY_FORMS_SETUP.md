# Netlify Forms Setup Guide

## Overview
This project is configured to use Netlify Forms for contact form submissions with email notifications.

## What's Already Configured

### 1. Form Component (`components/contact-form.tsx`)
- ✅ Proper Netlify form attributes (`data-netlify="true"`)
- ✅ Honeypot spam protection (`netlify-honeypot="bot-field"`)
- ✅ Form submission handling with proper encoding
- ✅ Success/error states with toast notifications
- ✅ Form closing functionality after successful submission

### 2. Static Form Detection (`public/contact-form.html`)
- ✅ Hidden HTML form for Netlify build-time detection
- ✅ All form fields defined for proper processing

### 3. Netlify Configuration (`netlify.toml`)
- ✅ Build settings configured
- ✅ Form handling enabled
- ✅ Redirect rules for thank-you page

### 4. Thank You Page (`app/thank-you/page.tsx`)
- ✅ Fallback thank-you page with auto-redirect
- ✅ Success message and navigation

## Setup Email Notifications in Netlify Dashboard

### Step 1: Deploy to Netlify
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Deploy the site

### Step 2: Configure Email Notifications
1. Go to your Netlify site dashboard
2. Navigate to **Site settings** → **Forms**
3. Click on **Form notifications**
4. Click **Add notification**
5. Choose **Email notification**
6. Configure:
   - **Event to listen for**: New form submission
   - **Form**: contact
   - **Email to notify**: your-email@example.com
   - **Subject**: New Contact Form Submission from {{form_name}}
   - **Email template**: You can customize or use default

### Step 3: Optional - Slack/Webhook Notifications
You can also add:
- Slack notifications
- Webhook notifications to external services
- Multiple email recipients

## Form Fields Captured
- **firstName**: Contact's full name
- **email**: Contact's email address
- **phone**: Phone number with country code
- **countryCode**: Selected country code
- **description**: Optional message/description

## Testing
1. Deploy the site to Netlify
2. Fill out and submit the contact form
3. Check your email for notifications
4. Verify form submissions in Netlify dashboard under **Forms**

## Troubleshooting

### Form Not Submitting
- Ensure `data-netlify="true"` is present on form element
- Check that form name matches in both React component and static HTML
- Verify all form fields are properly named

### No Email Notifications
- Check spam folder
- Verify email notification is configured in Netlify dashboard
- Test with a different email address
- Check Netlify form submissions dashboard for successful submissions

### Form Submissions Not Appearing in Dashboard
- Ensure static HTML form exists in `public/contact-form.html`
- Verify form fields match between React component and static form
- Check browser network tab for successful form submission

## Additional Features
- **Spam Protection**: Honeypot field automatically filters spam
- **Form Validation**: Client-side validation with required fields
- **Loading States**: Button shows "Submitting..." during submission
- **Success Feedback**: Toast notification and form replacement on success
- **Error Handling**: User-friendly error messages for failed submissions

## Support
If you encounter issues, check:
1. Netlify build logs
2. Browser console for JavaScript errors
3. Network tab for form submission requests
4. Netlify Forms dashboard for submission status
