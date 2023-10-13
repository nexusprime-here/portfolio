'use client'

import { createRef, useEffect, useState } from 'react';
import { MdHeadset, MdHeadsetOff } from 'react-icons/md';

function SongController() {
	const [enableMusic, setEnableMusic] = useState<boolean | null>(null);
	const audioRef = createRef<HTMLAudioElement>();

	useEffect(() => {
		const audio = audioRef.current!;

		if(enableMusic == null) {
			setTimeout(() => setEnableMusic(true), 2000)
		}

		if (enableMusic) {
			audio.volume = .010;
			audio.play().catch(() => setEnableMusic(true));
		} else {
			audio.pause();
		}
	}, [audioRef, enableMusic]);

	const Icon = () => {
		const args = {
			size: 38,
			onClick(e: any) {
				setEnableMusic(prev => !prev)
			},
			className: 'cursor-pointer'
		}

		return enableMusic ? <MdHeadset {...args} /> : <MdHeadsetOff {...args} />
	}

	return (
		<div
			data-hidden={enableMusic == null} 
			className='h-16 absolute bottom-10 left-10 flex data-[hidden=true]:hidden flex-row items-center backdrop-blur-sm bg-[rgba(0,0,0,.02)] rounded-md p-5'
		>
			<audio ref={audioRef} src="music.mp3" loop />
			<Icon />
			{enableMusic
				? (
					<div className='ml-4 select-none'>
						<h3 className='font-semibold'>Now playing</h3>
						<p className='text-sm'>Slushii - All I Need</p>
					</div>
				)
				: null
			}
		</div>
	)
}

export default SongController