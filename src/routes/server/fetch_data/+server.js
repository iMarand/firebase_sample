
import { json } from "@sveltejs/kit";
export const GET = async function() {
    try {
        const response = await fetch("https://questlab-add-retrieve-posts-official.this-enable.workers.dev/getconfigneeded");
        if(!response.ok) {
            throw json({
                status: 500,
                message: "Internal Error"
            });
        }

        const result = await response.text();
        
        return json({
            data: result,
            status: 200
        })
        
    } catch (err) {
        return json({
            code: 401,
            message: err
        })
    }
}