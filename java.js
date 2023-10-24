const obs=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})
const hide=document.querySelectorAll('.abt')
// const hide2=document.querySelectorAll('.srv')

hide.forEach((el)=>obs.observe(el))