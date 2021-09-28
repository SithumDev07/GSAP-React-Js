# Getting Started with GSAP

## * TIPs - 

    When gsap is animation dom elements there is a glitch when page is loading, so make App div visibility: hidden and set visibility again inside a useEffect.
### Simple way when element are repeating

    gsap.from(
      [circle, circleRed, circleBlue],
      {
        duration: .9,
        opacity: 0,
        x: 40,
        ease: Power3.easeOut,
        stagger: .2
      },
    )