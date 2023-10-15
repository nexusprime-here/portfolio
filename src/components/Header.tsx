function Header() {
	return (
		<div className="absolute z-20 top-0 w-full h-16">
			<nav className="h-full flex flex-row items-center justify-center">
				<ul className="flex flex-row space-x-14 text-sm rounded-md p-2 px-10 backdrop-blur-sm bg-[rgba(0,0,0,.02)] [&>*]:cursor-pointer hover:[&>*]:underline">
					<li><a href="#home">Home</a></li>
					<li><a href="#aboutme">About Me</a></li>
					<li><a href="#projects">Projects</a></li>
				</ul>
			</nav>
		</div>
	)
}

export default Header;