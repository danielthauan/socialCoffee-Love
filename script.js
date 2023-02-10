// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item')

// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications')
const messages = document.querySelector('.messages')
const message = messages.querySelectorAll('.message')
const messageSearch = document.querySelector('#message-search')

// THEME
const theme = document.querySelector('#theme')
const themeModal = document.querySelector('.customize-theme')
const fontSizes = document.querySelectorAll('.choose-size span')
var root = document.querySelector(':root')
const colorPallete = document.querySelectorAll('.choose-color span')
const Bg1 = document.querySelector('.bg-1')
const Bg2 = document.querySelector('.bg-2')
const Bg3 = document.querySelector('.bg-3')

//====================== SIDEBAR ===================

// REMOVE ACTIVE CLASS FROM ALL MENU ITEMS
const changeActiveItem = () => {
  menuItems.forEach(item => {
    item.classList.remove('active')
  })
}

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    changeActiveItem()
    item.classList.add('active')
    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none'
    } else {
      document.querySelector('.notifications-popup').style.display = 'block'
      document.querySelector(
        '#notifications .notification-count'
      ).style.display = 'none'
    }
  })
})

//======================= MESSAGES ====================
// SEARCHES CHATS
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase()
  message.forEach(user => {
    let name = user.querySelector('h5').textContent.toLowerCase()
    if (name.indexOf(val) != -1) {
      user.style.display = 'flex'
    } else {
      user.style.display = 'none'
    }
  })
}
// SEARCH CHAT
messageSearch.addEventListener('keyup', searchMessage)

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)'
  messagesNotification.querySelector('.notification-count').style.display =
    'none'

  setTimeout(() => {
    messages.style.boxShadow = 'none'
  }, 2000)
})

// THEME/DISPLAY CUSTOMIZATION
// opens modal
const openThemeModal = () => {
  themeModal.style.display = 'grid'
}

// closes modal
const closeThemeModal = e => {
  if (e.target.classList.contains('customize-theme')) {
    themeModal.style.display = 'none'
  }
}
// close modal
themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal)

//====================== FONTS ===================

// remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove('active')
  })
}

fontSizes.forEach(size => {
  size.addEventListener('click', () => {
    removeSizeSelector()
    let fontSize
    size.classList.toggle('active')

    if (size.classList.contains('font-size-1')) {
      fontSize = '10px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '5.4rem')
    } else if (size.classList.contains('font-size-2')) {
      fontSize = ' 13px'
      root.style.setProperty('----sticky-top-left', '5.4rem')
      root.style.setProperty('----sticky-top-right', '-7rem')
    } else if (size.classList.contains('font-size-3')) {
      fontSize = ' 16px'
      root.style.setProperty('----sticky-top-left', '-2rem')
      root.style.setProperty('----sticky-top-right', '-17rem')
    } else if (size.classList.contains('font-size-4')) {
      fontSize = ' 19px'
      root.style.setProperty('----sticky-top-left', '-5rem')
      root.style.setProperty('----sticky-top-right', '-25rem')
    } else if (size.classList.contains('font-size-5')) {
      fontSize = ' 22px'
      root.style.setProperty('----sticky-top-left', '-10rem')
      root.style.setProperty('----sticky-top-right', '-33rem')
    }

    // change font size of the root html element
    document.querySelector('html').style.fontSize = fontSize
  })
})

// remove active class from colors
const changeActiveColorClass = () => {
  colorPallete.forEach(colorPicker => {
    colorPicker.classList.remove('active')
  })
}

// change primary colors
colorPallete.forEach(color => {
  color.addEventListener('click', () => {
    let primary
    // remove active class from colors
    changeActiveColorClass()

    if (color.classList.contains('color-1')) {
      primaryHue = '252'
    } else if (color.classList.contains('color-2')) {
      primaryHue = '52'
    } else if (color.classList.contains('color-3')) {
      primaryHue = '352'
    } else if (color.classList.contains('color-4')) {
      primaryHue = '152'
    } else if (color.classList.contains('color-5')) {
      primaryHue = '202'
    }
    color.classList.add('active')

    root.style.setProperty('--primary-color-hue', primaryHue)
  })
})

// theme BACKGROUND values
let lightColorLightness
let whiteColorLightness
let darkColorLightness

// changes background color
const changeBG = () => {
  root.style.setProperty('--light-color-lightness', lightColorLightness)
  root.style.setProperty('--white-color-lightness', whiteColorLightness)
  root.style.setProperty('--dark-color-lightness', darkColorLightness)
}

Bg1.addEventListener('click', () => {
  // add active class
  Bg1.classList.add('active')
  //remove active class from others
  Bg2.classList.remove('active')
  Bg3.classList.remove('active')
  //remove customized changes from the local storage
  window.location.reload()
})

Bg2.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '20%'
  lightColorLightness = '15%'

  // add active class
  Bg2.classList.add('active')
  //remove active class from others
  Bg1.classList.remove('active')
  Bg3.classList.remove('active')
  changeBG()
})

Bg3.addEventListener('click', () => {
  darkColorLightness = '95%'
  whiteColorLightness = '10%'
  lightColorLightness = '0%'

  // add active class
  Bg3.classList.add('active')
  //remove active class from others
  Bg1.classList.remove('active')
  Bg2.classList.remove('active')
  changeBG()
})

function newPost() {
  var publicationNewPost = document.getElementById('pub').value
  var newPostFeed = document.getElementById('feeds')
  newPostFeed.innerHTML = ` <div class="feed">
  <div class="head">
    <div class="user">
      <div class="profile-photo">
        <img src="./assets/profile-1.jpg" />
      </div>
      <div class="info">
        <h3>Diana Ayi</h3>
        <small>Switzerland, A MINUTE AGO</small>
      </div>
    </div>

    <span class="edit">
      <i class="uil uil-ellipsis-h"></i>
    </span>
  </div>

  <div class="photo">
    <img src="./assets/feed-3.jpg" />
  </div>

  <div class="action-buttons">
    <div class="interaction-buttons">
      <span><i class="uil uil-heart"></i></span>
      <span><i class="uil uil-comment-dots"></i></span>
      <span><i class="uil uil-share-alt"></i></span>
    </div>

    <div class="bookmark">
      <span><i class="uil uil-bookmark-full"></i></span>
    </div>
  </div>
  <div class="liked-by">
    <span><img src="./assets/profile-8.jpg" alt="" /></span>
    <span><img src="./assets/profile-5.jpg" alt="" /></span>
    <span><img src="./assets/profile-18.jpg" alt="" /></span>
    <p>Like by <b>Ernest Achiever</b> and <b>15,009 others</b></p>
  </div>

  <div class="caption">
    <p>
      <b>Diana Ayi</b> ${publicationNewPost}
      <span class="harsh-tag">#lifestyle</span>
    </p>
  </div>
  <div class="comments text-muted">View all 12,845 comments</div>
</div> `
  document.getElementById('create-post').value = ''
}
