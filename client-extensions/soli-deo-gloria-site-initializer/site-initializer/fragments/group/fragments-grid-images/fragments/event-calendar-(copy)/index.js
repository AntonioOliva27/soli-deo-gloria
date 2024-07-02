const DropFilter = () => {
  document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os dropdowns
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
      const selectButton = dropdown.querySelector('.select');
      const dropdownPanel = dropdown.querySelector('.filter-panel');

      // Toggle dropdown visibility when clicking the select button
      selectButton.addEventListener('click', function() {
        dropdownPanel.classList.toggle('show');
      });

      // Handle click on dropdown options
      const dropdownOptions = dropdownPanel.querySelectorAll('li');
      dropdownOptions.forEach(option => {
        option.addEventListener('click', function() {
          // Update text of select button to clicked option
          const optionText = this.textContent.trim();
          selectButton.querySelector('.selected').textContent = optionText;

          // Close dropdown after selecting an option
          dropdownPanel.classList.remove('show');
        });
      });
    });

    // Close dropdown when clicking outside the select button or dropdown panel
    window.addEventListener('click', function(event) {
      dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
          const dropdownPanel = dropdown.querySelector('.filter-panel');
          dropdownPanel.classList.remove('show');
        }
      });
    });
  });
};

DropFilter();

const TimeFilterbtn = () => {
  document.querySelectorAll('.time-filter-btn').forEach((btnTime) => {
    btnTime.addEventListener('click', () => {
      // Remove a classe 'active' de todos os botões
      document.querySelectorAll('.time-filter-btn').forEach((button) => button.classList.remove('active'));
      // Adiciona a classe 'active' ao botão que foi clicado
      btnTime.classList.add('active');
    });
  });
};

TimeFilterbtn();
