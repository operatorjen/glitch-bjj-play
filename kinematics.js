(() => {
  const canvas = document.querySelector('#example')
  const ctx = canvas.getContext('2d')
  canvas.width = ctx.width = canvas.height = ctx.height = 250
  
  ctx.fillStyle = '#f00'
  ctx.strokeStyle = '#f00'
  
  let currentX = 0
  let currentY = 0
  
  const body = {
    neck: {
      dependent: 'shoulders',
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 335,
      rotationNSMaxDeg: 205,
      x:,
      y:
    },
    core: {
      dependent: ['hips', 'shoulders'],
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 345,
      rotationNSMaxDeg: 255
    },
    leg: {
      dependent: 'hips',
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 360,
      rotationNSMaxDeg: 180
    },
    arm: {
      dependent: 'shoulders',
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 360,
      rotationNSMaxDeg: 180
    }
  }
  
  function render() {
    ctx.arc(currentX + (ctx.width / 2), currentY + (ctx.height / 2), 10, 0, 2 * Math.PI)
    ctx.lineTo(Math.sin(currentX), Math.cos(currentY))
    ctx.stroke()
    
    window.requestAnimationFrame(render) 
  }

  render()
})()
