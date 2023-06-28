<script>
  // Import theme
  import '../theme.postcss'
  
  
  //Theme system 
  import { autoModeWatcher } from '@skeletonlabs/skeleton';
  
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
  {@html `<script>${autoModeWatcher.toString()} autoModeWatcher();</script>`}
  
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



<AppShell class="bg-primary-50-900-token">
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