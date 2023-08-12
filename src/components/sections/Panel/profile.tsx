'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import React from "react";

interface ProfileProps extends React.ButtonHTMLAttributes<HTMLDivElement> {

}

function Profile(props: ProfileProps) {
	const [isOpen, setOpen] = React.useState(false);

	const handleClick = () => {
		setOpen(opened => !opened);
	}

	const cardChildren = <>
		<CardHeader className="flex items-center">
			<Avatar className="h-20 w-20 mb-1 sm:h-24 sm:w-24 sm:mb-3">
				<AvatarImage src="" />
				<AvatarFallback>NP</AvatarFallback>
			</Avatar>
			<h2 className="text-lg sm:text-2xl">Nexus Prime</h2>
		</CardHeader>
		<CardContent>
			<CardDescription>Idade</CardDescription>
			{new Date().getFullYear() - 2005} Anos
			<Separator />
			<CardDescription>Sobre Mim</CardDescription>
			Eita
		</CardContent>
	</>

	return (
		<>
			<Card {...props} onClick={handleClick}>
				{cardChildren}
			</Card>
			<Dialog open={isOpen} onOpenChange={handleClick}>
				<DialogContent>
					{cardChildren}
				</DialogContent>
			</Dialog>
		</>
	)
}

export default Profile;