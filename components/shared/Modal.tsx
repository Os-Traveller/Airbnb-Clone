import React from 'react';
import { createPortal } from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';

interface ModalProps {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { children, openModal, setOpenModal, title } = props;

  const closeModal = () => {
    setOpenModal(false);
  };

  if (!openModal) return null;

  return createPortal(
    <section
      className='h-screen w-screen center-xy modal-bg absolute p-5'
      onClick={closeModal}
    >
      <div
        className='bg-white md:w-[400px] w-full rounded-xl'
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        <header className='px-5 py-4 flex items-center border-b border-neutral-300'>
          <VscChromeClose
            className='font-bold cursor-pointer'
            size={20}
            onClick={closeModal}
          />
          <h2 className='w-fit mx-auto font-bold text-xl'>{title}</h2>
        </header>
        <div className='px-5 py-4 max-h-[600px] overflow-y-auto'>
          {children}
        </div>
      </div>
    </section>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;
