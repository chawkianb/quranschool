/**
 * مدرسة قرآنية - مسجد الفضيل الورثلي
 * Main JavaScript File
 */

// Department Data
const departmentData = {
    preparatory: {
        title: 'قسم التحضيري',
        icon: 'baby',
        description: 'قسم مخصص للأطفال في سن ما قبل التمدرس، يهدف إلى بناء أساس قرآني متين من خلال أنشطة تعليمية ممتعة وتفاعلية.',
        targetAge: '4-6 سنوات',
        students: 45,
        teacher: '4 معلمات',
        schedule: 'السبت - الأربعاء: 9:00 ص - 12:00 م',
        features: [
            'تعليم الحروف العربية بشكل تفاعلي',
            'بدايات حفظ القرآن الكريم',
            'ألعاب تعليمية قرآنية',
            'أنشطة تنمية الذاكرة',
            'تعليم الصلاة الأساسية'
        ],
        requirements: [
            'العمر: 4-6 سنوات',
            'قدرة على الجلوس لفترة قصيرة',
            'رغبة الطفل في التعلم'
        ]
    },
    literacy: {
        title: 'قسم محو الأمية',
        icon: 'book-open',
        description: 'قسم مخصص للكبار أو من فاتهم قطار التعليم، يهدف إلى تعليم القراءة والكتابة والقرآن الكريم.',
        targetAge: '15+ سنة',
        students: 30,
        teacher: '3 معلمات',
        schedule: 'السبت - الأربعاء: 4:00 م - 8:00 م',
        features: [
            'تعليم القراءة والكتابة',
            'حفظ القرآن الكريم',
            'أساسيات التجويد',
            'تعليم الصلاة والصيام',
            'العقيدة الإسلامية'
        ],
        requirements: [
            'العمر: 15 سنة فما فوق',
            'الإرادة الصادقة للتعلم',
            'الالتزام بالمواعيد'
        ]
    },
    students: {
        title: 'قسم المتمدرسين',
        icon: 'users',
        description: 'قسم شامل للطلاب الملتحقين بالمدارس، يشمل فرعين متخصصين لتلبية احتياجاتهم.',
        targetAge: '6-18 سنة',
        students: 120,
        teacher: '12 معلماً ومعلمة',
        branches: [
            {
                name: 'فرع متمدرسي الدوام',
                icon: 'calendar-check',
                description: 'برنامج تعليمي منتظم طوال السنة الدراسية',
                schedule: 'السبت - الخميس: 4:00 م - 8:00 م',
                features: [
                    'حفظ القرآن الكريم',
                    'تعلم التجويد',
                    'المراجعة اليومية',
                    'اختبارات دورية'
                ]
            },
            {
                name: 'فرع المدرسة الصيفية',
                icon: 'sun',
                description: 'برنامج مكثف خلال فصل الصيف',
                schedule: 'يوليو - أغسطس: 9:00 ص - 2:00 م',
                features: [
                    'حفظ مكثف',
                    'مراجعة شاملة',
                    'مسابقات قرآنية',
                    'أنشطة ترفيهية'
                ]
            }
        ],
        features: [
            'منهج علمي منظم',
            'معلمون مؤهلون',
            'متابعة مستمرة',
            'اختبارات تقييمية'
        ],
        requirements: [
            'العمر: 6-18 سنة',
            'التحاق بالمدرسة النظامية',
            'الالتزام بالحصص'
        ]
    },
    women: {
        title: 'قسم تحفيظ النساء',
        icon: 'heart',
        description: 'حلقات مخصصة للنساء من جميع الأعمار، يوفر بيئة تعليمية مريحة ومحفزة.',
        targetAge: 'جميع الأعمار',
        students: 85,
        teacher: '6 معلمات',
        schedule: 'السبت - الخميس: 10:00 ص - 2:00 م (حصة أولى) | 4:00 م - 8:00 م (حصة ثانية)',
        features: [
            'حفظ القرآن الكريم',
            'تعلم التجويد',
            'السلامة الصوتية',
            'المراجعة المستمرة',
            'حلقات تحفيظ متنوعة'
        ],
        requirements: [
            'أن تكون من sexe الأنثى',
            'الرغبة الصادقة في حفظ القرآن',
            'الالتزام بالحضور'
        ]
    }
};

