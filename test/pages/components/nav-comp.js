class NavComponent {

    get linksNavMwenu() {
        return $$('#primary-menu li[id*=menu]');
    } 

    get homeMenuLink(){
        return $('#primary-menu li');
    }

}

export default new NavComponent();