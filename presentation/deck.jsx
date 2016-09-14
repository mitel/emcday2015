/*

  David Hanacek
  (aka sdcloudy)

  Dell EMC 
  vSpecialist

  david.hanacek@dell.com
  twitter: @SD_Cloudy
*/


import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

// import Interactive from "./interactive";

const images = {
  city: require("./city2.jpg"),
  kat: require("./kat.png"),
  blackemc: require("./emc_bkg1.jpg"),
  delltechnologies: require("./logo-dell-tech-shaded.png"),
  delltechnologieslogos: require("./logo-strip.png"),
  opensource: require("./opensource5.png"),
  quake: require("./quake2.jpg")
};

preloader([images.city, images.kat, images.blackemc, images.delltechnologies, images.delltechnologieslogos, images.opensource, images.quake]);

export default class extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={800}>
        <Slide transition={["zoom"]} bgColor="primary"
          notes="every business is going to be a software business. with this presentation i'm disrupting Microsoft's PP market,
          same like Uber is dusrupting classic taxi market :)">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Hello world!
          </Heading>
          <Heading size={1} fit caps>
            I am born in the cloud
          </Heading>
          <Heading size={1} fit caps textColor="black">
            A presentation about this presentation
          </Heading>
          <Heading size={1} fit caps textColor="black">
            What's DevOps About?
          </Heading>
          <Heading size={1} fit caps textColor="black">
            And why does it matter?
          </Heading>
          <Link href="https://github.com/sdcloudy/emcdevopsintro">
            <Text bold caps textColor="tertiary">Download my code from Github</Text>
          </Link>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>Right Arrow or swipe To Begin!</Text>
          <Text textSize="1.5em" margin="20px 0px 0px" bold>David Hanacek | Dell EMC vSpecialist | @SD_Cloudy</Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
          <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={1} fit textColor="primary" textFont="secondary">
            Wait what?
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Yes, this presentation is an application
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              A cloud-native application
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Powered by a cloud native platform & open-source
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="every company will be a software company sooner or later">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Why cloud native platform, why open-source?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              I am the software company, you are my customers
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              You want me to deliver software very fast
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="every company will be a software company sooner or later">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Cloud native platform (aka paas) - concept deep dive
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Your cloud infra needs an operating system
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Same as your laptop needs one
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Do I need this layer on top of my infra?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              No! You can install apps directly on your VMs
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="red">
              But you go back several years..
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Can i install it on my own infra?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Yes! Today for vSphere and OpenStack
            </Heading>
          </Appear>
          <Appear fid="3">
            <Text textSize="3.0em" margin="20px 0px 0px" textColor="primary">
              Hint: follow the vSphere Integrated Openstack project
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Can i install it on my public infra?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Yes! vCloud Air, Azure, Amazon AWS, Google Compute Engine
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              ..plus any public cloud running on VMware or OpenStack
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Can i move apps between private-public?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Yes! it's the same 'operating system'
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Application centric hybrid cloud
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Wow! Where can i get the platform?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Just like your old OS - torrents :)
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Kidding, go to <Link textColor="primary" href="https://www.cloudfoundry.org/">CloudFoundry.org</Link> - it's free
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              And if i want enterprise grade support?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              We recommend Pivotal CloudFoundry
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              ..or choose a Dell EMC converged infra
            </Heading>
          </Appear>
           <Appear fid="4">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
            Integrated as turnkey solution as <Link textColor="primary" href="https://www.emc.com/en-us/solutions/cloud/native-hybrid-cloud.htm">Native Hybrid Cloud</Link>
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Can i run all my existing apps on CF?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              No! CF is for cloud-native apps
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              But you can integrate cloud-native with legacy
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Can i use any programming language on CF?
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Almost. Java, Python, Ruby, Node.js, Go, PHP
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              ..plus community built projects such as .Net or Racket
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Cloud native = fully automated, self service
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Don't deal with infrastructure primitives
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Developers focus on the code
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.blackemc.replace("/", "")} bgDarken={0.65}
                notes="FAQ">
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              The CloudFoundry haiku
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Here is my source code,
              Run it on the cloud for me,
              I do not care how
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Don't waste time on repetitive tasks - scaling demo
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.opensource.replace("/", "")} bgDarken={0.55}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Open Source all the way
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              How? Enterprise github accounts
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Social coding: infrastructure, scripts, app modules
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote textSize="3.5em">I think everybody in this country should learn how to program a computer because it teaches you how to think</Quote>
            <Cite>Steve Jobs</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.quake.replace("/", "")} bgDarken={0.45}>
          <BlockQuote>
            <Quote textSize="3.5em">
              My 10 year old son's second game is now available. I'm proud of him. It is about 2000 lines of Racket code
            </Quote>
            <Cite>John Carmack (creator of Quake & Doom, CTO of Oculus VR)</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote textSize="3.5em">
              Prime Minister of Singapore shares his C++ code for Sudoku solver
            </Quote>
            <Cite>
              <Link textColor="tertiary" href="http://goo.gl/rfgyLb">Arstehnica - news</Link>
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <BlockQuote>
            <Quote textSize="3.5em">
              I started doing more and more engineering at night on simple ideas that helped me learn how to program
            </Quote>
            <Cite>
              Kevin Systrom, Instagram‘s CEO
            </Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Challenge yourself!
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Pick a side project, pick a programming language
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Play with some code
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Follow the news faster
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              Open a twitter account
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              Follow this: @thenewstack @thehackernews @codeDellEMC @pivotal
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              Educate yourself: podcasts
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="tertiary">
              New topics: devops, cloud native, microservices
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={1} caps fit margin="20px 0px 0px" textColor="primary">
              DevOps Cafe, All Things Pivotal, The Cloudcast, The Hot Aisle
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Credits to the following Open Source projects:
          </Heading>
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            CloudFoundry, Docker, Node.js, Hapi.js, React by Facebook, Spectacle by FormidableLabs
          </Heading>
        </Slide>
        <Slide transition={["spin", "slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            Thank you, enjoy the coffee!
          </Heading>
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            @SD_Cloudy  |  github.com/sdcloudy
          </Heading>
          <Link href="http://www.delltechnologies.com"><Image width="100%" src={images.delltechnologies}/><Image width="100%" src={images.delltechnologieslogos}/></Link>
        </Slide>
      </Deck>
    );
  }
}
