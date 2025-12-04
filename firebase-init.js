// Firebase Configuration and Initialization
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-performance.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCW0mh277DMxfHkU3hNn9RRDBLSpVYplsQ",
    authDomain: "batuhanyilmazfinanceaiengineer.firebaseapp.com",
    projectId: "batuhanyilmazfinanceaiengineer",
    storageBucket: "batuhanyilmazfinanceaiengineer.firebasestorage.app",
    messagingSenderId: "440131831124",
    appId: "1:440131831124:web:206eaa0eb5a7d9a663f4c1",
    measurementId: "G-QS48CP195P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);
console.log("Google Analytics initialized");

// Initialize Performance Monitoring
const perf = getPerformance(app);
console.log("Performance Monitoring initialized");

// Track page views
import { logEvent } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

// Log page view
logEvent(analytics, 'page_view', {
    page_title: document.title,
    page_location: window.location.href,
    page_path: window.location.pathname
});

// Track navigation clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        logEvent(analytics, 'navigation_click', {
            link_text: e.target.textContent,
            link_url: e.target.href
        });
    });
});

// Track CTA button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        logEvent(analytics, 'cta_click', {
            button_text: e.target.textContent,
            button_location: e.target.href || 'form'
        });
    });
});

// Track project clicks
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        const projectTitle = e.target.closest('.project-card').querySelector('.project-title').textContent;
        logEvent(analytics, 'project_click', {
            project_name: projectTitle,
            link_type: e.target.getAttribute('aria-label')
        });
    });
});

export { app, analytics, perf };
