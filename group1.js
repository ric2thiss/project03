const data_section = document.getElementById('data-section');
const toggle = document.getElementById('image1');
const line = document.getElementById('image2');
const showdata = document.getElementById('data');
const header2 = document.getElementById('header2');

toggle.addEventListener('click', function() {
    line.style.top = '103px';
    header2.style.top = '120px';
  if (data_section.style.display === 'none') {
    showdata.style.transition = '1s';
    data_section.style.display = 'block';
    line.style.top = '276px';
    header2.style.top = '290px';
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

  toggle.classList.toggle('active');
  console.log(toggle)
  if (toggle.classList.contains('active')) {
    toggle.src = "./public/playground_assets/arrow-down.svg";
  } else {
    toggle.src = "./public/playground_assets/vector18-gu1t.svg";
  }
});


