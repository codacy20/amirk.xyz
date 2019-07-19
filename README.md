# Mystery Box [![Netlify Status](https://api.netlify.com/api/v1/badges/1b17c897-d3c5-454d-a1a5-85dee34d487a/deploy-status)](https://app.netlify.com/sites/romantic-chandrasekhar-e5a83d/deploys)

This application takes care of collecting customer details after the sales are made.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
node v8.11.3
```

## MockUps

![Mock up 1](https://raw.githubusercontent.com/Craners/mysteryBox-api/master/artboard1.png)

### Run via npm

This should help you get running.

```
npm install
```

```
npm run serve
```
the application will run on localhost:3000.

### Run as container
```
docker build .
```

```
docker run --name=api -d -i -t -p 3000:3000 <imageID>
```
the application will run on localhost:3000.

please note: you are going to need the `.env` file in the root directory.

<!-- ## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system -->

## Built With

- [NestJs v4.0](https://docs.nestjs.com/) - The web framework used

<!-- * [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds -->

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Amir Kiumarsi** - [Codacy20](https://github.com/codacy20)
- **Radu Alexander** - [Radu](https://github.com/RaduAlex)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

<!-- * Hat tip to anyone whose code was used -->

- Do What You Can't
  <!-- * etc -->
