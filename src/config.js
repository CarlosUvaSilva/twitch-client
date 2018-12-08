const currentEnvironment = !process.env.NODE_ENV ? 'development' : process.env.NODE_ENV

const defaultEnvironments = {
  development: {
    TWITCH_URL: 'https://www.twitch.com',
  },

  production: {
    TWITCH_URL: 'https://www.twitch.com',
  },
}

// Example of global configuration variables
const globalConfig = {
  environment: currentEnvironment,
}

const environmentConfig = defaultEnvironments[currentEnvironment]

export default {...globalConfig, ...environmentConfig}
