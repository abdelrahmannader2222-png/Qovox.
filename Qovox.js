window.onload = function() {
    console.log("QOVOX script loaded successfully!");

    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.querySelector('.close-btn');

    menuBtn.addEventListener('click', function() {
        console.log("Menu button clicked"); 
        sideMenu.style.width = "250px";
        overlay.style.display = "block";
    });

    function closeNav() {
        sideMenu.style.width = "0";
        overlay.style.display = "none";
    }

    closeBtn.onclick = closeNav;
    overlay.onclick = closeNav;
};
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    menuBtn.onclick = () => {
        sideMenu.style.width = "280px"; 
        overlay.style.display = "block";
    };

    const closeNav = () => {
        sideMenu.style.width = "0";
        overlay.style.display = "none";
    };

    closeBtn.onclick = closeNav;
    overlay.onclick = closeNav;

    const links = document.querySelectorAll('.side-nav a');
    links.forEach(link => {
        link.onclick = () => {
            closeNav();
        };
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    const openNav = () => {
        sideMenu.style.width = "280px";
        overlay.style.display = "block";
    };

    const closeNav = () => {
        sideMenu.style.width = "0";
        overlay.style.display = "none";
    };

    menuBtn.onclick = openNav;
    closeBtn.onclick = closeNav;
    overlay.onclick = closeNav;

    document.querySelectorAll('.side-nav a').forEach(anchor => {
        anchor.onclick = function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    closeNav(); 
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        };
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    const openNav = () => {
        sideMenu.style.width = "280px";
        overlay.style.display = "block";
    };

    const closeNav = () => {
        sideMenu.style.width = "0";
        overlay.style.display = "none";
    };

    menuBtn.onclick = openNav;
    closeBtn.onclick = closeNav;
    overlay.onclick = closeNav;

    document.querySelectorAll('.side-nav a').forEach(anchor => {
        anchor.onclick = function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    closeNav();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        };
    });

    const backToTop = document.createElement('button');
    backToTop.innerHTML = "↑";
    backToTop.className = "back-to-top";
    document.body.appendChild(backToTop);

    window.onscroll = () => {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    };

    backToTop.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
});
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    const openNav = () => {
        sideMenu.style.width = "280px";
        overlay.style.display = "block";
    };

    const closeNav = () => {
        sideMenu.style.width = "0";
        overlay.style.display = "none";
    };

    menuBtn.onclick = openNav;
    closeBtn.onclick = closeNav;
    overlay.onclick = closeNav;

    document.querySelectorAll('.side-nav a').forEach(anchor => {
        anchor.onclick = function(e) {
            const targetId = this.getAttribute('href');

            if (targetId.startsWith('#')) {
                e.preventDefault();
                
                if (targetId === "#") {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    closeNav();
                    return;
                }

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    closeNav(); 
                    setTimeout(() => {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            }
        };
    });
});