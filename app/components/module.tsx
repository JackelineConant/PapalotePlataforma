import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import React from "react";



function Modulo() {
    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      {/* <Button
        color="primary"
        type="button"
        onClick={() => setModalOpen(!modalOpen)}
      >
        Launch demo modal
      </Button> */}

        <Button
            className="group col-start-2 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
            onPress={onOpen}
            >
            <Image
                src="/images/mujer.jpg"
                className='rounded-lg'
                width={1011}
                height={639}
                alt="Persona programadora viendo un programa dentro de una computadora"
            />
            <h2 className={`mb-3 text-2xl text-center font-semibold`}>
            Conoce más sobre la ciencia de Datos{' '}
                {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
                </span> */}
            </h2>
            <p className={`m-3 text-1xl text-center opacity-50`}>
            ¿Te interesa saber más sobre el estudio de datos?. Encuentra información importante dentro de Papalote Museo del Niño.
            </p>
          
        </Button>

        <Modal 
            size={"md"} 
            isOpen={isOpen} 
            onClose={onClose} 
        >
            <ModalContent>
            {(onClose) => (
                <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                    <p> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam pulvinar risus non risus hendrerit venenatis.
                    Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                    Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                    Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                    Action
                    </Button>
                </ModalFooter>
                </>
            )}
            </ModalContent>
        </Modal>

    </>
  );
}

export default Modulo;