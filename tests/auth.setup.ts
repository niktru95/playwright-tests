import {test as setup} from "../fixtures/fixtures";
import * as path from 'path';
import {Selectors} from "../selectors/selectors";


const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('Аутентификация', async ({ loginPageFixture }) => {

    await loginPageFixture.auth(process.env.LOGIN, process.env.PASSWORD);
    await loginPageFixture.click_login_button();

    await loginPageFixture.checkURL('/inventory.html');
    await loginPageFixture.isVisible(Selectors.Title);

    await loginPageFixture.context().storageState({ path: authFile });
});