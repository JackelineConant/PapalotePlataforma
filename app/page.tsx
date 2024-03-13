'use client'
import Image from 'next/image'
import Modulo from './components/module'


export default function Home() {


  return (
    <main className="flex  min-h-screen flex-col items-fill justify-between p-24">
      
      <div className=" pt-20 pl-4 pb-8 grid lg:grid-cols-7 bg-[#5C098F]">
        
        <div className="col-span-5">
          <Image
            src="/images/papalote.jpeg"
            className='rounded-lg'
            width={550}
            height={550}
    
            alt="Picture of the author"
          />
        </div>

        <div   className='pt-20 col-start-7'>
          <Image
            src="/images/socials.PNG"
            className='rounded-lg'
            width={100}
            height={100}
    
            alt="Picture of the author"
          />
        </div>
        
      </div>  

      <div className='fill bg-[#f9fafb]'>

        <div className='pl-6 pt-8'>
          <h2 className={`mb-8 text-4xl font-semibold text-left'`}>
            ¡Bienvenidos al módulo de ciencia de datos de Papalote Museo del Niño!
          </h2>
          <div className='grid text-center  lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left'>
          <h2 className={`mb-24 text-2xl`}> 
            Vamos a aprender la importancia de los datos y su utilización en la actualidad.
          </h2></div>
          
        </div>
        
        {/* <div className="mb-32 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">

          <Modulo />
        </div> */}

        <div className="mb-32 pr-8 pl-8 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <a
              href="https://www.maximaformacion.es/blog-dat/que-es-la-ciencia-de-datos/"
              className="group col-start-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Image
                  src="/images/mujer.jpg"
                  className='rounded-lg'
                  width={1011}
                  height={639}
                  alt="Persona programadora viendo un programa dentro de una computadora"
              />
              <h2 className={`mb-3 text-3xl text-center font-semibold`}>
              Conoce más sobre la ciencia de Datos{' '}
                  {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                  </span> */}
              </h2>
              <p className={`m-3 text-1xl text-center opacity-80`}>
              ¿Te interesa saber más sobre el estudio de datos?. Encuentra información importante dentro de Papalote Museo del Niño.
              </p>
            
          </a>
        </div>

        <div className="mb-32 pl-8 pr-8 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
          <a
            href="https://forms.gle/LhrYMwXM313ESNNv5"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/PapaloteID.png"
              className='rounded-lg'
              width={1011}
              height={639}
              alt="Picture of the author"
            />
            <h2 className={`mb-3 text-3xl text-center font-semibold`}>
            Crea tu propia Credencial Papalote ID {' '}
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className={`m-3 text-1xl text-center opacity-80`}>
            Rellena un formulario para convertirte en miembro del módulo de Ciencias de datos Papalote.
            </p>
          </a>

        </div>

        <div className="mb-32 pr-8 pl-8 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">

          <a
            href="https://www.figma.com/proto/VXeLnQS9kKqNNQNN2XmD00/Juego-Mapa-Papalote?type=design&node-id=3-55&t=MqkD6OFnVNjDgkoD-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A55&mode=design"
            className="group col-start-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/mapaDos.png"
              className='rounded-lg'
              width={1011}
              height={639}
              //layout="fill"
              alt="Picture of the author"
            />
            <h2 className={`mb-3 text-3xl text-center font-semibold`}>
            Accede a los juegos  Papalote Ciencia de Datos{' '}
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className={`m-3 text-1xl text-center opacity-80`}>
            Disfruta de los minijuegos educativos del módulo de ciencia de datos, donde aprenderás más sobre la importancia de la obtención de datos.
            </p>
            
          </a>
        </div>

        <div className="mb-32 pb-8 pl-8 pr-8 grid text-center  lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">

          <a
            href="https://lookerstudio.google.com/u/0/reporting/5a6e1574-97d4-42c3-a9b0-fc627f9fa18b/page/s9TsD"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/mapa.jpeg"
              className='rounded-lg'
              width={1011}
              height={639}
              alt="Picture of the author"
            />
            <h2 className={`mb-3 text-3xl text-center font-semibold`}>
            Informe de visitantes Papalote Museo del Niño {' '}
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h2>
            <p className={`m-3 text-1xl text-center opacity-80`}>
            Dale un vistazo a los datos de todos los visitante que han ingresado al museo y han generado su credencial Papalote ID.
            </p>
          </a>
        </div>

        <div className="pt-4 pl-52 pr-52 pb-4  bg-[#5C098F]">
          
          <div className="">
            <Image
              src="/images/abajo.PNG"
              className='rounded-lg'
              width={1000}
              height={1000}
      
              alt="Picture of the author"
            />
          </div>
          
        </div>  

      </div>

      

      

    </main>
  )
}