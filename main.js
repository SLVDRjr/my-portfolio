const bars = document.getElementById('bars')
const headerNav = document.getElementById('header-nav')
const containerOverlay = document.getElementById('container-overlay')

bars.addEventListener('click', () => {
  const visibility = headerNav.getAttribute('data-visible')

  if(visibility === 'false'){
    headerNav.setAttribute('data-visible', true)
    bars.setAttribute('area-expanded', true)
    containerOverlay.style.display = 'block'
  }else{
    headerNav.setAttribute('data-visible', false)
    bars.setAttribute('area-expanded', false)
    containerOverlay.style.display = 'none'
  }
})

window.addEventListener('click', e => {
  if(e.target === containerOverlay){
    containerOverlay.style.display = 'none'
    headerNav.setAttribute('data-visible', false)
    bars.setAttribute('area-expanded', false)
  }
})

window.addEventListener('resize', () => {
  if(window.innerWidth > 768){
    containerOverlay.style.display = 'none'
    headerNav.setAttribute('data-visible', false)
    bars.setAttribute('area-expanded', false)
  }
})

// ===== hero ===== //

const heroContent = document.querySelector('#hero-content')
const heroImg = document.querySelector('#hero-img')
heroContent.classList.remove('slide-content')
heroImg.classList.remove('slide-content')

const heroObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      heroContent.classList.add('slide-content')
      heroImg.classList.add('slide-content')
      return
    }

    heroContent.classList.remove('slide-content')
    heroImg.classList.remove('slide-content')
  });
});

heroObserver.observe(document.querySelector('#hero'))

// ===== about ===== //

const aboutInfo = document.querySelector('#about-info')
const aboutImg = document.querySelector('.about-img')
aboutInfo.classList.remove('slide-content')
aboutImg.classList.remove('slide-content')

const aboutObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      aboutInfo.classList.add('slide-content')
      aboutImg.classList.add('slide-content')
      return
    }

    aboutInfo.classList.remove('slide-content')
    aboutImg.classList.remove('slide-content')
  });
});

aboutObserver.observe(document.querySelector('#about-content'))

// ===== portfolio ===== //

const portfolioObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const projects = document.querySelectorAll('.project');
    for(let project of projects){
      project = entry.target

      if (entry.isIntersecting) {
        project.classList.add('slide-content');
      return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      project.classList.remove('slide-content');
    }
  });
});

const projContainers = document.querySelectorAll('.project-container')
projContainers.forEach(projContainer => {
  portfolioObserver.observe(projContainer)
})

// ===== contact ===== //

const contactContent = document.querySelector('#contact-content')
const contactForm = document.querySelector('#contact-form')
contactContent.classList.remove('show')
contactForm.classList.remove('show')

const contactObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      contactContent.classList.add('show')
      contactForm.classList.add('show')
      return
    }

    contactContent.classList.remove('show')
    contactForm.classList.remove('show')
  });
});

contactObserver.observe(document.querySelector('#contact-content'))





