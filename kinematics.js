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
      rotationEWMaxDeg: 45,
      rotationNSMinDeg: 0,
      rotationNSMaxDeg: 25,
      length: 2
    },
    shoulders: {
      dependent: ['knee', 'ankle'],
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 0,
      rotationNSMaxDeg: 180,
      length: 1
    },
    core: {
      dependent: ['hips', 'shoulders'],
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 10,
      rotationNSMaxDeg: 170,
      length: 10
    },
    thigh: {
      dependent: ['hips', 'knee'],
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 0,
      rotationNSMaxDeg: 180,
      length: 5
    },
    shin: {
      dependent: ['knee', 'ankle'],
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 0,
      rotationNSMaxDeg: 180,
      length: 5
    },
    ankle: {
      dependent: ['shin'],
      rotationEWMinDeg: 0,
      rotationEWMaxDeg: 180,
      rotationNSMinDeg: 0,
      rotationNSMaxDeg: 180,
      length: 0.5
    },
    upper_arm: {
      dependent: ['shoulders', 'elbow'],
      rotationEMinDeg: 0,
      rotationWMaxDeg: 180,
      rotationNMinDeg: 0,
      rotationSMaxDeg: 170,
      length: 4
    },
    lower_arm: {
      dependent: ['elbow', 'wrist'],
      rotationEMinDeg: 0,
      rotationWMaxDeg: 180,
      rotationNMinDeg: 10,
      rotationSMaxDeg: 170,
      length: 4
    },
    elbow: {
      dependent: ['lower_arm', 'upper_arm'],
      rotationEMinDeg: 0,
      rotationWMaxDeg: 180,
      rotationNMinDeg: 10,
      rotationSMaxDeg: 170,
      length: 0.3
    },
    wrist: {
      dependent: ['lower_arm'],
      rotationEMinDeg: 0,
      rotationWMaxDeg: 180,
      rotationNMinDeg: 10,
      rotationSMaxDeg: 170,
      length: 0.3
    },
    hips: {
      dependent: ['knee', 'ankle'],
      rotationEMinDeg: 0,
      rotationWMaxDeg: 180,
      rotationNMinDeg: 0,
      rotationSMaxDeg: 20,
      length: 6
    },
    knee: {
      dependent: ['core', 'hips'],
      rotationEMinDeg: 0,
      rotationWMaxDeg: 180,
      rotationNMinDeg: 0,
      rotationSMaxDeg: 20,
      length: 0.5
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
