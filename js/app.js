
$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0, center:true, widthFromWrapper:true, zIndex:24});
    $('#sticker').on('sticky-start', ()=>{
        $('#sticker').css({'background':'rgb(0,0,0)', "padding":"5px auto"});
        $('#sticker .logo h3 span:nth-child(2)').css('color','white','');
        $('#sticker .menu-bar i').css('color', "white")
    })
    $('#sticker').on('sticky-end', ()=>{
        $('#sticker .menu-bar i').css('color', "")
        $('#sticker').css('background','transparent');
        $('#sticker .logo h3 span:nth-child(2)').css('color','whitesmoke')
    })
     
    $('.menu-bar').click(()=>{
        document.querySelector('.menu').classList.toggle('hide');
     })
     $('.ri-close-line').click(()=> {
        document.querySelector('.menu').classList.toggle('hide');
     })
    
     window.document.addEventListener('click', (e)=>{
         if(e.target.parentElement.parentElement.className === "list-items"){
            document.querySelector('.menu').classList.toggle('hide');
         }
     })
  });
