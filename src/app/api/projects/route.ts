import { prisma } from "@/lib/database";
import { hasAuthorization } from "@/lib/utils";
import { NextResponse } from "next/server";
import { z } from "zod";

const model = z.object({
	name: z.string(),
	description: z.string(),
	techs: z.array(z.string()),
	repository: z.string().url(),
	view: z.string().url().optional()
});

// TODO: add authorization condition and test it

export async function GET(req: Request) {
	const searchParams = new URL(req.url).searchParams;

	try {
		const result = await prisma.project.findUnique({
			where: { id: parseInt(searchParams.get('id')!) }
		});

		return NextResponse.json(result, { status: 200 });
	} catch(e: any) {
		return NextResponse.json(JSON.stringify(e), {
			status: 500,
			statusText: e.message
		});
	}
}

export async function POST(req: Request) {
	if(!hasAuthorization(req)) return;
	
	const project = model.parse(req.json());
	
	try {
		const result = await prisma.project.create({
			data: {
				name: project.name,
				description: project.description,
				techs: JSON.stringify(project.techs),
				repository: project.repository,
				view: project.view,
			}
		});

		return NextResponse.json(result, { status: 200 });
	} catch(e: any) {
		return NextResponse.json(JSON.stringify(e), {
			status: 500,
			statusText: e.message
		});
	}
}

export async function PATCH(req: Request) {
	if(!hasAuthorization(req)) return;

	const project = model.parse(req.json());
	const searchParams = new URL(req.url).searchParams;

	try {
		const result = await prisma.project.update({
			data: {
				name: project.name,
				description: project.description,
				techs: JSON.stringify(project.techs),
				repository: project.repository,
				view: project.view,
			},
			where: { id: parseInt(searchParams.get('id')!) }
		});

		return NextResponse.json(result, { status: 200 });
	} catch(e: any) {
		return NextResponse.json(JSON.stringify(e), {
			status: 500,
			statusText: e.message
		});
	}
}

export async function DELETE(req: Request) {
	if(!hasAuthorization(req)) return;

	const searchParams = new URL(req.url).searchParams;

	try {
		const result = await prisma.project.delete({
			where: { id: parseInt(searchParams.get('id')!) }
		});

		return NextResponse.json(result, { status: 200 });
	} catch(e: any) {
		return NextResponse.json(JSON.stringify(e), {
			status: 500,
			statusText: e.message
		});
	}
}