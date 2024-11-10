describe('Website', () => {
    it('should load the homepage and contain the correct title', async () => {
        const homepage = 'http://localhost:3000';
        const pageTitle = '<title>Mini eCommerce - HOMEpage | AppSeed</title>';
        
        const response = await fetch(homepage);
        const data = await response.text();
        expect(data).toContain(pageTitle);
    });
});
