<script>
  // Import theme
  import '../theme.postcss'
  
  // Import components
  import SideBarComponent from '../utilities/components/SideBarComponent.svelte'
  import FooterComponent from  '../utilities/components/FooterComponent.svelte'
  // Skeleton imports
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	
	// Errors and more
	import { page } from '$app/stores';
</script>

<svelte:head>
  <script id="bot" type="text/javascript">
    (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '64838240fef3240007b79593' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
  </script>
</svelte:head>

<AppShell class="bg-gradient-to-t from-primary-500 to-secondary-500 font-mono">
  
  <!--<svelte:fragment slot="header">-->
    
  <!--  <div class="w-screen md:w-screen mx-auto shadow-lg">-->
  <!--    <div class="flex p-5 bg-warning-500">-->
  <!--      <div>-->
  <!--        <svg class="w-6 h-6 fill-current text-gray-400 font-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">-->
  <!--          <path d="M0 0h24v24H0V0z" fill="none" />-->
  <!--          <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z" />-->
  <!--        </svg>-->
  <!--      </div>-->
  <!--      <div class="ml-3">-->
  <!--        <h2 class="font-bold text-gray-400">Warning</h2>-->
  <!--        <p class="mt-2 text-sm text-gray-400 leading-relaxed">-->
  <!--          The software is in the testing phase, we are working all the time to-->
  <!--          launch the first version.Until then, there may be changes in the-->
  <!--          logo, components, theme, styling, responsiveness, SEO,-->
  <!--          accessibility, ui/ux, and more... Thanks for understanding - from-->
  <!--          ~Gerastucter~-->
  <!--        </p>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <!--</svelte:fragment>-->
  
  <svelte:fragment slot="sidebarLeft">
    {#if $page.status != 404}
    <SideBarComponent />
    {/if}
  </svelte:fragment>
  <!-- Router Slot -->
  <slot />
  <!-- ---- / ---- -->
  <svelte:fragment slot="pageFooter">
    {#if $page.status != 404}
    <FooterComponent />
    {/if}
  </svelte:fragment>
  <!-- (footer) -->
</AppShell>