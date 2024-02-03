import React, {useEffect, useState} from 'react';
import Axios from '../../api/Axios';
import { Character, Info } from '../../Utils/Interfaces';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import logo from '../../assets/Rick_and_Morty_logo.png';
import Modal from '../../components/Modal/Modal';
import CardHorizontal from '../../components/CardHorizontal/CardHorizontal';

const Home = () => {
  const [allCharacters, setAllCharacters] = useState<Character[]>([]);
  const [data, setData] = useState<Info>();
  const [characterSelected, setCharacterSelected] = useState<Character>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAllCharacters = async () => {
      setLoading(true);
      Axios.get('/character')
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Hubo un inconveniente, por favor intenta más tarde.");
        } else {
          setAllCharacters(response.data.results);
          setData(response.data.info);
        }
        
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    }

    getAllCharacters();
  },[]);

  const [openModal, setOpenModal] = useState<boolean>(false);
  

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-5">
        <img src={logo} width={450} />
        <div className="mt-10 w-full max-w-2xl">
          <div className="flex mx-10">
            <Input placeholder="Buscar un personaje" styleProp="mr-10" />
            <Button type="green" label="Buscar" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-5">
          {loading && (<p>Cargando</p>) }
          {allCharacters?.length > 0
            ? allCharacters.map((character: Character, index: number) => {
                return (
                  <Card
                    data={character}
                    key={index}
                    handleClick={() => {
                      setCharacterSelected(character);
                      setOpenModal(!openModal);
                    }}
                  />
                )
              })
            : (<p>Errorrr</p>)
          }
        </div>
      </div>
      <Modal showModal={openModal} setShowModal={() => setOpenModal(!openModal)}>
        {loading && (<p>Cargando</p>)}
        {characterSelected && (<CardHorizontal data={characterSelected} />)}
      </Modal>
    </>
  );
};

export default Home;
