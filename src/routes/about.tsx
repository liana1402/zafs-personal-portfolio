import Skill from '#/components/skill'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return ( 
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center min-h-body-height w-full gap-8 lg:px-25 pt-40">
      <div className="p-5 lg:max-w-1/2">
        <h2 className='text-2xl font-bold font-mono text-dark-green pl-5'>Intro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum facere aliquam repudiandae tempore in deleniti ipsam voluptatibus.</h2>
        <div className='pt-5'>
          <h3 className='text-2xl font-bold font-mono text-custom-white'>Skills</h3>
          <ul className= 'pl-5 list-inside list-disc text-custom-white'>
            {Skill('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum facere aliquam repudiandae tempore in deleniti ipsam voluptatibus.')}
            {Skill('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum facere aliquam repudiandae tempore in deleniti ipsam voluptatibus.')}
            {Skill('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum facere aliquam repudiandae tempore in deleniti ipsam voluptatibus.')}
          </ul>
        </div>
        <div className='pt-5'>
          <h3 className='text-2xl font-bold font-mono text-custom-white'>Education</h3>
          <p className='pl-5 text-custom-black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur dicta voluptate libero, explicabo quas fugit facilis repudiandae itaque maiores excepturi velit sunt assumenda perspiciatis facere nobis, vitae natus? Ducimus, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi mollitia, ex dolore aut eius vitae asperiores quos tempora voluptatibus repellendus neque rerum labore? Quia aperiam pariatur nulla provident incidunt?lis repudiandae itaque maiores excepturi velit sunt assumenda perspiciatis facere nobis, vitae natus? Ducimus, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi mollitia, ex dolore aut eius vitae asperiores quos tempora voluptatibus repellendus neque rerum labore? Quia aperiam pariatur nulla provident incidunt?lis repudiandae itaque maiores excepturi velit sunt assumenda perspiciatis facere nobis, vitae natus? Ducimus, neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quasi mollitia, ex dolore aut eius vitae asperiores quos tempora voluptatibus repellendus neque rerum labore? Quia aperiam pariatur nulla provident incidunt?</p>
        </div>
      </div>
      <div className='w-80 h-100 items-center bg-custom-white rounded-lg'></div>
    </div>
  )
}
