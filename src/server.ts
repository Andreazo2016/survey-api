import app from './app'
import { AppLoggerFactory } from '@/application/factories'

const appLogger = AppLoggerFactory.getInstance();

const PORT = 3000
app.listen(PORT, () => {
  appLogger.info({
    type: 'START_SERVER',
    message: `Server starting at pot ${PORT}`
  })
})
