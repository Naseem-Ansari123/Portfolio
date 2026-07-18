// ============================================================
//  STUDENT DATA — EDIT ONLY THIS OBJECT
// ============================================================
const studentData = {
    name: "Naseem Ansari",
    title: "Full-Stack Developer & UI/UX Enthusiast",
    profileImage: "images/profile.jpg",
    about: "I'm a third-year Computer Science student with a deep passion for building user-centric applications. I love exploring new technologies and solving real-world problems through code. Currently, I'm diving into cloud architecture and AI/ML.",
    education: [{
        degree: "B.Sc. Computer Science",
        institution: "University of Technology",
        university: "Mumbai University",
        year: "2024 - 2027",
        cgpa: "8 CGPA",
        description: "Core subjects: Data Structures, Algorithms, DBMS, Operating Systems, Networking."
    }, {
        degree: "Higher Secondary (HSC)",
        institution: "SVM Junior College",
        university: "State Board",
        year: "2022 - 2024",
        cgpa: "56%",
        description: "All subjects."
    }, {
        degree: "Secondary (SSC)",
        institution: "ST. MATHEW's High School",
        university: "State Board",
        year: "2021 - 2022",
        cgpa: "88%",
        description: "All subjects."
    }],
    skills: [
        { name: "HTML/CSS", percentage: 90 },
        { name: "JavaScript", percentage: 85 },
        { name: "React.js", percentage: 80 },
        { name: "Node.js", percentage: 75 },
        { name: "Python", percentage: 70 },
        { name: "Java", percentage: 65 },
        { name: "SQL", percentage: 80 },
        { name: "Git/GitHub", percentage: 85 }
    ],
    projects: [{
        title: "E-Commerce Platform",
        image: "images/projects/project1.jpg",
        tech: ["React", "Node", "MongoDB"],
        description: "Full-featured online store with payment integration and admin dashboard.",
        github: "#",
        demo: "#"
    }, {
        title: "Weather Dashboard",
        image: "images/projects/project2.jpg",
        tech: ["JavaScript", "API", "CSS"],
        description: "Real-time weather app using OpenWeatherMap API with 5-day forecast.",
        github: "#",
        demo: "#"
    }, {
        title: "Task Manager",
        image: "images/projects/project3.jpg",
        tech: ["Vue", "Firebase"],
        description: "Collaborative task management tool with real-time sync and user authentication.",
        github: "#",
        demo: "#"
    }],
    certificates: [{
        title: "Google IT Support",
        organization: "Coursera",
        date: "Jan 2025",
        image: "images/certificates/cert1.jpg",
        link: "#"
    }, {
        title: "Meta Frontend Developer",
        organization: "Coursera",
        date: "Dec 2024",
        image: "images/certificates/cert2.jpg",
        link: "#"
    }],
    internships: [{
        company: "TechVibe Solutions",
        logo: "images/companies/techvibe.png",
        position: "Frontend Intern",
        duration: "June 2025 – Aug 2025",
        responsibilities: "Developed reusable React components, optimized performance, and collaborated with design team."
    }, {
        company: "CloudNest Inc.",
        logo: "images/companies/cloudnest.png",
        position: "Backend Intern",
        duration: "Jan 2025 – Apr 2025",
        responsibilities: "Built REST APIs with Node.js, integrated MongoDB, and wrote unit tests."
    }],
    achievements: [{
        title: "Hackathon Winner",
        description: "First place at University Hackathon 2024 for a sustainable transportation app.",
        date: "Nov 2024",
        icon: "fa-trophy"
    }, {
        title: "Best Paper Award",
        description: "Presented paper on AI in healthcare at National Student Conference.",
        date: "Mar 2025",
        icon: "fa-award"
    }],
    experience: [{
        title: "Teaching Assistant",
        company: "University CS Department",
        date: "Sep 2024 – Present",
        description: "Assisted professors in Data Structures lab, graded assignments, and held office hours."
    }, {
        title: "Freelance Web Developer",
        company: "Self-Employed",
        date: "Jan 2024 – Present",
        description: "Designed and built responsive websites for local businesses using modern frameworks."
    }],
    contact: {
        email: "alex.johnson@example.com",
        phone: "+1 (555) 123-4567",
        address: "123 University Ave, City, State 12345"
    },
    socialLinks: {
        github: "#",
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        facebook: "#",
        youtube: "#"
    },
    languages: ["English (Fluent)", "Spanish (Intermediate)", "German (Beginner)"],
    interests: ["Coding", "Photography", "Traveling", "Reading", "Chess"]
};

