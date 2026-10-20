<script lang="ts">
  import BrandGithub from '@tabler/icons-svelte/icons/brand-github'
  import BrandLinkedin from '@tabler/icons-svelte/icons/brand-linkedin'
  import FileText from '@tabler/icons-svelte/icons/file-text'
  import Mail from '@tabler/icons-svelte/icons/mail'
  import Grainient from '../lib/components/Grainient.svelte'
</script>

<svelte:head>
  <title>Cormac Williamson</title>
  <meta
    name="description"
    content="Cormac Williamson is a software engineer with a strong product mindset, looking to grow into a technically grounded product manager role."
  />
  <link rel="canonical" href="https://www.cormac.is/" />
</svelte:head>

<div class="backdrop" aria-hidden="true">
  <Grainient
    color1="#031f18"
    color2="#0a4f3c"
    color3="#063528"
    timeSpeed={0.2}
    grainAmount={0.08}
    contrast={1.2}
  />
</div>

<main>
  <h1>Cormac Williamson</h1>
  <p class="title">Software engineer</p>
  <p class="blurb">
    I’m a software engineer with a strong product mindset, looking to grow into a
    technically grounded product manager role. I’m currently loving pushing the
    boundaries of using AI to make me more efficient in my job.
  </p>

  <section class="history" aria-labelledby="history-heading">
    <h2 id="history-heading" class="title">Job history</h2>
    <ol>
      <li>
        <p class="role">
          Software Engineer
          <span class="org">at <a href="https://hyper.com/" target="_blank" rel="noreferrer">Hyper<span class="sr"> (opens in a new tab)</span></a></span>
        </p>
        <p class="when"><time datetime="2026-06">Jun 2026</time> - Present</p>
      </li>
      <li>
        <p class="role">
          Software Engineer
          <span class="org">at <a href="https://hibid.com/" target="_blank" rel="noreferrer">HiBid Auctions<span class="sr"> (opens in a new tab)</span></a></span>
        </p>
        <p class="when">
          <time datetime="2025-06">Jun 2025</time> - <time datetime="2026-05">May 2026</time>
        </p>
      </li>
      <li>
        <p class="role">
          Software Developer
          <span class="org">at <a href="https://www.enterbridge.com/" target="_blank" rel="noreferrer">EnterBridge<span class="sr"> (opens in a new tab)</span></a></span>
        </p>
        <p class="when">
          <time datetime="2023-07">Jul 2023</time> - <time datetime="2025-07">Jul 2025</time>
        </p>
      </li>
      <li>
        <p class="role">
          Junior Software Developer
          <span class="org">at <a href="https://www.enterbridge.com/" target="_blank" rel="noreferrer">EnterBridge<span class="sr"> (opens in a new tab)</span></a></span>
        </p>
        <p class="when">
          <time datetime="2022-11">Nov 2022</time> - <time datetime="2023-06">Jun 2023</time>
        </p>
      </li>
      <li>
        <p class="role">
          Software Intern
          <span class="org">at <a href="https://www.codearcs.io/" target="_blank" rel="noreferrer">CodeArcs<span class="sr"> (opens in a new tab)</span></a></span>
        </p>
        <p class="when">
          <time datetime="2019-09">Sep 2019</time> - <time datetime="2020-08">Aug 2020</time>
        </p>
      </li>
      <li>
        <p class="role">Intern <span class="org">at <span>MacLaurin Group</span></span></p>
        <p class="when">
          <time datetime="2019-06">Jun 2019</time> - <time datetime="2019-09">Sep 2019</time>
        </p>
      </li>
    </ol>
  </section>

  <nav aria-labelledby="links-heading">
    <h2 id="links-heading" class="title">Links</h2>
    <ul>
      <li>
        <a href="https://github.com/cormacrw" target="_blank" rel="noreferrer">
          <BrandGithub size={28} stroke={1.5} aria-hidden="true" />
          <span>GitHub</span>
          <span class="sr"> (opens in a new tab)</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/cormac-williamson-2ba91a170/"
          target="_blank"
          rel="noreferrer"
        >
          <BrandLinkedin size={28} stroke={1.5} aria-hidden="true" />
          <span>LinkedIn</span>
          <span class="sr"> (opens in a new tab)</span>
        </a>
      </li>
      <li>
        <a href="mailto:cormac@cormac.is">
          <Mail size={28} stroke={1.5} aria-hidden="true" />
          <span>Email</span>
        </a>
      </li>
      <li>
        <a href="/CormacWilliamsonResume.pdf">
          <FileText size={28} stroke={1.5} aria-hidden="true" />
          <span>Resume</span>
        </a>
      </li>
    </ul>
  </nav>
