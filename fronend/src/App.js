import "./index.css"
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Text } from '@consta/uikit/Text';
import LotForm from "./components/LotForm";
import LotTable from "./components/LotTable";

const App = () => (
    <Theme preset={presetGpnDefault}>
        <Text size="3xl" weight="bold">Лоты</Text>
        <br/>
        <LotTable/>
        <LotForm/>
    </Theme>
);

export default App;
