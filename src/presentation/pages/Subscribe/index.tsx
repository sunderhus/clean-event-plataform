import { Logo } from '@/presentation/components';
import React from 'react';

const Subscribe: React.FC = () => {
    return (
        <div className='px-28 py-20 min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center before:bg-reactjs before:bg-no-repeat before:absolute before:bg-top before:h-full before:w-full before:max-w-[654px] before:max-h-[575px] before:-z-10 before:top-0'>
            <div className='w-full max-w[1100px] flex gap-8 items-center justify-between mt-20 mx-auto'>
                <div className='max-w-[640px]'>
                    <Logo />
                    <h1 className='mt-8 text-[2.5rem] leading-tight'>
                        Construa uma <strong className='text-blue-500'>aplicação completa</strong>, do zero, com <strong className='text-blue-500'>React JS</strong>
                    </h1>
                    <p className='mt-4 text-gray-200 leading-relaxed'>
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className='p-8 bg-gray-600 border border-gray-500 rounded'>
                    <strong className='text-2xl mb-6 block'>
                        Inscreva-se gratuitamente
                    </strong>
                    <form action="" className='flex flex-col gap-2 w-full'>
                        <input type="text" name="text" id="text" className='bg-gray-700 rounded h-14 px-5 placeholder:text-gray-400' placeholder='Seu nome completo' />
                        <input type="email" name="email" id="email" className='bg-gray-700 rounded h-14 px-5 placeholder:text-gray-400' placeholder='Digite seu email' />
                        <button type="submit" className='mt-4 bg-green-500 uppercase p-4 rounded font-bold text-sm hover:bg-green-700 transition-colors'>
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/presentation/assets/mockup.png" alt="event plataform" className='mt-10' />
        </div>
    );
}

export default Subscribe;