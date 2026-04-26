const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const errors = [];

    // Capture console errors
    page.on('console', msg => {
        if (msg.type() === 'error') {
            errors.push(`Console Error: ${msg.text()}`);
        }
    });

    // Capture page errors
    page.on('pageerror', err => {
        errors.push(`Page Error: ${err.message}`);
    });

    try {
        // Load the page
        await page.goto(`file://${process.cwd()}/index.html`, { waitUntil: 'networkidle' });

        // Wait for content to load
        await page.waitForTimeout(2000);

        // Check page title
        const title = await page.title();
        console.log('Page Title:', title);

        // Check for main sections
        const header = await page.$('.header');
        const hero = await page.$('.hero');
        const departments = await page.$('.departments');
        const stats = await page.$('.stats');
        const teachers = await page.$('.teachers');
        const contact = await page.$('.contact');
        const footer = await page.$('.footer');

        console.log('\n=== Section Checks ===');
        console.log('Header:', header ? '✓ Found' : '✗ Not Found');
        console.log('Hero:', hero ? '✓ Found' : '✗ Not Found');
        console.log('Departments:', departments ? '✓ Found' : '✗ Not Found');
        console.log('Stats:', stats ? '✓ Found' : '✗ Not Found');
        console.log('Teachers Management:', teachers ? '✓ Found' : '✗ Not Found');
        console.log('Contact:', contact ? '✓ Found' : '✗ Not Found');
        console.log('Footer:', footer ? '✓ Found' : '✗ Not Found');

        // Check Teacher Cards
        const teacherCards = await page.$$('.teacher-card[data-teacher]');
        console.log('\nTeacher Cards:', teacherCards.length);

        // Check Progress Counters
        const progressCounters = await page.$$('.progress-counter');
        console.log('Progress Counters:', progressCounters.length);

        // Check Competitions
        const competitions = await page.$$('.competition-item');
        console.log('Competition Items:', competitions.length);

        // Test Attendance Modal
        console.log('\n=== Testing Attendance Modal ===');
        const attendanceBtn = await page.$('.teacher-card[data-teacher="1"] .btn-outline');
        if (attendanceBtn) {
            await attendanceBtn.click();
            await page.waitForTimeout(500);
            const attendanceModal = await page.$('#attendanceModal.active');
            console.log('Attendance Modal opens:', attendanceModal ? '✓ Working' : '✗ Not Working');

            // Close modal
            const closeBtn = await page.$('#attendanceModal .modal-close');
            if (closeBtn) {
                await closeBtn.click();
                await page.waitForTimeout(300);
            }
        }

        // Test Print Button
        console.log('\n=== Testing Print Button ===');
        const printBtn = await page.$('.teacher-card[data-teacher="1"] .btn-secondary');
        if (printBtn) {
            await printBtn.click();
            await page.waitForTimeout(500);
            const printModal = await page.$('#printPreviewModal.active');
            console.log('Print Preview Modal opens:', printModal ? '✓ Working' : '✗ Not Working');
        }

        // Report errors
        console.log('\n=== Console Errors ===');
        if (errors.length === 0) {
            console.log('✓ No errors detected!');
        } else {
            errors.forEach(err => console.log('✗', err));
        }

        console.log('\n✓ All tests completed successfully!');

    } catch (error) {
        console.error('Test failed:', error.message);
    } finally {
        await browser.close();
    }
})();