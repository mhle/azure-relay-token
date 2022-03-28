const {
  CommunicationRelayClient,
} = require("@azure/communication-network-traversal")

const dotenv = require("dotenv")
dotenv.config()

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"]

async function main() {
  const relayClient = new CommunicationRelayClient(connectionString)
  console.log("Getting relay configuration")

  const config = await relayClient.getRelayConfiguration()
  console.log("RelayConfig", config)
}

main().catch((error) => {
  console.error("Encountered an error while issuing relay configuration: ")
  console.error("Request: \n", error.request)
  console.error("\nResponse: \n", error.response)
  console.error(error)
})
