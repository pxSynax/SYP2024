// app.test.js
describe('Website', () => {
    it('should load the homepage and contain the correct title', () => {
        // Assuming you use a library like Puppeteer or Cypress for browser testing
        // You would check if the homepage loads correctly and contains certain text
        const homepage = 'http://localhost:3000';
        const pageTitle = 'My Web Shop';

        fetch(homepage)
            .then(response => response.text())
            .then(data => {
                expect(data).toContain(pageTitle);
            });
    });
});