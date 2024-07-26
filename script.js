window.onload = function() {
    // Set the start date to July 2016
    const startDate = new Date('July 1, 2016');
    
    // Calculate the target date 55 years from the start date
    const targetDate = new Date(startDate.setFullYear(startDate.getFullYear() + 55));
    
    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;
        
        if (timeDifference <= 0) {
            document.getElementById('countdown').textContent = "It's Free Tay-K Time!";
            document.getElementById('main-clock').textContent = '';
            return;
        }
        
        const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        
        document.getElementById('main-clock').textContent = 
            `${years}y ${days}d ${hours}h ${minutes}m ${seconds}s`;
        document.getElementById('countdown').textContent = 
            `${years} years until Free Tay-K Time`;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);
    
    // Initial call to display the countdown immediately
    updateCountdown();
};
