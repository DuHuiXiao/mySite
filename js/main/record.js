// #region 文字内容（博客、记录等）
  //所有控件（喜欢、评论）的标签
const recordInfo = document.querySelectorAll('.record-info')
const recordIcon = document.querySelectorAll('.record-info-icon')
  //所有喜欢的总和 
const heartsLabel = document.querySelectorAll('.record-info > .heart-count')
  //所有评论的总和
const commentsLabel = document.querySelectorAll('record-icon .comment-count')
let icon
let counts
for(let i=0;i<recordInfo.length;i++){
  
  const children = recordInfo[i].childNodes
  
  
  //是heart
  if(i%2===0){
    recordInfo[i].addEventListener('click',()=>{
      if(recordIcon[i].style.backgroundImage === 'url("src/svg/heart-red.svg")'){
        recordIcon[i].style.backgroundImage = `url(src/svg/heart.svg)`
        heartsLabel[i/2].innerText = +heartsLabel[i/2].innerText-1
        return
      }
      heartsLabel[i/2].innerText = +heartsLabel[i/2].innerText+1
      recordIcon[i].style.backgroundImage = `url(src/svg/heart-red.svg)`
    })
  }
  //是comment
  else{
    
  }
}



// #endregion 文字内容（博客、记录等）