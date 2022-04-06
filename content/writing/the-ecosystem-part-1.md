---
published: true
published_to_medium: false
date: "2020-01-15"
title: "The Ecosystem - Part 1"
tags: ['366 Days of Creativity']
category: 366 Days of Creativity
---

A few weeks ago, I came across a [coding experiment on YouTube](https://www.youtube.com/watch?v=r_It_X7v-1E) by Sebastian Lague. It's a simple simulation of an ecosystem. There are rabbits that hop around and find food and water. Then Lague adds foxes to the environment that eat the rabbits.

Each animal is what is called an 'autonomous agent'. Meaning that each animal is its own bit of code that makes decisions and performs actions by itself.

So as a fun project, I am trying to recreate and improve on the ecosystem simulation. I would love to do it in a 3D world with 3D animals hopping over 3D hills but my game development skills aren't quite there yet. So for now, I will be making a 2D version using technologies I am familiar with.

I am a web developer so I will be using Javascript to create and a web browser to render everything. Once I have a good system in place, I will start creating 3D assets and a world. Then I'll simply port the code in the 2D world over to the 3D one.

## Version 1

I had no idea how to go about getting these little animals to move around the screen by themselves. So I tried to go as simple as possible to begin with.

![the first version of the simulation on a grid](/img/blog/the-ecosystem-part-1/grid.gif)

Instead of an open world to move around in, I made a grid. Each purple dot is an animal. Every second, they pick either up, down , left or right and move that way. Cool.

The green squares are plants. The animals will check if a plant is near them before moving and choose to move towards the plant instead of in a random direction.

And that is as far as I got with a grid. I didn't like how restrictive a grid was. It's not really *simulating* anything in nature like that.

## Version 2

I put my head down and got to learning about ways to make movement in 2D space look natural. Eventually, I settled on Reynolds Steering Behaviors for Autonomous Characters and started implementing it in a 2D world.

![gif of the original triangles moving around](/img/blog/the-ecosystem-part-1/version-2.gif)

> I am trying to not get to technical in this article. Mainly because I want to show of the *creative* process and results instead of the code. Sometimes, though, it's hard to avoid.

The triangle animals here move more naturally by taking time to turn and accelerate to their maximum speed. The circles around each one represents their area of awareness. That is how far they can see to look for food. And the random line that keeps changing, emanating from them, is where they are wandering to.

If the animal can't see food in it's area of awareness, it will just move to a random place nearby. It will keep doing that until it finds a plant to eat. Then it will head towards that.

## Version 3

![version 3 of the simulation](/img/blog/the-ecosystem-part-1/version-3.gif)

This is the latest version of the simulation. I have come a long way since the first version but there is still so much I want to add.

Here is what is in this latest version: 

### Gender
Animals are either male of female. There is a 50/50 chance of either.

### Mating
If a male has enough energy, it will look around for a mate. If it finds a potential mate, it will request to mate with them.

When a male and female mate, the female will become pregnant and give birth to a new animal.

### Genes
Each animal is born with particular traits. Like their size, area of awareness, speed, etc.

When a new animal is born, its traits are randomly selected from their parents. So they may get their fathers speed and their mothers area of awareness for example.

### Emoji Mode
Instead of the geometric shapes, everything is an emoji.

![version 3 emoji mode](/img/blog/the-ecosystem-part-1/version-3-emoji-mode.gif)

---

I will definitely be coming back to this project sooner or later. I'd like to add different shapes to the animals that are also part of their DNA. And I'd like to add terrain that influences them too. For example, add water where they can't go or long grass where they move slowly. Maybe this will be saved for the 3D version though.

---

If you want to see the latest version of this sim, go to [sim-3.now.sh](https://sim-3.now.sh). This will always be the latest 2D version that I am working on beyond the versions in this post.

This blog isn't the place to go into the technical details of how all of this works. But if you'd like to learn more, let me know on Twitter or Instagram `@_samuelbeard`.
