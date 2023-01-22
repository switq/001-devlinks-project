function toggleMode() {
  const html = document.documentElement // 'documentElement' é a tag html
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else{
  //   html.classList.add('light')
  // }
  html.classList.toggle('light')

  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')) {
    img.setAttribute('src', 'assets/profile-light-800x800.png')
  } else {
    img.setAttribute("src", "assets/profile-800x800.png")
  }
}
