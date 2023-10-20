'use client'

import { useEffect, useRef } from "react"
import { useFormStatus } from "react-dom"

export function ComposePostTextArea() {
  const { pending } = useFormStatus()
  const alreadySent = useRef(false)
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textAreaRef.current == null) return

    if (!pending && alreadySent.current) {
      alreadySent.current = false
      textAreaRef.current.value = ''

      return
    }

    alreadySent.current = pending

  }, [pending])

  return (
    <textarea
      name="post"
      rows={4}
      className='w-full text-2xl bg-black placeholder-gray-500 p-4'
      placeholder='What&apos;s going on?'></textarea>
  )
}