
// #region 轮播图实现

  //轮播图
  //所有的图url
  const carouselUrls = ['https://ooo.0x0.ooo/2024/08/06/OtTmJl.png',
    'https://ooo.0x0.ooo/2024/08/06/OtTplg.jpg',
    'https://ooo.0x0.ooo/2024/08/06/OtTPTB.jpg',
    'https://ooo.0x0.ooo/2024/08/06/OtTRZs.png',
    'https://ooo.0x0.ooo/2024/08/06/OtTtcK.png'
  ]
  //容器
  const carouselContainer = document.querySelector('div.carousel-container')
  //图片img
  const img = document.querySelector('.carousel-container > .img')
  //左右
  const carouselPrevBtn = document.querySelector('.carousel-prev-btn')
  const carouselNextBtn = document.querySelector('.carousel-next-btn')
  //按钮的li
  const lis = document.querySelectorAll('.carousel-container .carousel-ul > li')
  //第几张图
  let carouselLiIndex=0;
  //轮播时间(ms)
  const carouselIntervalTime = 5000

  //设置第一张图
  img.style.backgroundImage = `url("${carouselUrls[0]}")`

  //计时
  let carouselInterval = setInterval(() => {
    document.querySelector('.carousel-container .carousel-ul > li.active').classList.remove('active')
    carouselLiIndex = (carouselLiIndex+1)%lis.length
    img.style.backgroundImage = `url("${carouselUrls[carouselLiIndex]}")`
    lis[carouselLiIndex].classList.add('active')
  }, carouselIntervalTime);

  //事件（点击li、左右按钮和移入轮播图）
  //点container进入prts
  carouselContainer.addEventListener('click',()=>{
    window.open("https://prts.wiki")
  })
  //点li
  for(let j=0;j<lis.length;j++){
    lis[j].addEventListener('click',(e)=>{
      document.querySelector('.carousel-container .carousel-ul > li.active').classList.remove('active')
      lis[j].classList.add('active') 
      img.style.backgroundImage = `url("${carouselUrls[j]}")`
      e.stopPropagation()
    })
  }
    //左按钮
  carouselPrevBtn.addEventListener('click',(e)=>{
    lis[carouselLiIndex].classList.remove('active')
    carouselLiIndex = (carouselLiIndex-1>=0)?(carouselLiIndex-1):lis.length-1
    img.style.backgroundImage = `url("${carouselUrls[carouselLiIndex]}")`
    lis[carouselLiIndex].classList.add('active')
    e.stopPropagation()
  })
    //右按钮
  carouselNextBtn.addEventListener('click',(e)=>{
    lis[carouselLiIndex].classList.remove('active')
    carouselLiIndex = (carouselLiIndex+1)%lis.length
    img.style.backgroundImage = `url("${carouselUrls[carouselLiIndex]}")`
    lis[carouselLiIndex].classList.add('active')
    e.stopPropagation()
  })


  // 移入轮播容器
  carouselContainer.addEventListener('mouseenter',()=>{
    clearInterval(carouselInterval)
  })
  // 移出轮播容器
  carouselContainer.addEventListener('mouseleave',()=>{
    carouselInterval = setInterval(() => {
      document.querySelector('.carousel-container .carousel-ul > li.active').classList.remove('active')
      carouselLiIndex = (carouselLiIndex+1)%lis.length
      lis[carouselLiIndex].classList.add('active')
      img.style.backgroundImage = `url("${carouselUrls[carouselLiIndex]}")`
    }, carouselIntervalTime);
  })
  
// #endregion 轮播图实现

// #region 置顶实现
const returnTop = document.querySelector('.return-top')
returnTop.addEventListener('click', ()=>{
  const id =  setInterval(() => {
    document.documentElement.scrollTop -= 50
    if(document.documentElement.scrollTop<=0)clearInterval(id)
  }, 2);
})
// #endregion 置顶实现

// #region 展示(display)
displayData = [
  {
    task: 'javascript',
    url: 'https://radicalhub.com/wp-content/uploads/2018/07/javascript.jpg',
    href: 'https://www.bilibili.com/video/BV1Y84y1L7Nn/?spm_id_from=333.337.search-card.all.click'
  },
  {
    task: 'nodejs',
    url: 'https://picture.gptkong.com/20240806/131023e47af0c94f51aa31b4c902ba2e18.png',
    href: 'https://www.bilibili.com/video/BV1gM411W7ex?p=1&vd_source=e364c94095584741965b1e4ca136c27f'
  },
  {
    task: '计算机网络',
    url: 'https://picture.gptkong.com/20240806/130526e420a81f48d7a4826655c64b62de.png',
    href: 'https://www.bilibili.com/video/BV1c4411d7jb/?spm_id_from=333.337.search-card.all.click'
  }
]
const displays = document.querySelectorAll('div.display > div')
//展示
for(let i=0;i<displays.length;i++){
  const element = displays[i]
  element.style.backgroundImage = `url(${displayData[i].url})`
  element.addEventListener('click', ()=>{
    window.open(displayData[i].href)
  })
}
// #endregion 展示(display)

// #region 文字内容（博客、记录等）

// #endregion 文字内容（博客、记录等）



