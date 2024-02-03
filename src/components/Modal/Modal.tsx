import { AiOutlineClose } from 'react-icons/ai';
import Button from '../Button/Button';

type Props = {
  children: React.ReactNode;
  showModal: boolean;
  setShowModal: () => void;
}

const Modal = (props: Props) => {
  return (
    <>
      { props.showModal &&
        (<div className="fixed inset-0 bg-blue bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-blue border border-white p-5 flex flex-col rounded justify-center items-center gap-5">
            <div className="w-full flex justify-end">
              <AiOutlineClose color='white' onClick={props.setShowModal} className="cursor-pointer" />
            </div>
            <div className="flex flex-col justify-center items-center" style={{width: 600}}>
              {props.children}
              <Button label="Cerrar" type='green' handleClick={props.setShowModal} />        
            </div>
          </div>
        </div>)
      }
    </>
  );
};

export default Modal;