// DOM Elements
let header;
let nav;
let mobileMenuBtn;
let modal;
let toast;
let contactForm;
let animatedElements = [];

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    setupEventListeners();
    initializeIcons();
    initializeAnimations();
});

// Initialize DOM elements
function initializeElements() {
    header = document.getElementById('header');
    nav = document.getElementById('nav');
    mobileMenuBtn = document.getElementById('mobileMenuBtn');
    modal = document.getElementById('modal');
    toast = document.getElementById('toast');
    contactForm = document.getElementById('contactForm');
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Header scroll effect
    window.addEventListener('scroll', handleScroll);

    // Close modal on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', handleSmoothScroll);
    });
}

// Initialize Lucide icons
function initializeIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Initialize scroll animations
function initializeAnimations() {
    animatedElements = document.querySelectorAll('.department-card, .stat-card, .program-card, .contact-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Initialize counters
    initializeCounters();
}

// Initialize number counters
function initializeCounters() {
    const counters = document.querySelectorAll('[data-target]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// Animate counter from 0 to target
function animateCounter(element, target) {
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeOutQuart(progress);
        const current = Math.floor(easeProgress * target);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// Easing function
function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
}

// Toggle mobile menu
function toggleMobileMenu() {
    nav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');

    if (nav.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Close mobile menu
function closeMobileMenu() {
    nav.classList.remove('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.setAttribute('data-lucide', 'menu');

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Handle scroll
function handleScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Handle smooth scroll
function handleSmoothScroll(e) {
    const href = e.currentTarget.getAttribute('href');

    if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
            const headerHeight = header.offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    // Validate form
    if (!validateForm(data)) {
        return;
    }

    // Simulate form submission
    setTimeout(() => {
        showToast();
        contactForm.reset();

        // Log submission (in real app, this would be an API call)
        console.log('Form submitted:', data);
    }, 500);
}

// Validate form
function validateForm(data) {
    if (!data.name || data.name.trim().length < 3) {
        alert('يرجى إدخال اسم صحيح');
        return false;
    }

    if (!data.phone || !/^[\d\s+()-]{8,}$/.test(data.phone)) {
        alert('يرجى إدخال رقم هاتف صحيح');
        return false;
    }

    if (!data.department) {
        alert('يرجى اختيار القسم');
        return false;
    }

    return true;
}

// Show toast notification
function showToast() {
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Open modal
function openModal(departmentId) {
    const data = departmentData[departmentId];

    if (!data) return;

    const modalBody = document.getElementById('modalBody');
    let content = '';

    if (departmentId === 'students') {
        content = `
            <div class="modal-header">
                <div class="card-icon">
                    <i data-lucide="${data.icon}"></i>
                </div>
                <h2>${data.title}</h2>
            </div>
            <div class="modal-body">
                <p>${data.description}</p>

                <div class="sub-branches">
                    ${data.branches.map(branch => `
                        <div class="branch-item">
                            <div class="branch-icon">
                                <i data-lucide="${branch.icon}"></i>
                            </div>
                            <div class="branch-info">
                                <h4>${branch.name}</h4>
                                <p>${branch.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <h3>الجدول الزمني</h3>
                <ul>
                    ${data.branches.map(branch => `
                        <li><i data-lucide="calendar"></i> ${branch.name}: ${branch.schedule}</li>
                    `).join('')}
                </ul>

                <h3>المميزات</h3>
                <ul>
                    ${data.features.map(feature => `
                        <li><i data-lucide="check"></i> ${feature}</li>
                    `).join('')}
                </ul>

                <h3>الشروط</h3>
                <ul>
                    ${data.requirements.map(req => `
                        <li><i data-lucide="check"></i> ${req}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    } else {
        content = `
            <div class="modal-header">
                <div class="card-icon">
                    <i data-lucide="${data.icon}"></i>
                </div>
                <h2>${data.title}</h2>
            </div>
            <div class="modal-body">
                <p>${data.description}</p>

                <h3>معلومات القسم</h3>
                <ul>
                    <li><i data-lucide="users"></i> عدد الطلاب: ${data.students}</li>
                    <li><i data-lucide="user-check"></i> ${data.teacher}</li>
                    <li><i data-lucide="calendar"></i> ${data.schedule}</li>
                    <li><i data-lucide="target"></i> الفئة العمرية: ${data.targetAge}</li>
                </ul>

                <h3>المميزات</h3>
                <ul>
                    ${data.features.map(feature => `
                        <li><i data-lucide="check"></i> ${feature}</li>
                    `).join('')}
                </ul>

                <h3>شروط القبول</h3>
                <ul>
                    ${data.requirements.map(req => `
                        <li><i data-lucide="check"></i> ${req}</li>
                    `).join('')}
                </ul>
            </div>
        `;
    }

    modalBody.innerHTML = content;
    modal.classList.add('active');

    // Re-initialize icons for modal content
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Make openModal and closeModal globally accessible
window.openModal = openModal;
window.closeModal = closeModal;

// ==========================================
// Teacher Management System
// ==========================================

// Teacher Data (Sample)
const teachersData = {
    1: {
        name: 'الشيخ أحمد محمد',
        specialty: 'قسم المتمدرسين - فرع الدوام',
        students: 24,
        present: 18,
        absent: 6,
        attendanceRate: 92,
        progressLevels: { 5: 12, 10: 8, 20: 4, 30: 2, 60: 1 },
        studentsList: [
            { id: 1, name: 'محمد علي', level: 20, status: 'present' },
            { id: 2, name: 'أحمد خالد', level: 10, status: 'present' },
            { id: 3, name: 'عبدالله سالم', level: 15, status: 'absent' },
            { id: 4, name: 'خالد عمر', level: 5, status: 'present' },
            { id: 5, name: 'يوسف حسن', level: 25, status: 'present' },
            { id: 6, name: 'طارق محمود', level: 30, status: 'absent' },
            { id: 7, name: 'سامي فهد', level: 10, status: 'present' },
            { id: 8, name: 'ناصر Abdulrahman', level: 5, status: 'present' }
        ],
        competitions: [
            { name: 'المسابقة المحلية للتصحيح', date: '15/06/2025', result: 'المركز الأول' },
            { name: 'مسابقة حفظ المتون', date: '20/05/2025', result: 'مشاركة' }
        ]
    },
    2: {
        name: 'الأستاذة فاطمة علي',
        specialty: 'قسم تحفيظ النساء',
        students: 32,
        present: 30,
        absent: 2,
        attendanceRate: 94,
        progressLevels: { 5: 15, 10: 10, 20: 5, 30: 3, 60: 1 },
        studentsList: [
            { id: 1, name: 'نورة أحمد', level: 30, status: 'present' },
            { id: 2, name: 'مريم خالد', level: 20, status: 'present' },
            { id: 3, name: 'سارة علي', level: 10, status: 'present' },
            { id: 4, name: 'فاطمة حسن', level: 15, status: 'absent' },
            { id: 5, name: 'أمينة عبدالله', level: 25, status: 'present' },
            { id: 6, name: 'حصة محمود', level: 5, status: 'present' },
            { id: 7, name: 'زهرة سالم', level: 10, status: 'present' },
            { id: 8, name: 'ليلى فهد', level: 20, status: 'absent' }
        ],
        competitions: [
            { name: 'مسابقة القراءة الجماعية', date: '10/06/2025', result: 'المركز الثاني' }
        ]
    },
    3: {
        name: 'الشيخ عبدالله سالم',
        specialty: 'قسم التحضيري',
        students: 18,
        present: 16,
        absent: 2,
        attendanceRate: 89,
        progressLevels: { 5: 10, 10: 5, 20: 2, 30: 0, 60: 0 },
        studentsList: [
            { id: 1, name: 'عمر محمد', level: 5, status: 'present' },
            { id: 2, name: 'حمزة أحمد', level: 10, status: 'present' },
            { id: 3, name: 'زياد خالد', level: 5, status: 'absent' },
            { id: 4, name: 'بدر سالم', level: 10, status: 'present' },
            { id: 5, name: 'سعد عمر', level: 20, status: 'present' },
            { id: 6, name: 'فهد Abdulrahman', level: 5, status: 'present' },
            { id: 7, name: 'ماجد حسن', level: 10, status: 'absent' },
            { id: 8, name: 'راكان فهد', level: 5, status: 'present' }
        ],
        competitions: []
    }
};

// Current selected teacher for printing
let currentPrintTeacher = null;

// Initialize teacher counters on load
document.addEventListener('DOMContentLoaded', function() {
    initializeTeacherCounters();
});

// Initialize progress counters with animation
function initializeTeacherCounters() {
    const teacherCards = document.querySelectorAll('.teacher-card[data-teacher]');

    teacherCards.forEach(card => {
        const teacherId = card.dataset.teacher;
        const teacher = teachersData[teacherId];

        if (teacher) {
            const counters = card.querySelectorAll('.counter-circle');
            counters.forEach(counter => {
                const level = counter.dataset.level;
                const value = teacher.progressLevels[level] || 0;
                const valueEl = counter.querySelector('.counter-value');

                // Animate the counter
                animateCounter(valueEl, value);
            });
        }
    });
}

// Animate single counter
function animateCounter(element, target) {
    const duration = 1000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = easeOutQuart(progress);
        const current = Math.floor(easeProgress * target);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target;
            element.parentElement.classList.add('animate');
        }
    }

    requestAnimationFrame(update);
}

// Open Attendance Modal
function openAttendanceModal(teacherId) {
    const teacher = teachersData[teacherId];
    if (!teacher) return;

    const modalBody = document.getElementById('attendanceModalBody');
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ar-SA', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    let content = `
        <div class="attendance-header">
            <div class="attendance-info">
                <div class="teacher-avatar">
                    <i data-lucide="user"></i>
                </div>
                <div>
                    <h3>${teacher.name}</h3>
                    <span>${teacher.specialty}</span>
                </div>
            </div>
            <div class="attendance-date">
                <i data-lucide="calendar"></i>
                ${formattedDate}
            </div>
        </div>

        <div class="attendance-summary">
            <div class="summary-item">
                <span class="summary-value">${teacher.students}</span>
                <span class="summary-label">إجمالي الطلاب</span>
            </div>
            <div class="summary-item">
                <span class="summary-value">${teacher.present}</span>
                <span class="summary-label">الحاضرون</span>
            </div>
            <div class="summary-item">
                <span class="summary-value">${teacher.absent}</span>
                <span class="summary-label">الغائبون</span>
            </div>
            <div class="summary-item">
                <span class="summary-value">${teacher.attendanceRate}%</span>
                <span class="summary-label">نسبة الحضور</span>
            </div>
        </div>

        <table class="attendance-table">
            <thead>
                <tr>
                    <th>الطالب</th>
                    <th>مستوى الحفظ</th>
                    <th>الحضور</th>
                </tr>
            </thead>
            <tbody>
                ${teacher.studentsList.map(student => `
                    <tr>
                        <td>
                            <div class="student-info">
                                <div class="student-avatar">${student.name.charAt(0)}</div>
                                <span class="student-name">${student.name}</span>
                            </div>
                        </td>
                        <td><span class="level-badge">${student.level} حزب</span></td>
                        <td>
                            <div class="attendance-toggle">
                                <button class="attendance-btn present ${student.status === 'present' ? 'active' : ''}" onclick="toggleAttendance(${teacherId}, ${student.id}, 'present')">
                                    <i data-lucide="check"></i>
                                </button>
                                <button class="attendance-btn absent ${student.status === 'absent' ? 'active' : ''}" onclick="toggleAttendance(${teacherId}, ${student.id}, 'absent')">
                                    <i data-lucide="x"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>

        <div class="attendance-form-actions">
            <button class="btn btn-primary" onclick="generateMonthlyReport(${teacherId})">
                <i data-lucide="file-text"></i>
                تقرير شهري
            </button>
            <button class="btn btn-secondary" onclick="closeAttendanceModal()">
                إغلاق
            </button>
        </div>
    `;

    modalBody.innerHTML = content;

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Show modal
    document.getElementById('attendanceModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Attendance Modal
function closeAttendanceModal() {
    document.getElementById('attendanceModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle student attendance
function toggleAttendance(teacherId, studentId, status) {
    const teacher = teachersData[teacherId];
    if (!teacher) return;

    const student = teacher.studentsList.find(s => s.id === studentId);
    if (student) {
        student.status = status;
        // Update summary
        const present = teacher.studentsList.filter(s => s.status === 'present').length;
        const absent = teacher.studentsList.filter(s => s.status === 'absent').length;
        teacher.present = present;
        teacher.absent = absent;
        teacher.attendanceRate = Math.round((present / teacher.students) * 100);

        // Reopen modal to update
        openAttendanceModal(teacherId);
        showToast('تم تحديث الحضور بنجاح');
    }
}

// Generate Monthly Report (PDF simulation)
function generateMonthlyReport(teacherId) {
    const teacher = teachersData[teacherId];
    if (!teacher) return;

    // Simulate report generation
    showToast('جاري إنشاء التقرير الشهري...');

    setTimeout(() => {
        // Create printable report
        const reportContent = `
            <div class="print-list">
                <div class="print-list-header">
                    <div>
                        <h2>مدرسة القرآن الكريم - مسجد الفضيل الورثلي</h2>
                        <p>تقرير الحضور الشهري</p>
                    </div>
                    <div class="print-info">
                        <p><strong>الأستاذ:</strong> ${teacher.name}</p>
                        <p><strong>القسم:</strong> ${teacher.specialty}</p>
                        <p><strong>الشهر:</strong> ${new Date().toLocaleDateString('ar-SA', { month: 'long', year: 'numeric' })}</p>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>الرقم</th>
                            <th>اسم الطالب</th>
                            <th>مستوى الحفظ</th>
                            <th>عدد أيام الحضور</th>
                            <th>عدد أيام الغياب</th>
                            <th>ملاحظات</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${teacher.studentsList.map((student, index) => `
                            <tr>
                                <td>${index + 1}</td>
                                <td>${student.name}</td>
                                <td>${student.level} حزب</td>
                                <td>${student.status === 'present' ? 22 : 21}</td>
                                <td>${student.status === 'absent' ? 2 : 1}</td>
                                <td>-</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>

                <div style="margin-top: 20px; text-align: center;">
                    <p>إجمالي الغيابات في الشهر: <strong>${teacher.absent * 4} يوم</strong></p>
                    <p>نسبة الحضور: <strong>${teacher.attendanceRate}%</strong></p>
                </div>

                <div style="margin-top: 40px; display: flex; justify-content: space-between;">
                    <div>
                        <p>توقيع الأستاذ:</p>
                        <p style="margin-top: 30px; border-bottom: 1px solid #000; width: 150px;"></p>
                    </div>
                    <div>
                        <p>توقيع الإدارة:</p>
                        <p style="margin-top: 30px; border-bottom: 1px solid #000; width: 150px;"></p>
                    </div>
                </div>
            </div>
        `;

        showPrintPreview(teacherId, reportContent);
    }, 1000);
}

// Show Print Preview Modal
function showPrintPreview(teacherId, content) {
    const teacher = teachersData[teacherId];
    if (!teacher) return;

    currentPrintTeacher = teacherId;

    const previewContent = document.getElementById('printPreviewContent');
    previewContent.innerHTML = `
        <div class="print-header">
            <h2>قائمة الطلاب - ${teacher.name}</h2>
            <p>${teacher.specialty}</p>
        </div>
        <div class="print-preview-content">
            ${content}
        </div>
    `;

    document.getElementById('printPreviewModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Print Preview
function closePrintPreview() {
    document.getElementById('printPreviewModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Print Teacher List (Quick Print)
function printTeacherList(teacherId) {
    const teacher = teachersData[teacherId];
    if (!teacher) return;

    currentPrintTeacher = teacherId;

    const content = `
        <div class="print-list">
            <div class="print-list-header">
                <div>
                    <h2>مدرسة القرآن الكريم</h2>
                    <p>مسجد الفضيل الورثلي</p>
                </div>
                <div class="print-info">
                    <p><strong>الأستاذ:</strong> ${teacher.name}</p>
                    <p><strong>القسم:</strong> ${teacher.specialty}</p>
                    <p><strong>التاريخ:</strong> ${new Date().toLocaleDateString('ar-SA')}</p>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>الرقم</th>
                        <th>اسم الطالب</th>
                        <th>مستوى الحفظ</th>
                        <th>الحضور</th>
                        <th>التوقيع</th>
                    </tr>
                </thead>
                <tbody>
                    ${teacher.studentsList.map((student, index) => `
                        <tr>
                            <td>${index + 1}</td>
                            <td>${student.name}</td>
                            <td>${student.level} حزب</td>
                            <td>${student.status === 'present' ? 'حاضر' : 'غائب'}</td>
                            <td style="height: 30px;"></td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>

            <div style="margin-top: 40px; display: flex; justify-content: space-between;">
                <div>
                    <p>الأستاذ:</p>
                    <p style="margin-top: 30px; border-bottom: 1px solid #000; width: 150px;"></p>
                </div>
                <div>
                    <p>الإدارة:</p>
                    <p style="margin-top: 30px; border-bottom: 1px solid #000; width: 150px;"></p>
                </div>
            </div>
        </div>
    `;

    showPrintPreview(teacherId, content);
}

// Download PDF (using browser print to PDF)
function downloadPDF() {
    showToast('جاري تحميل الملف...');

    // Create a new window for printing
    const printWindow = window.open('', '_blank');

    const teacher = teachersData[currentPrintTeacher];
    const previewContent = document.querySelector('.print-preview-content').innerHTML;

    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>قائمة الطلاب - ${teacher ? teacher.name : ''}</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; padding: 20px; direction: rtl; }
                .print-list { font-size: 12px; }
                .print-list table { width: 100%; border-collapse: collapse; }
                .print-list th, .print-list td { padding: 8px; text-align: right; border: 1px solid #ddd; }
                .print-list th { background: #f5f5f5; font-weight: bold; }
                .print-list-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
                .print-list-header h2 { color: #1B4D3E; }
                .print-info { text-align: left; }
            </style>
        </head>
        <body>
            ${previewContent}
        </body>
        </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
        printWindow.print();
        closePrintPreview();
    }, 500);
}

// Show Add Teacher Form
function showAddTeacherForm() {
    showToast('قريباً - سيتم إضافة نموذج إضافة أستاذ جديد');
}

// Make functions globally accessible
window.openAttendanceModal = openAttendanceModal;
window.closeAttendanceModal = closeAttendanceModal;
window.toggleAttendance = toggleAttendance;
window.generateMonthlyReport = generateMonthlyReport;
window.printTeacherList = printTeacherList;
window.downloadPDF = downloadPDF;
window.showAddTeacherForm = showAddTeacherForm;
window.closePrintPreview = closePrintPreview;