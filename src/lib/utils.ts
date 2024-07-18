import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function hasAuthorization(req: Request) {
	return req.headers.get('Authorization') == process.env['ADMIN_TOKEN'];
} 
