import { cn } from "@/lib/utils";
import * as React from "react";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> { }

const Section = React.forwardRef<
	HTMLDivElement,
	DivProps
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn(
			"flex-1 w-screen min-h-screen overflow-y-auto gap-5",
			"p-6 md:p-10 lg:py-14 lg:px-24",
			className
		)}
		{...props}
	/>
));
Section.displayName = 'Section';

export { Section }