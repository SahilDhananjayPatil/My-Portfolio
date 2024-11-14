function openTab(eve,tabName){
    let i,demo1, demo2;

    
    demo1 = document.querySelectorAll(".mycontent")
    for(i=0;i<demo1.length;i++){
        demo1[i].style.display = "none"
    }

    
    demo2 = document.querySelectorAll(".tab-btn");
    for(i=0;i<demo2.length;i++){
        demo2[i].className = demo2[i].className.replace(" active", "");
    }

    
    document.getElementById(tabName).style.display = "block"; 
}


document.querySelector(".tab-btn").click();


function openPortfolio(eve,demoTab){

    let demo1 = document.querySelectorAll('.demotab');
    for(let i=0;i<demo1.length;i++){
        demo1[i].style.display = 'none';
    }

    let demo2 = document.querySelectorAll('.portbtn')
    for(let i=0;i<demo2.length;i++){
        demo2[i].className = demo2[i].className.replace(" active",""); 
    }

    document.getElementById(demoTab).style.display = 'block';
}
document.querySelector('.portbtn').click();