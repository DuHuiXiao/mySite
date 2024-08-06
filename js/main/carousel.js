// #region 首页轮播图实现

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