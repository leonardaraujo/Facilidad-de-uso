import { IconTextButtonRelative } from '../../styles/general/button.styles';
import { BiCartAdd } from 'react-icons/bi';
import { TextSmall } from '../../styles/general/text.styles';
import { useState } from 'react';
import ProductPopAdd from './ProductPopAdd';
const AddProductButton = () => {
  const [isAdd, setIsAdd] = useState(false);
  return (
    <>
      <IconTextButtonRelative onClick={() => setIsAdd(true)}>
        <BiCartAdd size={30}></BiCartAdd>
        <TextSmall>Añadir producto</TextSmall>
      </IconTextButtonRelative>{' '}
      {isAdd ? <ProductPopAdd closePop={setIsAdd}></ProductPopAdd> : <></>}
    </>
  );
};
export default AddProductButton;
