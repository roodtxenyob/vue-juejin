import { homeRoutes,pinsRoutes } from '../common/config'
import { TOKEN_KEY, UID_KEY } from '../common/const'
const state = {
  routeTransition: true,
  defaultAvatar: 'https://b-gold-cdn.xitu.io/v3/static/img/default-avatar.e30559a.svg',
  homeRoutes: homeRoutes,
  pinsRoutes,
  token: localStorage.getItem(TOKEN_KEY) || '',
  uid: localStorage.getItem(UID_KEY) || '',
  isLogin: !!localStorage.getItem(TOKEN_KEY),
  keepAliveArr: ['layout']
}

export default state