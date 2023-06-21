<script type="text/javascript" charset="utf-8">
  import { PlayIcon, InfoIcon } from 'svelte-feather-icons'
</script>

<svelte:head>
  <meta name="description"
    content="Discover free tools to help you in your language learning. Get to know our homepage.">
  <meta name="keywords" content="LANGUAGE, LEARNING, HOME">
  <meta name="author" content="Gerastucter">
  <title>Gerastucter</title>
</svelte:head>


<main class="container mx-auto text-center p-4 md:text-center mb-5">
  <section class="relative flex flex-col items-center justify-center">
    <div class="relative z-[1] space-y-6 pt-32 pb-24">
      
      <div class="absolute items-center w-full px-5 py-12 mx-auto max-w-7xl lg:px-16 lg:py-32 md:px-12">
        <div class="relative items-center w-full py-12 pb-12 mx-auto mt-12 max-w-7xl">
          <svg id="anim" fill="none" viewBox="0 0 400 400" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg"
            class="absolute -mt-24 blur-3xl">
            <g clip-path="url(#clip0_10_20)">
              <g filter="url(#filter0_f_10_20)">
                <path d="M128.6 0H0V322.2L106.2 134.75L128.6 0Z" fill="#ff237d"></path>
                <path d="M0 322.2V400H240H320L106.2 134.75L0 322.2Z" fill="#7C87F8"></path>
                <path d="M320 400H400V78.75L106.2 134.75L320 400Z" fill="#4C65E4"></path>
                <path d="M400 0H128.6L106.2 134.75L400 78.75V0Z" fill="#043AFF"></path>
              </g>
            </g>
            <defs>
              <filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="720.666"
                id="filter0_f_10_20" width="720.666" x="-160.333" y="-160.333">
                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape"></feBlend>
                <feGaussianBlur result="effect1_foregroundBlur_10_20" stdDeviation="80.1666"></feGaussianBlur>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div class="z-40">
        <h1 class="font-bold text-4xl tracking-tight text-center mb-4">
          <span class="mb-2">Welcome to</span>
          <span class="
          text-success-50-900-token bg-tertiary-900-50-token p-1 rounded drop-shadow-lg">Gerastucter</span>
        </h1>
        <p class="max-w-lg opacity-70 md:mx-auto text-center">
          Get to know tools that will help you a lot in your language learning, here you have the freedom to browse
          all
          content without any limitation. Discover our resources or know more about us...
        </p>
        <div class="flex flex-wrap gap-3 md:space-x-3 px-10 py-12">
          <a href="/resources"
            class="items-center shadow-lg text-secondary-900-50-token btn hover:bg-success-900-50-token hover:text-success-50-900-token btn-sm variant-filled-tertiary gap-2 w-full">
            <span>Start</span>
            <PlayIcon class="p-1" size="24" />
          </a>
          <a href="/about" class="flex items-center btn btn-sm gap-2 w-full rounded-full">
            <span>Know more</span>
            <InfoIcon class="p-1" size="24" />
          </a>
        </div>
      </div>
    </div>
    
  </section>
</main>



<style type="text/css" media="all">
  #anim {
    animation: changeColor 4s alternate ease-in-out infinite;
  }
  
  
  @keyframes changeColor {
    from {
      background: transparent;
    }
    
    to {
      background: #94a3e9;
    }
  }
</style>