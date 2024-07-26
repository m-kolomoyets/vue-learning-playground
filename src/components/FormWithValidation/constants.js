import { z } from 'zod';

export const formSchema = z.object({
    firstName: z.string().min(3, 'Name is too short'),
    email: z.string().email('Invalid email address'),
});
