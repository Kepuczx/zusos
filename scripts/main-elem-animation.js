const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.add('entry')
        }else{
            entry.target.classList.remove('entry')
        }
    })
},{})

const mainElem = document.querySelectorAll('.main-container');
mainElem.forEach(el =>observer.observe(el));