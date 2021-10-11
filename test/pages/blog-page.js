import NavComponent from "./components/nav-comp";

class BlogPage {

    open() {
        return browser.url('/blog');
    }

    get postsList() {
        return $$("//*[@id='recent-posts-3']/ul/li");
    }

    get NavComponent (){
        return NavComponent;
    }

}

export default new BlogPage();