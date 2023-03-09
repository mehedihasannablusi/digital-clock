// const clock = () =>{
//    const DateTime = new Date();
//    let hours = DateTime.getHours()
//    let minutes = DateTime.getMinutes()
//    let second = DateTime.getSeconds()

//    if(hours <10 ){
//     hours = "0" + hours
//    };

//    if(second <10 ){
//     second = "0" + second
//    };
//    if(minutes <10 ){
//     minutes = "0" + minutes
//    }

//    document.getElementById("hours").innerHTML = hours
//    document.getElementById("minutes").innerHTML = minutes
//    document.getElementById("second").innerHTML = second

// }


// setInterval(clock,10)


const clock = () => {
   const DateTime = new Date()
   let hrs = DateTime.getHours();
   let min = DateTime.getMinutes();
   let sec = DateTime.getSeconds();

   if(hrs > 12){

      hrs = hrs - 12
      if(hrs <10 ){
         hrs = "0"+hrs
      };
   };

   if(min <10 ){
     min = "0"+min
   };
   if(sec <10 ){
     sec = "0"+ sec
   };




   document.getElementById("hours").innerHTML = hrs
   document.getElementById("minutes").innerHTML = min
   document.getElementById("second").innerHTML = sec
}

setInterval(clock)