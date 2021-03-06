## Azure Relay Token

This repo contains sample code to get relay token and ICE configuration for STUN/TURN servers.

### Prerequisites

1. Create an [Azure Communication Services resource](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/create-communication-resource?tabs=windows&pivots=platform-azp)

### How to run

1. run `npm install`
2. create a `.env` file with contents:

`COMMUNICATION_CONNECTION_STRING=<your azure communication service connection string>`

3. run `node relay-token.js`

You should see the ICE configuration output on the console.

### Testing the configuration

Once you have the ICE configuration go to this [WebRTC test page](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/).

Input the servers and credentials, and click on `Gather candidates`. If you see a `relay` candidate appear under `Component type` the configuration works as expected.

### Further reading

1. [Azure Quickstart tutorial](https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/relay-token?pivots=programming-language-javascript)
1. [Azure network traversal sample code](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/communication/communication-network-traversal/samples/v1/javascript/getRelayConfigurationWithoutIdentity.js)
