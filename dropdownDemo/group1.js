// Declare Variables
const group1_line3 = document.querySelectorAll(".group1-line03");
const trigger_info = document.getElementById('trigger-info');
const image1 = document.getElementById('image1');

// Change Hide and Show Icon
trigger_info.addEventListener("click", function() {
  const isHidden = group1_line3[0].style.display === 'none';

  group1_line3.forEach((item) => {
    item.style.transition = 'height 1s ease';

    if (isHidden) {
      item.style.display = 'block';
      item.style.height = '0';
      item.style.overflow = 'hidden';
      item.style.transition = 'height 1s ease';

      setTimeout(() => {
        item.style.height = item.scrollHeight + 'px';
      }, 10);
    } else {
      item.style.height = '0';

      setTimeout(() => {
        item.style.display = 'none';
      }, 300);
    }
  });

  image1.classList.toggle('active');
  if (image1.classList.contains('active')) {
    image1.src = "./public/playground_assets/arrow-down.svg";
  } else {
    image1.src = "./public/playground_assets/vector18-gu1t.svg";
  }
});
