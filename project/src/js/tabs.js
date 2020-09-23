const forms = document.querySelector('.forms');
const tabLinks = forms.querySelectorAll('.tabs__tablink');
const tabForms = forms.querySelectorAll('.tabs__panel');

$(document).ready(function() {
    function handleTabClick(event) {
        tabForms.forEach((tabform) => {
            tabform.hidden = true;
        });
        tabLinks.forEach((link) => {
            link.setAttribute('aria-selected', false);
        });
        event.currentTarget.setAttribute('aria-selected', true);
        const { id } = event.currentTarget;
        const tabForm = forms.querySelector(`[aria-labelledby="${id}"]`);
        tabForm.hidden = false;
    }
    tabLinks.forEach(tablink => tablink.addEventListener('click', handleTabClick));
});

