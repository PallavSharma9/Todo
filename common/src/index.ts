import { z } from 'zod'

export const signUpInputProps = z.object({
    username: z.string().min(1).max(20).email(),
    password: z.string().min(1).max(8)
  })
  
export type signInParams = z.infer<typeof signUpInputProps>