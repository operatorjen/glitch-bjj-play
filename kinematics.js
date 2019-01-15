(() => {
  const canvas = document.querySelector('#example')
  const ctx = canvas.getContext('2d')
  canvas.width = ctx.width = canvas.height = ctx.height = 250
  
  ctx.fillStyle = '#f00'
  ctx.strokeStyle = '#f00'
  
  let currentX = 0
  let currentY = 0
  
  function render() {
    ctx.beginPath()
    ctx.arc(currentX + (ctx.width / 2), currentY + (ctx.height / 2), 10, 0, 2 * Math.PI)
    ctx.lineTo(currentX - 20, currentY)
    ctx.stroke()
    
    window.requestAnimationFrame(render) 
  }

  render()
})()
