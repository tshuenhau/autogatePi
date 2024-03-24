# Autogate Pi: A Web-Enabled Driveway Gate Automation Project

## Introduction

In our household, forgetting the gate remote was a chronic hassle. Family members frequently found themselves stranded outside, sometimes for what felt like an eternity, waiting for someone inside to notice. The wear and tear of remotes, combined with the need to purchase several for different family members, highlighted the need for a more efficient solution. Inspired by these challenges, I set out to devise a web-enabled driveway gate automation system, granting everyone access right from their phones.

<img src="https://www.tshuenhau.com/assets/img/autogatepi/operational.jpg" width="400"> *Description of what's in the image.*

## How It Was Built

### Prototyping and Initial Testing

The journey began with a blend of software creativity and hardware exploration, using a Raspberry Pi to host a Node.js server as the operational core. This allowed seamless integration between the server and a React-based web interface, enabling users to effortlessly send commands via their devices.

The digital-to-physical bridge was established with an auto-gate remote connected to a relay, which responded to HTTP requests. With a simple click online, the system mimicked the traditional remote button. To counter the wear and tear of remotes, I introduced a second remote and relay as a backup.

<img src="https://www.tshuenhau.com/assets/img/autogatepi/prototyping.jpg" width="400"> *Description of the prototyping phase.*

### Refinement and Compact Design

I focused on design aesthetics and functionality, ensuring that wires were orderly and the setup was streamlined for enclosure. Adjustments to my home WiFi router, including port-forwarding, were crucial for smooth system communication.

However, Radio Frequency Interference (RFI) occasionally disrupted the remote's signals. This challenge highlighted the need for design adjustments.

<img src="https://www.tshuenhau.com/assets/img/autogatepi/neatsetup.jpg" width="400"> *Description of the refined design.*

### Adapting and Upgrading

To combat RFI issues, I moved the system into a more expansive housing. This not only resolved the interference but also provided space for future enhancements, ensuring reliable gate access.

<img src="https://www.tshuenhau.com/assets/img/autogatepi/bigbox.jpg" width="400"> *Description of the upgraded system.*

## Closing Thoughts

This project, born from personal inconvenience, has not only resolved the initial issue but also opened my eyes to the possibilities at the intersection of the digital and physical realms. It's a testament to how even our most traditional systems can be enhanced with technology. By reducing reliance on physical remotes, we've not only made life easier but also taken a step towards sustainability by cutting down the need for multiple plastic remotes. Looking forward, I envision a world where such integrations are commonplace, addressing our daily inconveniences with smart, innovative solutions.

## Location

Singapore

## About Me

Hello, some words should go here to introduce myself and my background.

---

Copyright © tshuenhau 2020
