'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { login } from '@/actions/auth'

const formSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(1).max(20)
})

const LoginPage = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>)=> {
    try {
      console.log('Check: ', values)
      const res = await login(values)
    } catch(e) {
      console.log('Check: ', e)
    } 
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-login-page bg-no-repeat bg-cover'>
      <div className='w-[460px] border rounded-2xl p-8 bg-white'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your password' {...field} type='password'/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full '>Login</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
