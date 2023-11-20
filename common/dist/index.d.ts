import { z } from 'zod';
export declare const signUpInputProps: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export type signInParams = z.infer<typeof signUpInputProps>;
