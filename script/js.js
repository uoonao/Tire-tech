const header = document.querySelector('#header_container')
const nav = document.querySelector('.navList')
const mainBtn = document.querySelectorAll('.navList > li > a.mainBtn')

// 데스크탑 - 서브메뉴 열림
nav.addEventListener('mouseenter', ()=>{
  if(window.innerWidth > 1092) {
    header.classList.add('menuOpen')
  }
})
header.addEventListener('mouseleave', ()=>{
  if(window.innerWidth > 1169) {
    header.classList.remove('menuOpen')
  }
})


// 모바일 - 서브메뉴 열림
mainBtn.forEach(btn => {
  btn.addEventListener('click', function(e) {
    if(window.innerWidth < 1170)
      e.preventDefault()

    const li = this.parentElement;  // 클릭한 메인 메뉴 a의 부모 li

    if (li.classList.contains('on')) {
      li.classList.remove('on')
    }
    else {
      // 현재 클릭한 메뉴 제외 열려있는 메뉴 전부 닫아주기
      document.querySelectorAll('.navList > li').forEach(item => {
        item.classList.remove('on')
      })
      // 현재 클릭한 메뉴 열기
      li.classList.add('on')
    }
  })
});


// 모바일 - trigger 버튼 클릭
document.querySelector('.trigger').addEventListener('click', function() {
  document.querySelector('header').classList.toggle('open')
})




// 화면 내의 모든 가상 링크 클릭시 스크롤 막아줌
document.querySelectorAll('a').forEach(anchor => {
  anchor.addEventListener('click',function(e){
    const href = this.getAttribute('href')    
    if( href === '#'){
      e.preventDefault()
    }
  })
})
