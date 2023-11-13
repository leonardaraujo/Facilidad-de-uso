import AsyncSelect from 'react-select/async';
import { fGetSaleNote } from '../../fetch/fSaleNote';
import { useNavigate } from 'react-router-dom';
import CameraButton from '../general/CameraButton';
import { LayoutSearcherButton } from '../style/searchSale/searcher.styles';
import { useState } from 'react';
import MyQrScanner from './MyQrScanner';
const Searcher = () => {
  const [isScanning, setIsScanning] = useState(false);
  const navigate = useNavigate();

  const getSaleNote = (id: string) =>
    new Promise<{ label: string; value: string }[]>((resolve, reject) => {
      if (id.length == 15) {
        fGetSaleNote(id)
          .then((respond) => {
            console.log(respond.data);
            resolve([
              {
                label: `${respond.data.id}-${respond.data.client.name}`,
                value: respond.data.id,
              },
            ]);
          })
          .catch((err) => reject(err));
      } else {
        reject();
      }
    });

  return (
    <LayoutSearcherButton>
      <AsyncSelect
        styles={{
          control: (base) => ({
            ...base,
            height: 55,
            width:800,
            minHeight: 35,
            fontSize: 20,
          }),
        }}
        placeholder={'Buscar por código'}
        loadOptions={getSaleNote}
        onBlur={() => {}}
        onChange={(data) =>
          navigate(`/app/saleNote/${data?.value}`, { replace: true })
        }
      ></AsyncSelect>
      {isScanning ? <MyQrScanner onClick={setIsScanning}></MyQrScanner> : <></>}

      <CameraButton
        onClick={() => {
          setIsScanning(true);
        }}
      ></CameraButton>
    </LayoutSearcherButton>
  );
};
export default Searcher;