// ============================================================
//  RENDER ENGINE — Populates the entire page from studentData
// ============================================================
function renderPortfolio(data) {
    // Helper: set text content safely
    const $ = (id) => document.getElementById(id);
    const setText = (id, text) => { const el = $(id); if (el) el.textContent = text; };
    const setHTML = (id, html) => { const el = $(id); if (el) el.innerHTML = html; };

    // Hero
    setText('studentName', data.name);
    setText('heroDescription', data.about.slice(0, 120) + '...');
    if ($('profileImage')) $('profileImage').src = data.profileImage || 'images/profile.jpg';
    if ($('aboutImage')) $('aboutImage').src = data.profileImage || 'images/profile.jpg';

    // Typing (will be set by typing.js, but we pass data.title)
    window.typingTexts = [data.title, 'Student', 'Developer', 'Problem Solver'];
    if (typeof startTyping === 'function') startTyping();

    // Social links (hero)
    const heroSocial = document.getElementById('heroSocial');
    if (heroSocial) {
        heroSocial.innerHTML = Object.entries(data.socialLinks).map(([key, url]) =>
            `<a href="${url}" target="_blank" aria-label="${key}"><i class="fab fa-${key}"></i></a>`
        ).join('');
    }

    // About
    setText('aboutName', data.name);
    setText('aboutText', data.about);
    const infoGrid = document.getElementById('aboutInfoGrid');
    if (infoGrid) {
        const info = [
            ['fa-user-graduate', 'Degree', data.education[0]?.degree || 'N/A'],
            ['fa-university', 'University', data.education[0]?.university || 'N/A'],
            ['fa-map-pin', 'Location', data.contact.address || 'N/A'],
            ['fa-calendar', 'Year', data.education[0]?.year || 'N/A']
        ];
        infoGrid.innerHTML = info.map(([icon, label, value]) =>
            `<div class="info-item"><i class="fas ${icon}"></i> <strong>${label}:</strong> ${value}</div>`
        ).join('');
    }
    // Languages & Interests
    const langList = document.getElementById('languagesList');
    if (langList) langList.innerHTML = data.languages.map(l => `<li>${l}</li>`).join('');
    const intList = document.getElementById('interestsList');
    if (intList) intList.innerHTML = data.interests.map(i => `<li>${i}</li>`).join('');

    // Skills
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid) {
        skillsGrid.innerHTML = data.skills.map(skill => `
                    <div class="skill-card reveal">
                        <div class="skill-name"><span>${skill.name}</span><span>${skill.percentage}%</span></div>
                        <div class="skill-bar"><div class="fill" data-percent="${skill.percentage}"></div></div>
                    </div>
                `).join('');
    }

    // Education Timeline
    const eduTimeline = document.getElementById('educationTimeline');
    if (eduTimeline) {
        eduTimeline.innerHTML = data.education.map(edu => `
                    <div class="timeline-item reveal">
                        <div class="timeline-date">${edu.year}</div>
                        <h3>${edu.degree}</h3>
                        <div class="timeline-sub">${edu.institution} · ${edu.university}</div>
                        <p>${edu.description} <strong>${edu.cgpa}</strong></p>
                    </div>
                `).join('');
    }

    // Projects
    const projGrid = document.getElementById('projectsGrid');
    if (projGrid) {
        projGrid.innerHTML = data.projects.map(proj => `
                    <div class="project-card reveal">
                        <div class="project-img"><img src="${proj.image}" alt="${proj.title}" onerror="this.src='images/placeholder.jpg'" /></div>
                        <div class="project-body">
                            <h3>${proj.title}</h3>
                            <div class="project-tech">${proj.tech.map(t => `<span>${t}</span>`).join('')}</div>
                            <p>${proj.description}</p>
                            <div class="project-actions">
                                <a href="${proj.github}" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                                <a href="${proj.demo}" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
                            </div>
                        </div>
                    </div>
                `).join('');
    }

    // Certificates
    const certGrid = document.getElementById('certificatesGrid');
    if (certGrid) {
        certGrid.innerHTML = data.certificates.map(cert => `
                    <div class="cert-card reveal">
                        <img src="${cert.image}" alt="${cert.title}" onerror="this.src='images/placeholder.jpg'" />
                        <h3>${cert.title}</h3>
                        <p>${cert.organization} · ${cert.date}</p>
                        <a href="${cert.link}" class="cert-btn" target="_blank">View Certificate</a>
                    </div>
                `).join('');
    }

    // Internship
    const intTimeline = document.getElementById('internshipTimeline');
    if (intTimeline) {
        intTimeline.innerHTML = data.internships.map(int => `
                    <div class="timeline-item reveal">
                        <div class="timeline-date">${int.duration}</div>
                        <h3>${int.position}</h3>
                        <div class="timeline-sub">${int.company}</div>
                        <p>${int.responsibilities}</p>
                    </div>
                `).join('');
    }

    // Achievements
    const achGrid = document.getElementById('achievementsGrid');
    if (achGrid) {
        achGrid.innerHTML = data.achievements.map(ach => `
                    <div class="achievement-card reveal">
                        <div class="ach-icon"><i class="fas ${ach.icon}"></i></div>
                        <h3>${ach.title}</h3>
                        <p>${ach.description}</p>
                        <div class="ach-date">${ach.date}</div>
                    </div>
                `).join('');
    }

    // Experience
    const expTimeline = document.getElementById('experienceTimeline');
    if (expTimeline) {
        expTimeline.innerHTML = data.experience.map(exp => `
                    <div class="timeline-item reveal">
                        <div class="timeline-date">${exp.date}</div>
                        <h3>${exp.title}</h3>
                        <div class="timeline-sub">${exp.company}</div>
                        <p>${exp.description}</p>
                    </div>
                `).join('');
    }

    // Contact
    setText('contactDescription', `I'm always open to new opportunities and collaborations. Reach out via email at ${data.contact.email}`);
    const contactDetails = document.getElementById('contactDetails');
    if (contactDetails) {
        contactDetails.innerHTML = `
                    <div class="detail-item"><i class="fas fa-envelope"></i> ${data.contact.email}</div>
                    <div class="detail-item"><i class="fas fa-phone"></i> ${data.contact.phone}</div>
                    <div class="detail-item"><i class="fas fa-map-marker-alt"></i> ${data.contact.address}</div>
                `;
    }
    const contactSocial = document.getElementById('contactSocial');
    if (contactSocial) {
        contactSocial.innerHTML = Object.entries(data.socialLinks).map(([key, url]) =>
            `<a href="${url}" target="_blank"><i class="fab fa-${key}"></i></a>`
        ).join('');
    }

    // Footer
    setText('footerDescription', data.about.slice(0, 80) + '...');
    const footerSocial = document.getElementById('footerSocial');
    if (footerSocial) {
        footerSocial.innerHTML = Object.entries(data.socialLinks).map(([key, url]) =>
            `<a href="${url}" target="_blank"><i class="fab fa-${key}"></i></a>`
        ).join('');
    }
    const footerContact = document.getElementById('footerContactList');
    if (footerContact) {
        footerContact.innerHTML = `
                    <li><i class="fas fa-envelope"></i> ${data.contact.email}</li>
                    <li><i class="fas fa-phone"></i> ${data.contact.phone}</li>
                    <li><i class="fas fa-map-marker-alt"></i> ${data.contact.address}</li>
                `;
    }
    setText('footerName', data.name);
    document.getElementById('currentYear').textContent = new Date().getFullYear();
}

