import {z} from "zod";
const portSchema = z.coerce.number().min(3000).max(3010).default(3002);
export const PORT = portSchema.parse(process.env.PORT);
