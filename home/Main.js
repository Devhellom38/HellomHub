  function StartToggle() {
        var projectBtns = document.getElementById('ProjectBtns');
        var title = document.querySelector('.title');

        if (projectBtns.style.display === 'none' || projectBtns.style.display === '') {
            projectBtns.style.display = 'block';
            title.style.display = 'none';
        } else {
            projectBtns.style.display = 'none';
            title.style.display = 'block';
        }
    }
