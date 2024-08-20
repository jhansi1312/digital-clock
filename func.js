setInterval(() => {
    const date=new Date(Date.now())
    const hours = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    const sec = date.getSeconds().toString().padStart(2, '0');
    // console.log(hours+":"+min+":"+sec)
    document.getElementById('currTime').innerText=(hours+":"+min+":"+sec);
},1000)

// console.log()