</main>

<style>
  .backdrop {
    position: fixed;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    height: 100lvh;
    pointer-events: none;
    transform: translateZ(0);
    background: linear-gradient(160deg, #031f18, #0a4f3c 50%, #063528);
  }

  main {
    position: relative;
    z-index: 1;
    max-width: 34rem;
    margin: 0 auto;
    padding: 4.5rem 1.5rem 3rem;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.25rem, 6vw, 3.25rem);
    font-weight: 560;
    letter-spacing: -0.02em;
    line-height: 1.05;
  }

  .title {
    margin: 0.85rem 0 0;
    color: var(--muted);
    font-size: 0.95rem;
    font-weight: 560;
    letter-spacing: 0.06em;
    line-height: 1.2;
    text-transform: uppercase;
  }

  .blurb {
    margin: 1.25rem 0 0;
    color: var(--ink);
    font-size: 0.95rem;
    font-weight: 400;
    line-height: 1.5;
  }

  .history,
  nav {
    margin-top: 2.5rem;
  }

  .history .title,
  nav .title {
    margin-top: 0;
  }

  .history ol {
    list-style: none;
    margin: 1.15rem 0 0;
    padding: 0;
  }

  .history li {
    position: relative;
    padding: 0 0 1.5rem 1.15rem;
  }

  .history li:last-child {
    padding-bottom: 0;
  }

  .history li::before {
    content: '';
    position: absolute;
    left: 0.13rem;
    top: 0.4rem;
    bottom: -0.4rem;
    width: 1px;
    background: color-mix(in srgb, var(--accent) 65%, var(--bg));
  }

  .history li:last-child::before {
    display: none;
  }

  .history li::after {
    content: '';
    position: absolute;
    left: 0.02rem;
    top: 0.26rem;
    width: 0.28rem;
    height: 0.28rem;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent) 65%, var(--bg));
  }

  .role,
  .org,
  .when {
    margin: 0;
  }

  .role {
    font-size: 0.92rem;
    font-weight: 560;
    letter-spacing: -0.01em;
    line-height: 1.3;
  }

  .org {
    color: var(--muted);
    font-weight: 400;
  }

  .org a,
  .org span {
    font-style: italic;
  }

  .when {
    margin-top: 0.1rem;
    color: var(--muted);
    font-size: 0.78rem;
    line-height: 1.3;
  }

  ul {
    display: flex;
    justify-content: flex-start;
    gap: 1.75rem;
    list-style: none;
    margin: 1.1rem 0 0;
    padding: 0;
  }

  nav a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    min-width: 2.75rem;
    min-height: 2.75rem;
    color: var(--ink);
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 1.2;
    text-decoration: none;
    text-transform: none;
  }

  .org a {
    color: inherit;
    text-decoration-line: underline;
    text-decoration-color: transparent;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.15em;
  }

  nav a:hover {
    color: var(--accent);
  }

  .org a:hover,
  .org a:focus-visible {
    color: var(--accent);
    text-decoration-color: currentColor;
  }

  a:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  .sr {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 480px) {
    main {
      padding-top: 3rem;
    }

    ul {
      gap: 1.25rem;
    }
  }
</style>
