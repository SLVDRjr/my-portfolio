const bars = document.getElementById('bars')
const headerNav = document.getElementById('header-nav')
const containerOverlay = document.getElementById('container-overlay')

bars.addEventListener('click', () => {
  const visibility = headerNav.getAttribute('data-visible')

  if(visibility === 'false'){
    setTimeout(function() {
      headerNav.setAttribute('data-visible', true)
    }, 300)
    
    bars.setAttribute('area-expanded', true)
    containerOverlay.setAttribute('area-expanded', true)
  }else{
    headerNav.setAttribute('data-visible', false)
    bars.setAttribute('area-expanded', false)
    setTimeout(function() {
      containerOverlay.setAttribute('area-expanded', false)
    }, 300)
  }
})

window.addEventListener('click', e => {
  if(e.target === containerOverlay){
    headerNav.setAttribute('data-visible', false)
    bars.setAttribute('area-expanded', false)
    setTimeout(function() {
      containerOverlay.setAttribute('area-expanded', false)
    }, 300)
  }
})

window.addEventListener('resize', () => {
  if(window.innerWidth > 768){
    headerNav.setAttribute('data-visible', false)
    bars.setAttribute('area-expanded', false)
    setTimeout(function() {
      containerOverlay.setAttribute('area-expanded', false)
    }, 300)
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

// Form Submission
const postDetails = e => {
  e.preventDefault()

  const name = document.querySelector('#name').value
  const email = document.querySelector('#email').value
  const message = document.querySelector('#message').value

  const params = `name=${name}&email=${email}&message=${message}`

  const xhr = new XMLHttpRequest()

  xhr.open('POST', 'process.php', true)
  xhr.setRequestHeader(
    'Content-type',
    'application/x-www-form-urlencoded'
  )

  xhr.onload = function() {
    console.log(this.responseText)
  }

  xhr.send(params)

}

contactForm.addEventListener('submit', postDetails)


// Form Validation
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const messageInput = document.querySelector('#message')

const nameError = document.querySelector('.name-error')
const emailError = document.querySelector('.email-error')
const messageError = document.querySelector('.message-error')

const submitBtn = document.querySelector('#submit')

// event listeners
nameInput.addEventListener('keyup', validateName)
emailInput.addEventListener('keyup', validateEmail)
messageInput.addEventListener('keyup', validateMessage)

  function validateName(e){
    if(!nameInput.value){ 
      e.preventDefault()
      nameInput.style.borderColor = "red"
      nameError.innerHTML = '<i class="fa-solid fa-exclamation"></i>'
      return false
    }else{
      nameInput.style.borderColor = "green"
      nameError.innerHTML = ''
      return true
    }
  }
  
  function validateEmail(e){
    if(!emailInput.value){
      e.preventDefault()
      emailInput.style.borderColor = "red"
      emailError.innerHTML = '<i class="fa-solid fa-exclamation"></i>'
      return false
    }
  
    if(!emailInput.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      e.preventDefault()
      emailInput.style.borderColor = "red"
      emailError.innerHTML = '<i class="fa-solid fa-exclamation"></i>'
      return false
    }else{
      emailInput.style.borderColor = "green"
      emailError.innerHTML = ''
      return true
    }
  }
  
  function validateMessage(e){
    if(!messageInput.value){
      e.preventDefault()
      messageInput.style.borderColor = "red"
      messageError.innerHTML = '<i class="fa-solid fa-exclamation"></i>'
      return false
    }else{
      messageInput.style.borderColor = "green"
      messageError.innerHTML = ''
      return true
    }
  }

  function reset(){
    nameInput.value = ''
    emailInput.value = ''
    messageInput.value = ''
    nameInput.style.borderColor = ''
    emailInput.style.borderColor = ''
    messageInput.style.borderColor = ''
  }

  contactForm.addEventListener('submit', function() {
    const isValidName = validateName()
    const isValidEmail = validateEmail()
    const isValidMessage = validateMessage()

    if(isValidName && isValidEmail && isValidMessage){
      reset()
    }
  })
   
  

