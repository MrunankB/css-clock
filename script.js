    let secHand = document.querySelector('.second-hand')
    let minHand = document.querySelector('.min-hand')
    let hourHand = document.querySelector('.hour-hand')
    function tick() {
      // console.log('tick')
      let now = new Date()
      let sec = now.getSeconds()
      let mins = now.getMinutes()
      let hour = now.getHours()
      console.log(sec)
      let secDeg = 90 + (360 / 60) * sec
      let minDeg = 90 + 6 * mins + 0.1 * sec
      let hourDeg = 90 + 30 * hour + 0.5 * mins
      
      if (secDeg === 90)
        secHand.style.transition = 'all 0s';
      else
        secHand.style.transition = 'all 0.05s';

      if (minDeg === 90)
        minHand.style.transition = 'all 0s';
      else
        minHand.style.transition = 'all 0.1s';

      secHand.style.transform = `rotate(${secDeg}deg)`
      minHand.style.transform = `rotate(${minDeg}deg)`
      hourHand.style.transform = `rotate(${hourDeg}deg) scaleX(0.7)`;
    }
    function test() {
      console.log('test')
      hourHand.style.transform = "rotate(450deg)"
    }
    setInterval(tick, 1000)
