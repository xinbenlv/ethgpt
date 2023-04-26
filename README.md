EthGPT: Ethereum and EVM dApp Functionality for ChatGPT
EthGPT is an extension of the JavaScript version of the Python app documented in the OpenAI Chat GPT docs, providing Ethereum and EVM dApp functionalities for ChatGPT.

### Prerequisites

This app has no user interface, instead it's meant to use with GhatGPT's UI so therefore you must have access to ChatGPT plugins, which at the moment are still in beta.

### Project setup

1. Clone the repo, install depdendencies:

```sh
git clone git@github.com:xinbenlv/ethgpt.git

cd ethgpt

yarn # or npm install, pnpm
```

2. Run the server

```sh
npm run build

npm start

# If you run this in dev mode, the memory may not persist well as the server will randomly restart sometimes
```

3. Set up your GPT Plugin in the ChatGPT Plugin UI.

When prompted for your website domain, type in 'http://localhost:3000'

### Usage

1. Go to ChatGPT and start a conversation with the bot you've set up.

2. Ask the bot to do something, for example, `resolve the ENS xinbenlv.eth for me`.

### Configuration

To add more routes:

1. Create new route in `pages/api` directory.

2. Update `openapi.yaml` with new path

3. Update `openapi.yaml` with schema for any data model coming back or being passed in.