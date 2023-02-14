setInterval(()=>{
    d = new Date();

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    console.log(h, m, s);
    hRotation = 30*h + m/2;
    mRotation = 6*m;
    sRoatation = 6*s;

    console.log(hRotation, mRotation, sRoatation);
    //rotate the hands of the clock, according to the current time
    hour.style.transform = `rotate(${hRotation}deg)`;
    minutes.style.transform = `rotate(${mRotation}deg)`;
    seconds.style.transform = `rotate(${sRoatation}deg)`;

    //Not working --> Why??
    // document.getElementById("hour").style.transform = `rotate${hRotation}deg`;
    // document.getElementById("minutes").style.transform = `rotate${mRotation}deg`;
    // document.getElementById("seconds").style.transform = `rotate${sRoatation}deg`;  

}, 1000);