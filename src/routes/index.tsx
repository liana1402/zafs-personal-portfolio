import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return ( 
    <div className="flex flex-col lg:flex-row lg:items-center justify-center min-h-body-height w-full gap-15 lg:gap-8 pt-20 p-10 lg:p-25">
      <div className="lg:max-w-1/2">
        <h1 className='text-7xl lg:text-9xl font-bold font-mono text-dark-green'>Hello!</h1>
        <h3 className='text-4xl font-bold font-mono text-dark-green'>I'm <span className='text-custom-white'>Zafran</span></h3>
        <p className='lg:max-w-3/5 text-custom-black'>Welcome to my portfolio! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, necessitatibus fugit nobis at perferendis voluptatum eos dignissimos sint. perferendis voluptatum eos dignissimos sint.</p>
      </div>
      <div className='w-full aspect-2/1 items-center bg-custom-white rounded-lg'></div>
    </div>
  )
}
