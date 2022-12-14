const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'ZkApp.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Ryan',
  role: 'crypto enthusiast 🪙',
  description:
    'This project was made based on the MINA guidelines which follow tutorials and implements to make ZKAPP.',
  resume: 'https://fiqrian.github.io/ui/index.html',
  // social: {
  //   linkedin: 'https://linkedin.com',
  //   github: 'https://github.com',
  // },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '1: Hello World',
    description:
      'We will write a basic smart contract that stores a number as on-chain state and contains logic to only allow this number to be replaced by its square (e.g. 2 -> 4 -> 16...). We will create this project using the Mina zkApp CLI, write our smart contract code, and then use a local Mina blockchain to interact with it.',
    stack: [''],
    sourceCode: 'https://github.com/fiqrian/ui/tree/main/01-hello-world-main',
    livePreview: 'https://github.com/fiqrian/ui/tree/main/01-hello-world-main',
  },
  {
    name: '2: Private Inputs and Hash Functions',
    description:
      'With a zkApp, a users local device generates one or more zero knowledge proofs, which are then verified by the Mina network. Each method in a SnarkyJS smart contract corresponds to constructing a proof.As such, all inputs to a smart contract are private by default, and never seen by the blockchain, unless the developer chooses to store those values as on-chain state in the zkApp account.',
    stack: [''],
    sourceCode:
      'https://github.com/fiqrian/ui/tree/main/02-private-inputs-and-hash-functions-main',
    livePreview:
      'https://github.com/fiqrian/ui/tree/main/02-private-inputs-and-hash-functions-main',
  },
  {
    name: '3: Deploying to a Live Network',
    description:
      'Mina zkApps are currently available on Berkeley, Mina public testnet, which is in its final stages of testing before Mainnet. In this tutorial, we will deploy our contract to the Berkeley Testnet. Berkeley is feature complete, and only minor changes and bugfixes are expected before Mainnet.',
    stack: [''],
    sourceCode: 'https://github.com/fiqrian/ui',
    livePreview: 'https://github.com/fiqrian/ui',
  },
  {
    name: '4: Building a zkApp UI in the Browser with React',
    description:
      'we will implement a browser UI using ReactJS that interacts with a smart contract running on Berkeley.',
    stack: [''],
    sourceCode: 'https://github.com/fiqrian/ui',
    livePreview: 'https://fiqrian.github.io/ui/index.html',
  },
  {
    name: '5: Common Types and Functions',
    description:
      'we will talk about more types that are useful when building with SnarkyJS, so you can build more applications. So far, we mostly been using the Field type. SnarkyJS provides other higher-order types built from Fields, that will be useful for your development.',
    stack: [''],
    sourceCode: 'https://github.com/fiqrian/ui',
    livePreview: 'https://github.com/fiqrian/ui',
  },
  {
    name: '6: Off-Chain Storage',
    description:
      'we will share a library and pattern for working with storing merkle trees off-chain, with only the root of the merkle tree stored on chain. We intend for this tutorial to be useful towards unlocking larger set of applications that require off-chain storage. Other solutions are intended to follow that provide more decentralized options for zkApps that need more trustless solutions.',
    stack: [''],
    sourceCode: 'https://github.com/fiqrian/ui/tree/main/06-off-chain-storage',
    livePreview: 'https://github.com/fiqrian/ui/tree/main/06-off-chain-storage',
  },
  {
    name: '7: Oracles',
    description:
      'Specifically, our oracle will retrieve data from a REST API that provides mock credit score information for two users–one with a high credit score and one with a low credit score. Our smart contract will consume this information and allow the user to prove their credit score is above a certain threshold (e.g. >700).',
    stack: [''],
    sourceCode: 'https://github.com/fiqrian/ui/tree/main/07-oracle',
    livePreview: 'https://github.com/fiqrian/ui',
  },
  {
    name: '8: Custom Tokens',
    description:
      'Mina comes with native support for custom tokens. Each account on Mina can also have tokens associated with it.To create a new token, one creates a smart contract, which becomes the manager for the token, and uses that contract to set the rules around how the token can be mint, burned, and sent.',
    stack: [''],
    sourceCode: 'https://github.com/fiqrian/ui/tree/main/08-custom-tokens',
    livePreview:
      'https://github.comhttps://github.com/fiqrian/ui/tree/main/08-custom-tokens',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Next JS',
  'React',
  'TypeScript',
  'Material UI',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'fiqrian.faturahman@gmail.com',
}

export { header, about, projects, skills, contact }
