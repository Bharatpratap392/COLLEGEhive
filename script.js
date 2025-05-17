// Navigation handling
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation items
    const navItems = document.querySelectorAll('.sidebar li');
    
    // Add click event listener to each navigation item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the page to show
            const pageToShow = this.getAttribute('data-page');
            
            // Hide all pages
            document.querySelectorAll('.page-content').forEach(page => {
                page.style.display = 'none';
            });
            
            // Show the selected page
            document.getElementById(pageToShow).style.display = 'block';
        });
    });

    // Calendar functionality
    const calendarGrid = document.querySelector('.calendar-grid');
    const monthYear = document.querySelector('.calendar-header h2');
    const prevMonthBtn = document.querySelector('.calendar-header .btn-icon:first-child');
    const nextMonthBtn = document.querySelector('.calendar-header .btn-icon:last-child');
    
    let currentDate = new Date();
    
    function updateCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        
        // Update month and year display
        monthYear.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
        
        // Clear calendar grid
        calendarGrid.innerHTML = '';
        
        // Get first day of month and total days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const totalDays = lastDay.getDate();
        const startingDay = firstDay.getDay();
        
        // Add empty cells for days before first of month
        for (let i = 0; i < startingDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyCell);
        }
        
        // Add days of the month
        for (let day = 1; day <= totalDays; day++) {
            const dayCell = document.createElement('div');
            dayCell.className = 'calendar-day';
            dayCell.textContent = day;
            
            // Add event listener for day selection
            dayCell.addEventListener('click', () => {
                document.querySelectorAll('.calendar-day').forEach(cell => {
                    cell.classList.remove('selected');
                });
                dayCell.classList.add('selected');
            });
            
            calendarGrid.appendChild(dayCell);
        }
    }
    
    // Initialize calendar
    updateCalendar();
    
    // Add event listeners for month navigation
    prevMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        updateCalendar();
    });
    
    nextMonthBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        updateCalendar();
    });

    // Quiz functionality
    const quizButtons = document.querySelectorAll('.quiz-card .btn-primary');
    quizButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quizName = this.closest('.quiz-card').querySelector('h3').textContent;
            alert(`Starting ${quizName}...`);
            // Add your quiz starting logic here
        });
    });

    // Assignment functionality
    const assignmentButtons = document.querySelectorAll('.assignment-card .btn-primary');
    assignmentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const assignmentName = this.closest('.assignment-card').querySelector('h3').textContent;
            alert(`Viewing details for ${assignmentName}...`);
            // Add your assignment viewing logic here
        });
    });

    // Faculty meeting scheduling
    const meetingButtons = document.querySelectorAll('.faculty-card .btn-primary');
    meetingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const professorName = this.closest('.faculty-card').querySelector('h3').textContent;
            alert(`Scheduling meeting with ${professorName}...`);
            // Add your meeting scheduling logic here
        });
    });

    // Profile photo change
    const changePhotoBtn = document.querySelector('.profile-container .btn-secondary');
    if (changePhotoBtn) {
        changePhotoBtn.addEventListener('click', function() {
            alert('Photo change functionality will be implemented here');
            // Add your photo change logic here
        });
    }
});