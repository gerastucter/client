<script type="text/javascript" charset="utf-8">
  import { PlayIcon } from 'svelte-feather-icons'
</script>

<svelte:head>
  <meta name="description" content="Discover free tools to help you in your language learning. Get to know our homepage.">
  <meta name="keywords" content="LANGUAGE, LEARNING, HOME">
  <meta name="author" content="Gerastucter">
  <title>HOME | GERASTUCTER</title>
</svelte:head>


<main class="container mx-auto text-center p-4 md:text-center mb-5">
  <section class="container mx-auto text-left p-4 md:text-center">
    <div class="relative z-[1] space-y-6 pt-32 pb-24">
      <h1 class="font-bold text-tertiary-400 text-4xl tracking-tight text-center">
        Welcome to <span class="text-success-500">Gerastucter</span>
      </h1>
      <p class="max-w-lg opacity-70 md:mx-auto text-center text-tertiary-400">
        Get to know tools that will help you a lot in your language learning, here you have the freedom to browse all
        content without any limitation. Discover our resources or know more about us...
      </p>
      <div class="flex flex-wrap gap-3 md:space-x-3 md:block">
        <button class="btn md:btn-lg w-full md:w-fit text-tertiary-400">
          <a class="text-tertiary-400 inline-flex items-center justify-center w-full px-6 py-3 font-medium text-center text-black duration-200 border rounded-full bg-black/5 border-white/5 focus-visible:outline-black focus-visible:ring-black focus:outline-none hover:text-blue-400 lg:w-auto"
            href="/about">
            Know more</a>
        </button>
        <button class="btn md:btn-lg w-full md:w-fit text-tertiary-400">
          <a class="text-tertiary-400 inline-flex items-center justify-center w-full px-6 py-3 font-medium text-center duration-200 border rounded-full bg-primary-500 border-white/5 focus-visible:outline-black focus-visible:ring-black focus:outline-none hover:text-blue-400 lg:w-auto font-bold"
            href="/resources">
            Start 
            <PlayIcon class="pl-1" size="20"/>
            </a>
        </button>
      </div>
    </div>
  </section>
</main>