import React from 'react';

import {
  Heading,
  Flex,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Meta,
  Schema,
} from '@once-ui-system/core';
import { home, about, person, newsletter, baseURL, routes } from '@/resources';
import { Mailchimp, Discord, Store, Spotify, ProjectCard } from '@/components';
import { Projects } from '@/components/work/Projects';
import { Posts } from '@/components/blog/Posts';

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="start"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx
            translateY="4"
            fillWidth
            horizontal="start"
            paddingBottom="16"
          >
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx
            translateY="8"
            delay={0.2}
            fillWidth
            horizontal="start"
            paddingBottom="32"
          >
            <Text
              wrap="balance"
              onBackground="neutral-weak"
              variant="heading-default-xl"
            >
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx
            paddingTop="12"
            delay={0.4}
            horizontal="start"
            paddingLeft="12"
          >
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: '-0.75rem' }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      <Discord />
      {routes['/blog'] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />
      <Store />
      {/* <Spotify /> */}
      <Flex direction="column" fillWidth gap="12">
        <Heading as="h2" variant="display-strong-m">
          Now Playing
        </Heading>
        <Text onBackground="neutral-weak">
          — My current focus playlist for getting things done.
        </Text>
      </Flex>
      <iframe
        data-testid="embed-iframe"
        // style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWY64wDtewQt?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        // allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <Flex direction="column" fillWidth gap="12">
        <Heading as="h2" variant="display-strong-m">
          Fragments of spacetime
        </Heading>
        <Text onBackground="neutral-weak">— Pieces from the drawer</Text>
      </Flex>
      <Flex fillWidth gap="l" direction="column">
        <Flex fillWidth gap="l" mobileDirection="column">
          <Flex direction="column" fillWidth gap="l">
            <ProjectCard
              href=""
              aspectRatio="13 / 6"
              images={['/images/projects/fragments/fragment-04.jpg']}
              title=""
              content=""
              description=""
              avatars={[]}
              link=""
            />
            <ProjectCard
              href=""
              aspectRatio="1 / 1"
              images={['/images/projects/fragments/fragment-06.jpg']}
              title=""
              content=""
              description=""
              avatars={[]}
              link=""
            />
          </Flex>
          <Flex direction="column" fillWidth gap="l">
            <ProjectCard
              sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 480px"
              href=""
              aspectRatio="1 / 1"
              images={['/images/projects/fragments/fragment-07.jpg']}
              title=""
              content=""
              description=""
              avatars={[]}
              link=""
            />
            <ProjectCard
              href=""
              aspectRatio="13 / 6"
              images={['/images/projects/fragments/fragment-08.jpg']}
              title=""
              content=""
              description=""
              avatars={[]}
              link=""
            />
          </Flex>
        </Flex>
        <ProjectCard
          href=""
          aspectRatio="4 / 3"
          images={['/images/projects/fragments/fragment-01.jpg']}
          title=""
          content=""
          description=""
          avatars={[]}
          link=""
        />
        <Flex fillWidth gap="l" mobileDirection="column">
          <Flex direction="column" fillWidth gap="l">
            <ProjectCard
              href=""
              aspectRatio="16 / 9"
              images={['/images/projects/fragments/fragment-05.jpg']}
              title=""
              content=""
              description=""
              avatars={[]}
              link=""
            ></ProjectCard>
            <ProjectCard
              href=""
              aspectRatio="1 / 1"
              images={['/images/projects/fragments/fragment-03.jpg']}
              title=""
              content=""
              description=""
              avatars={[]}
              link=""
            ></ProjectCard>
          </Flex>
          <Flex direction="column" fillWidth gap="l">
            <ProjectCard
              href=""
              aspectRatio="2 / 3"
              images={['/images/projects/fragments/fragment-02.jpg']}
              title=""
              content=""
              description=""
              avatars={[]}
              link=""
            />
          </Flex>
        </Flex>
      </Flex>
      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
