import {
  LayoutQrScanner,
  LayoutQrScannerTitleFrame,
} from '../style/searchSale/qrScanner.styles';
import { QrScanner } from '@yudiel/react-qr-scanner';
import {  Title } from '../style/general/Text.styles';
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../style/general/Button.styles';
const MyQrScanner = ({ onClick }: { onClick: any }) => {
  const navigate = useNavigate();
  return (
    <LayoutQrScanner>
      <LayoutQrScannerTitleFrame>
        <div>
          <StyledButton onClick={() => onClick(false)}>Volver</StyledButton>
          <Title>Escaneando QR</Title>
        </div>
        <div style={{ width: '300px', height: '300px' }}>
          <QrScanner
            onDecode={(id) => {
              onClick(false);
              navigate(`/app/saleNote/${id.substring(0, 15)}`, {
                replace: true,
              });
            }}
            onError={(error) => console.log(error?.message)}
          />
        </div>
      </LayoutQrScannerTitleFrame>
    </LayoutQrScanner>
  );
};
export default MyQrScanner;
