const data_section = document.getElementById('data-section');
const toggle = document.getElementById('image1');
const line = document.getElementById('image2');
const showdata = document.getElementById('data');

toggle.addEventListener('click', function() {
    line.style.top = '103px';
  if (data_section.style.display === 'none') {
    showdata.style.transition = 'height 1s ease';
    data_section.style.display = 'block';
    line.style.top = '276px';
    setTimeout(() => {
        setTimeout(() => {
          data_section.style.height = data_section.scrollHeight + 'px';
        }, 500); 
      }, 10);
  } else {
    data_section.style.height = '0';
    setTimeout(() => {
      data_section.style.display = 'none';
    }, 400);
  }

  image1.classList.toggle('active');
  if (image1.classList.contains('active')) {
    image1.src = "./public/playground_assets/arrow-down.svg";
  } else {
    image1.src = "./public/playground_assets/vector18-gu1t.svg";
  }
});


