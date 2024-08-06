// region 兼容 no-reference
$.browser.webkit || $.event.add(window, "load", function () { //webkit系列浏览器啥也不做
  //把所有带有rel=noreferrer的链接找出来变量处理
  $("a[href][rel~=noreferrer], area[href][rel~=noreferrer]").each(function () {
      var b, e, c, g, d, f, h;
      b = this;    //b表示当前链接dom对象
      c = b.href;  //保存原始链接
      $.browser.opera ? (b.href = "http://www.google.com/url?q=" + encodeURIComponent(c), b.title || (b.title = "Go to "     + c)) : (d = !1, g = function () { //Opera做了些啥暂不管
          b.href = "javascript:void(0)"
     }, f = function () {
         b.href = c
     }, $(b).bind("mouseout mouseover focus blur", f).mousedown(function (a) { //鼠标out over focus blue都把链接还原
         a.which === 2 && (d = !0) //鼠标down时，且鼠标中间按下时，把标志d设成true
     }).blur(function () { //blur把标志d设成false
         d = !1
     }).mouseup(function (a) {
         if (!(a.which === 2 && d)) return !0;
         g();
         d = !1;
         setTimeout(function () {
             alert("Middle clicking on this link is disabled to keep the browser from sending a referrer.");
             f()
         }, 500);
         return !1
     }), e = "<html><head><meta http-equiv='Refresh' content='0; URL=" + $("<p/>").text(c).html() + "' /></head><body><    /body></html>", $.browser.msie ? $(b).click(function () { //e是一个0秒自动刷新的页面，指向原始链接，但是没搞懂为什么搞个p标签在这里？？
         var a;                             //如果是IE的话
         switch (a = this.target || "_self") {
         case "_self": 
         case window.name:
             a = window;
             break;
         default:                           //如果原始链接的目标是本窗口，则在本窗口操作        
             a = window.open(null, a)       //如果原始链接的目标不是本窗口，则用js open一个空窗口
         }
         a = a.document;
         a.clear();                         //清除窗口的document
         a.write(e);                        //写入上面构造的0秒自动刷新的页面
         a.close();                         //关闭文档使其展示出来
         return !1                          //如果非IE(firefox), 是用的'Data URI scheme'承载0秒自动刷新的页面
     }) : (h = "data:text/html;charset=utf-8," + encodeURIComponent(e), $(b).click(function () { //最后js触发点击
         this.href = h; 
         return !0
     })))
 })
})
//#endregion
// #region 轮播图实现

  //轮播图
  //所有的图url
  const carouselUrls = ['https://i0.hdslb.com/bfs/new_dyn/6fccbf578dea4f6b8dfe00eed438d8e3161775300.png',
    'https://i0.hdslb.com/bfs/new_dyn/9105f14135e65089bcf26f613d3944e2161775300.jpg',
    'https://i0.hdslb.com/bfs/new_dyn/16bc9669405fdae8cf2ed1fba8ea4163161775300.jpg',
    'https://i0.hdslb.com/bfs/new_dyn/404dc1824857a02f75eded8b9cb46f9d161775300.png',
    'https://i0.hdslb.com/bfs/album/cec85059bf0d22d4cc00af565db8f1e56678e04a.png'
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
    url: 'https://i2.hdslb.com/bfs/archive/a35e28d321c55c783526b2382431409935ddfb9f.jpg@672w_378h_1c_!web-search-common-cover.avif',
    href: 'https://www.bilibili.com/video/BV1gM411W7ex?p=1&vd_source=e364c94095584741965b1e4ca136c27f'
  },
  {
    task: '计算机网络',
    url: 'https://i1.hdslb.com/bfs/archive/d8a410ef4468bff4ec7912928380bd35c6fb09af.png@672w_378h_1c_!web-search-common-cover.avif',
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
const record = [
  {
    url: 'https://bkimg.cdn.bcebos.com/pic/6d81800a19d8bc3eb135cc1f17d3b11ea8d3fc1fef97?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080'

  }
]

// #endregion 文字内容（博客、记录等）

// #endregion 文字内容（博客、记录等）


