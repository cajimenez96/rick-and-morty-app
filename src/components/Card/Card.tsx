import { Character } from '../../Utils/Interfaces';
import { BsFillHeartFill, BsFillHeartbreakFill } from 'react-icons/bs';

type CardProps = {
  data: Character;
  handleClick: () => void;
}

const Card = ({data, handleClick}: CardProps) => {
  return (
    <div className="w-42 lg:w-64 m-5 rounded-md shadow-lg bg-cian cursor-pointer hover:shadow-green" onClick={handleClick}>
      <img className="w-full" src={data.image} alt={data.name} />
      <div className="px-3 py-4">
        <span className="font-bold text-lg mb-2 text-nowrap">{data.name}</span>
        <div className="flex justify-between mt-5 mb-2">
          <span className="font-light text-base uppercase text-white">{data.species}</span>
          <div className="flex">
            {data.status === 'Alive'
              ? (<BsFillHeartFill color="white" title={data.status} />)
              : (<BsFillHeartbreakFill color="white" title={data.status} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
