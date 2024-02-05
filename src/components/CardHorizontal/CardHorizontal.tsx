import { Character } from '../../utils/Interfaces';
import { FaDna, FaSkullCrossbones, FaTransgender } from 'react-icons/fa6';

type Props = {
  data: Character;
}

const CardHorizontal = ({data}: Props) => {

  return (
    <div
      className="mb-5 flex flex-col items-center md:max-w-xl md:flex-row">
      <img
        className="w-40 h-40 rounded-full"
        src={data.image}
        alt={data.name} />
      <div className="flex flex-col justify-start p-6 ml-3 text-white">
        <h5
          className="mb-2 text-xl font-bold text-green ">
          {data.name}
        </h5>
        <div className="mt-2">
          <span className="mb-1 flex items-center text-base">
            <FaSkullCrossbones className="mr-1" /> {'Status: ' + data.status}
          </span>
          <span className="mb-1 flex items-center text-base">
            <FaTransgender className="mr-1" /> {'Gender: ' + data.gender}
          </span>
          <span className="mb-1 flex items-center text-base">
            <FaDna className="mr-1" /> {'Specie: ' + data.species}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontal;
