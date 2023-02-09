import { addComment } from "../db";
import type { RequestHandler, RequestEvent } from "./$types";

export const POST = (async ({ request }: RequestEvent) => {
    let { user, text } = await request.json();
    console.log(`${user}: ${text}`)
    addComment({user, text});
    return new Response();
}) satisfies RequestHandler
 