// ============================================================
//  ADDITIONAL FEATURES (Dark mode, scroll, cursor, etc.)
// ============================================================
document.addEventListener('DOMContentLoaded', function () {

    // Load data
    renderPortfolio(studentData);

    // ---- Dark Mode ----
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    let darkMode = localStorage.getItem('theme') === 'dark';
    if (darkMode) {
        document.body.classList.add('dark-mode');
        icon.className = 'fas fa-sun';
    }
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });

    // ---- Mobile Hamburger ----
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
    // Close on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // ---- Active nav link on scroll ----
    const sections = document.querySelectorAll('section[id]');
    const navLinkEls = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(sec => {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) current = sec.getAttribute('id');
        });
        navLinkEls.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    });

    // ---- Scroll Progress ----
    const progress = document.getElementById('scroll-progress');
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const width = (scrollTop / docHeight) * 100;
        progress.style.width = width + '%';
    });

    // ---- Back to Top ----
    document.getElementById('backToTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ---- Custom Cursor (desktop) ----
    const isDesktop = window.innerWidth >= 1025;
    if (isDesktop) {
        const dot = document.querySelector('.cursor-dot');
        const outline = document.querySelector('.cursor-outline');
        document.addEventListener('mousemove', (e) => {
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
            outline.style.left = e.clientX + 'px';
            outline.style.top = e.clientY + 'px';
        });
        document.addEventListener('mousedown', () => {
            dot.classList.add('active');
            outline.classList.add('active');
        });
        document.addEventListener('mouseup', () => {
            dot.classList.remove('active');
            outline.classList.remove('active');
        });
    } else {
        document.querySelector('.cursor-dot').style.display = 'none';
        document.querySelector('.cursor-outline').style.display = 'none';
    }

    // ---- Scroll Reveal (Intersection Observer) ----
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));

    // ---- Animate skill bars on scroll ----
    const skillFills = document.querySelectorAll('.skill-bar .fill');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const percent = fill.getAttribute('data-percent');
                setTimeout(() => {
                    fill.style.width = percent + '%';
                }, 200);
            }
        });
    }, { threshold: 0.3 });
    skillFills.forEach(el => skillObserver.observe(el));

    // ---- Loader ----
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 800);

    // ---- Typing (simple) ----
    function startTyping() {
        const texts = window.typingTexts || ['Student', 'Developer'];
        const typingElement = document.getElementById('typingText');
        let index = 0,
            charIndex = 0,
            isDeleting = false;
        function type() {
            const current = texts[index];
            if (!isDeleting) {
                typingElement.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                if (charIndex === current.length) {
                    isDeleting = true;
                    setTimeout(type, 2000);
                    return;
                }
                setTimeout(type, 100);
            } else {
                typingElement.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % texts.length;
                    setTimeout(type, 400);
                    return;
                }
                setTimeout(type, 50);
            }
        }
        type();
    }
    window.startTyping = startTyping;
    if (document.getElementById('typingText')) startTyping();

    // ---- Contact Form (demo) ----
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
    });

    // ---- Fix placeholder images (if missing) ----
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function () { this.src = 'https://via.placeholder.com/400x300?text=Image'; };
    });
});