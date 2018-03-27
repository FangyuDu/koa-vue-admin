import controller from '../controller'
import koaRouter from 'koa-router'
const router = koaRouter()
// page
router.all('/', controller.page.home)

// api
router.post('/api/gitclone', controller.api.cloneRepo)

export default router