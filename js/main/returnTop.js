// #region 置顶实现
const returnTop = document.querySelector('.return-top')
returnTop.addEventListener('click', ()=>{
  const id =  setInterval(() => {
    document.documentElement.scrollTop -= 50
    if(document.documentElement.scrollTop<=0)clearInterval(id)
  }, 2);
})
// #endregion 置顶实现