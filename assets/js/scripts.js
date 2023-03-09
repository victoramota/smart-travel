window.addEventListener('DOMContentLoaded', () => {
    sidePanel.openMobileMenu();
    sidePanel.closeMobileMenu();
});

const sidePanel = {
    openMobileMenu () {
        const openMobilePanel = document.querySelector('.open-mobile-panel');
        openMobilePanel.addEventListener('click', () => document.body.classList.add('side-panel-open'));
    },
    closeMobileMenu () {
        const closeMobilePanel = document.querySelector('.close-mobile-panel');
        const mobilePanelMask = document.querySelector('#mobile-panel-mask');
        const closeButtons = [closeMobilePanel, mobilePanelMask]
        
        closeButtons.forEach(button => {
            button.addEventListener('click', () => document.body.classList.remove('side-panel-open'));
        });

        window.addEventListener('resize', function() {
            var browserWitdh = window.innerWidth;
            if (browserWitdh > 768) {
                document.body.classList.remove('side-panel-open')
            }
        });
    }
}