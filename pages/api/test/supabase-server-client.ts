// Creating a new supabase server client object (e.g. in API route):
import { User, createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const supabaseServerClient = createPagesServerClient({
        req,
        res,
    })
    const {
        data: { user },
    } = await supabaseServerClient.auth.getUser()

    res.status(200).json({ email: (user as User)?.email ?? '' })
}
