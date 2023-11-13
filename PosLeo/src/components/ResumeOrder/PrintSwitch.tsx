import { Switch } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AiFillPrinter } from 'react-icons/ai';
const PrintSwitch = ({
  setChecked,
  checked,
}: {
  setChecked: any;
  checked: boolean;
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '10px',
        right: '15px',
      }}
    >
      <AiFillPrinter size={30} style={{ color: 'white' }}></AiFillPrinter>
      <FormControlLabel
        labelPlacement="start"
        label="Imprimir"
        control={
          <Switch
            color="secondary"
            checked={checked}
            onChange={() => {
              setChecked((state: boolean) => !state);
            }}
          />
        }
      ></FormControlLabel>
    </div>
  );
};
export default PrintSwitch;
