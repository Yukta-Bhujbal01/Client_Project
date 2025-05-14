  document.addEventListener('DOMContentLoaded', function () {
    const offerBoxes = document.querySelectorAll('.offer-box');

    offerBoxes.forEach(box => {
      const radio = box.querySelector('input[type="radio"]');
      const selectors = box.querySelector('.selectors');

      radio.addEventListener('change', function () {
        // Hide all other selectors
        offerBoxes.forEach(b => {
          const sel = b.querySelector('.selectors');
          if (sel) sel.style.display = 'none';
        });

        // Show current selectors
        if (selectors) selectors.style.display = 'flex';
      });

      // Optional: Trigger on load if a radio is pre-selected
      if (radio.checked && selectors) {
        selectors.style.display = 'flex';
      }
    });
  });

