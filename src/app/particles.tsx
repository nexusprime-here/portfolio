'use client';

import { loadFull } from 'tsparticles';
import { useCallback } from "react";
import { Particles } from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';

function ParticlesContainer() {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async () => { }, []);

	return <Particles
		className='w-full h-full absolute -z-10'
		id="tsparticles"
		init={particlesInit}
		loaded={particlesLoaded}
		options={{
			fullScreen: { enable: false },
			background: {
				color: {
					value: ''
				}
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onHover: {
						enable: true,
						mode: 'repulse'
					},
					resize: true
				},
				modes: {
					push: {
						quantity: 400
					},
					repulse: {
						distance: 50,
						duration: .4
					}
				}
			},
			particles: {
				color: {
					value: '#6d7585'
				},
				links: {
					color: '#6f7b8f',
					distance: 150,
					enable: true,
					opacity: .5,
					width: 1
				},
				collisions: {
					enable: true
				},
				move: {
					direction: 'none',
					enable: true,
					outModes: {
						default: 'bounce'
					},
					random: false,
					speed: .3,
					straight: false
				},
				number: {
					density: {
						enable: true,
						area: 800
					},
					value: 200
				},
				opacity: {
					value: .5
				},
				shape: {
					type: 'circle'
				},
				size: {
					value: {
						min: 1,
						max: 5
					}
				}
			},
			detectRetina: true
		}}
	/>
}

export default ParticlesContainer;