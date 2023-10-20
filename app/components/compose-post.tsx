import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { Avatar } from "@nextui-org/react";

import { ComposePostTextArea } from './compose-post-textarea';

export function ComposePost({
  userAvatarUrl
}:
  {
    userAvatarUrl: string
  }) {
  const addPost = async (formData: FormData) => {
    'use server'

    const postContent = formData.get('post')

    if (postContent == null) return

    const supabase = createServerActionClient({ cookies })

    const { data: { user } } = await supabase.auth.getUser()
    if (user == null) return

    await supabase.from('posts').insert({ postContent, user_id: user.id })

    revalidatePath('/')

  }

  return (
    <form action={addPost} className='flex flex-1 flex-row space-x-4 gap-y-4 p-4 border-b border-white/20'>
      <Avatar radius="full" size="md" src={userAvatarUrl} className='mt-3' />
      <div className='flex flex-1 flex-col gap-y-4'>
        <ComposePostTextArea />
        <button type='submit' className='bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end'>Post</button>
      </div>
    </form>
  )
}