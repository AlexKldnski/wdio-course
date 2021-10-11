import BlogPage from '../pages/blog-page';
import allureReporter from '@wdio/allure-reporter';

describe('Blog Page', () => {
    it('Get list of recent post & assert each item > 10 chars', async () => {

        allureReporter.addFeature("Blog Page");
        allureReporter.addSeverity("critical");

        await BlogPage.open();

        const posts = await BlogPage.postsList;

        for (let post of posts) {
            const item = await post.getText();
            await expect(item.length).toBeGreaterThan(10);
            }

        await expect(posts).toHaveLength(4);
   
        });

    });