document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.querySelectorAll('.task-checkbox');

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
          const inputId = this.id.replace('check', 'input-box');
          const input = document.getElementById(inputId);

          if (this.checked) {
              input.classList.add('line-through');
          } else {
              input.classList.remove('line-through');
          }
      });
  });
});
