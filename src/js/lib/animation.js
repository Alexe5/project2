let tl = new TimelineMax();

tl
  .from( $('.logo'), 2, {
  	// x: 250,
  	opacity: 0,
  	scale: 0,
  	ease: Bounce.easeOut, x: 250
  } )

  .from( $('.menu__item:nth-child(1), .menu__item:nth-child(2)'), 2, {
  	x: -250,
  	opacity: 0,
  	scale: 0
  },'-=2')

  .from( $('.menu__item:nth-child(3)'), 2, {
  	opacity: 0,
  	scale: 0
  },'-=2')

  .from( $('.menu__item:nth-child(4), .menu__item:nth-child(5)'), 2, {
  	x: 250,
  	opacity: 0,
  	scale: 0
  },'-=2')

  .from( $('.block-ico'), 2, {
  	x: -300,
  	opacity: 0,
  	scale: 0
  	// ease: Back.easeOut.config(3)
  },'-=2')

  .from( $('.aside'), 2, {
  	y: 100,
  	opacity: 0,
  	scale: 0
  	// ease: SlowMo.ease.config(0.7, 0.7, false), y: 500
  },'-=2');
tl.resume();
