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