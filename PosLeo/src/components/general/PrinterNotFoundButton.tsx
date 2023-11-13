import { TbPrinterOff } from 'react-icons/tb';
import usePrinterStore from '../../store/printerStore';
import { CircularButtonAbsolute } from '../style/general/Button.styles';
import { connectToPrinter } from '../../utils/printerUtils';
const PrinterNotFoundButton = () => {
  const printerState = usePrinterStore((state) => state.printerState);
  return (
    <>
      {printerState ? (
        <></>
      ) : (
        <CircularButtonAbsolute
          onClick={async () => {
            await connectToPrinter();
          }}
        >
          <TbPrinterOff size={80}></TbPrinterOff>
        </CircularButtonAbsolute>
      )}
    </>
  );
};
export default PrinterNotFoundButton;
