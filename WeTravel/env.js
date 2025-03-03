import {z} from "zod";

const portSchema = z.coerce.number().min(3000).max(3020).default(3006);
export const PORT = portSchema.parse(process.env.PORT);