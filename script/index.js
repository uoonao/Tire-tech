// more버튼을 누르면 sns내용이 더 보임
document.querySelector('.moreBtn').addEventListener('click',function(){
  document.querySelector('.itemWrap2').style.display = 'block';
  document.querySelector('.more').style.display = 'none';
})


// popup버튼을 클릭하면 popup창 닫기
document.querySelector('.popup_close').addEventListener('click', ()=>{
  document.querySelector('#popup').style.display = 'none';
})

const popup = document.querySelector('#popup');
const checkbox = document.querySelector('#popup input[type="checkbox"]');
const closeBtn = document.querySelector('.popup_close');

// 오늘 날짜 확인
const today = new Date().toDateString();

// 이미 오늘 닫았는지 확인
if (localStorage.getItem('popupDate') === today) {
  popup.style.display = 'none';
}

// 닫기 버튼
closeBtn.addEventListener('click', function(e) {
  e.preventDefault();

  if (checkbox.checked) {
    localStorage.setItem('popupDate', today);
  }

  popup.style.display = 'none';
});