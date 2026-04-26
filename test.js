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
        const contact = await page.$('.contact');
        const footer = await page.$('.footer');

        console.log('\n=== Section Checks ===');
        console.log('Header:', header ? '✓ Found' : '✗ Not Found');
        console.log('Hero:', hero ? '✓ Found' : '✗ Not Found');
        console.log('Departments:', departments ? '✓ Found' : '✗ Not Found');
        console.log('Stats:', stats ? '✓ Found' : '✗ Not Found');
        console.log('Contact:', contact ? '✓ Found' : '✗ Not Found');
        console.log('Footer:', footer ? '✓ Found' : '✗ Not Found');

        // Check department cards
        const departmentCards = await page.$$('.department-card');
        console.log('\nDepartment Cards:', departmentCards.length);

        // Check icons loaded
        const icons = await page.$$('[data-lucide]');
        console.log('Lucide Icons:', icons.length);

        // Test modal functionality
        console.log('\n=== Testing Modal ===');
        const firstButton = await page.$('.department-card .btn');
        if (firstButton) {
            await firstButton.click();
            await page.waitForTimeout(500);
            const modal = await page.$('.modal.active');
            console.log('Modal opens:', modal ? '✓ Working' : '✗ Not Working');

            // Close modal
            const closeBtn = await page.$('.modal-close');
            if (closeBtn) {
                await closeBtn.click();
                await page.waitForTimeout(300);
            }
        }

        // Report errors
        console.log('\n=== Console Errors ===');
        if (errors.length === 0) {
            console.log('✓ No errors detected!');
        } else {
            errors.forEach(err => console.log('✗', err));
        }

        console.log('\n✓ Test completed successfully!');

    } catch (error) {
        console.error('Test failed:', error.message);
    } finally {
        await browser.close();
    }
})();