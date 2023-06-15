<script type="text/javascript" charset="utf-8">
  // Import icons
	import { 
	  FlagIcon, 
	  InfoIcon,
	  HelpCircleIcon,
	  DatabaseIcon,
	  CloudOffIcon,
	  FileTextIcon
	  } 
	from 'svelte-feather-icons';
	
</script>

<aside class="flex h-screen overflow-hidden bg-white">
  <div class="flex flex-col justify-between w-20 bg-white border-r">
    <nav class="mt-5 mb-10 flex flex-col justify-center">
      <a class="flex flex-col justify-center items-center" href="/">
        <img src="https://res.cloudinary.com/djglhdlln/image/upload/v1686587188/Logos/E_Type2_wvcxf1.png" alt="logo"
          class="object-cover w-10 h-10 mb-3 mt-3">
      </a>
      <div class="mt-5">
        <ul class="space-y-3 flex flex-col items-center justify-center mb-10">
          <div class="p-1 text-gray-500 text-sm">
            <p>PAGES</p>
          </div>
          <li class="text-center bg-primary-500 p-3 mb-3 rounded-full">
            <a href="/"
              class="text-tertiary-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <FlagIcon />
              </p>
            </a>
          </li>
          <li class="text-center bg-primary-500 p-3 mb-3 rounded-full">
            <a href="/about"
              class="text-tertiary-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <InfoIcon />
              </p>
            </a>
          </li>
          <li class="text-center bg-primary-500 p-3 mb-3 rounded-full">
            <a href="/resources"
              class="text-tertiary-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <DatabaseIcon />
              </p>
            </a>
          </li>
          <li class="text-center bg-primary-500 p-3 mb-3 rounded-full">
            <a href="/faq"
              class="text-tertiary-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <HelpCircleIcon />
              </p>
            </a>
          </li>
          <div class="p-1 text-gray-500 text-sm">
            <p class="mt-5">MORE</p>
          </div>
                    <li class="text-center bg-primary-500 p-3 mb-3 rounded-full">
            <a href="https://docs.google.com/document/d/1I0hgjf2MoJg_bJQKrJB4EnENfiJXVs8G/edit?usp=drivesdk&ouid=113732401299139248092&rtpof=true&sd=true"
              class="text-tertiary-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <CloudOffIcon />
              </p>
            </a>
          </li>
                    <li class="text-center bg-primary-500 p-3 mb-3 rounded-full">
            <a href="https://docs.google.com/document/d/1EkZQi2ubDCpaCz8InnxK8GKx8LH6PRHt/edit?usp=drivesdk&ouid=113732401299139248092&rtpof=true&sd=true"
              class="text-tertiary-500 transition duration-200 ease-in-out transform hover:text-blue-500 focus:shadow-outline hover:scale-95 text-center">
              <p class="mx-auto text-center">
                <FileTextIcon />
              </p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</aside>