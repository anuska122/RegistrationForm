document.addEventListener('DOMContentLoaded', () => {
    const voterForm = document.getElementById('voterForm');
    const partyForm = document.getElementById('partyForm');

    voterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Voter registered successfully!');
        voterForm.reset();
    });

    partyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Election party registered successfully!');
        partyForm.reset();
    });
});
