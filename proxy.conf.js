const PROXY_CONFIG = [
  {
    context: [
      "/apii",
    ],
    target: "http://localhost:10100",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
