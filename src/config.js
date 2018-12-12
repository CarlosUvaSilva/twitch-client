const currentEnvironment = !process.env.NODE_ENV ? 'development' : process.env.NODE_ENV

const defaultEnvironments = {
  development: {
    TWITCH_URL: 'https://api.twitch.tv/kraken',
    TWITCH_CLIENT_ID: 'vawgt0x864f006ldz1ef0yw40lz3md',
  },

  production: {
    TWITCH_URL: 'https://api.twitch.tv/kraken',
    TWITCH_CLIENT_ID: 'vawgt0x864f006ldz1ef0yw40lz3md',
  },
}

// Example of global configuration variables
const globalConfig = {
  environment: currentEnvironment,
}

const environmentConfig = defaultEnvironments[currentEnvironment]

export default {...globalConfig, ...environmentConfig}
