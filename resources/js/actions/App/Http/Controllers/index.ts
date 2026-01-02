import MailController from './MailController'
import PostIndexController from './PostIndexController'
import PostCreateController from './PostCreateController'
import Settings from './Settings'
import Auth from './Auth'
const Controllers = {
    MailController: Object.assign(MailController, MailController),
PostIndexController: Object.assign(PostIndexController, PostIndexController),
PostCreateController: Object.assign(PostCreateController, PostCreateController),
Settings: Object.assign(Settings, Settings),
Auth: Object.assign(Auth, Auth),
}

export default Controllers