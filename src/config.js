const currentEnvironment = !process.env.NODE_ENV ? 'development' : process.env.NODE_ENV

const defaultEnvironments = {
  development: {
    TWITCH_URL: 'https://api.twitch.tv/kraken/',
  },

  production: {
    TWITCH_URL: 'https://api.twitch.tv/kraken/',
  },
}

// Example of global configuration variables
const globalConfig = {
  environment: currentEnvironment,
}

const environmentConfig = defaultEnvironments[currentEnvironment]

export default {...globalConfig, ...environmentConfig}
