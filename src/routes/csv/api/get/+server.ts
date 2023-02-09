import { getComments } from "../db";
import type { RequestHandler, RequestEvent } from "./$types";

export const GET = (async (req: RequestEvent) => {
    let comments = getComments();
    let data = JSON.stringify(comments);
    return new Response(data);
}) satisfies RequestHandler
 