document.addEventListener("click",function(e){

  const mediaQuery = window.matchMedia('(max-width: 768px)')

  if(e.target.classList.contains("gallery-item")){
      const src = e.target.getAttribute("src");
      document.querySelector(".modal-img").src = src;
      const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));   

      if (mediaQuery.matches) {
        // myModal._element.transform = 'rotate(-90deg)';
      }

      myModal.show();
  }

})