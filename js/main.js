'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const blackArea = document.querySelector('.black-area');
  const menuItems = document.querySelectorAll('.hamburger-menu-section');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });

  blackArea.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    });
  });


  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });

  /*=================================================
  ハンバーガ―メニュー：内部リンククリックで閉じる
  ===================================================*/
  // overlay.onclick = () => {
  //   close.classList.toggle("open");
  // };

}