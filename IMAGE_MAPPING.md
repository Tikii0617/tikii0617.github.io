# Project Image Mapping Documentation

This document catalogues the mapping between project images and their corresponding project cards on the portfolio website.

## Current Project Image Mappings (Updated)

### Recently Added/Updated Images:
1. **Workflow Automation Migration.jpg** → Workflow Automation Migration project (AI category)
   - Description: n8n to Google Cloud Run migration with Docker containerization
   - Year: 2025

2. **Patina People Hackathon .jpg** → Patina People Hackathon project (Design category)  
   - Description: UCL hackathon for accessible communication tools for older adults
   - Year: 2025

3. **5.png** → AI-Powered Tibetan Dictionary project (AI category)
   - Description: Cultural preservation through AI-generated definitions
   - Year: ongoing

4. **bi.png** → Bitcoin Price Analysis project (AI category)
   - Description: Time series analysis and price prediction using Python
   - Year: 2023
   - *(Updated from previous image mapping)*

### Existing Project Images:
5. **sustainculture.png** → SustainCulture Project (Research category)
   - Year: 2025

6. **unity-game.png** → Tiki and Apso Forest Adventure (Other category)
   - Year: 2024

7. **web-view.png** → Page Views Time Series Analysis (AI category)
   - Year: 2023

8. **med.png** → Medical Data Visualizer (AI category)
   - Year: 2023

9. **work-survey.png** → Survey Form (Web category)
   - Year: 2022

10. **work-tribute.jpg** → Tribute Page (Web category)
    - Year: 2022

11. **work-technical.png** → Bouldering Technical Documentation (Web category)
    - Year: 2022

### Projects with Placeholder Icons:
12. **Podcast Experiments** → 🎧 icon placeholder (Research category)
    - Description: Social dynamics and gender studies through media production
    - Year: 2024-ongoing

## Removed Projects:
- ~~Multilingual Thinking Tools~~ (used uber.png) - Deleted
- ~~Prompt Engineering Practice~~ (used 6.jpg) - Deleted

## Total Active Projects: 12

## Skills Button Fix Documentation

### Issue:
The Skills button in the assistant interface was not responding to clicks.

### Root Cause:
Event delegation was working, but the skills case in `handleQuickAction` function was not properly displaying the message content.

### Solution Implemented:
Created a special interceptor for the skills button that:
1. Detects skills button clicks specifically
2. Bypasses the normal `handleQuickAction` flow
3. Forces message display through multiple fallback methods:
   - Primary: Normal chat area display
   - Secondary: Dynamic chat area creation
   - Tertiary: Direct DOM manipulation
   - Ultimate fallback: Alert dialog

### Code Location:
- File: `assets/js/main.js`
- Function: Event listener for `.quick-btn` elements
- Special handling for `data-action="skills"`

### Status: ✅ RESOLVED
The skills button now has triple-redundancy protection ensuring it will display content regardless of the chat interface state. 