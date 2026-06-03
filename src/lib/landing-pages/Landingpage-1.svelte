<script lang="ts">
	let {
		title = 'Greeny',
		logo = 'https://image.flaticon.com/icons/svg/497/497348.svg',
		heading = 'Find your greeny stuff for your room',
		highlight = 'greeny',
		description = `
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Recusandae maiores neque eaque ea odit placeat, tenetur illum
      distinctio nulla voluptatum a corrupti beatae tempora aperiam
      quia id aliquam possimus aut.
    `,
		ctaText = 'Learn More',
		image = 'https://images.unsplash.com/photo-1536147116438-62679a5e01f2?auto=format&fit=crop&w=634&q=80'
	}: {
		title?: string;
		logo?: string;
		heading?: string;
		highlight?: string;
		description?: string;
		ctaText?: string;
		image?: string;
	} = $props();
</script>

<div class="flex flex-wrap">
	<!-- LEFT SIDE -->
	<div class="w-full sm:w-8/12 mb-10">
		<div class="container mx-auto h-full sm:p-10">
			<!-- NAV -->
			<nav class="flex px-4 justify-between items-center">
				<div class="text-4xl font-bold">
					{title}<span class="text-accent/70">.</span>
				</div>

				<div>
					<img src={logo} alt="Logo" class="w-8" />
				</div>
			</nav>

			<!-- HERO -->
			<header class="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
				<div class="w-full">
					<h1 class="text-4xl lg:text-6xl font-bold">
						{heading.replace(highlight, '')}
						<span class="text-accent/85">{highlight}</span>
					</h1>

					<div class="w-20 h-2 bg-accent/70 my-4"></div>

					<p class="text-xl mb-10">{description}</p>

					<button class="btn btn-primary">{ctaText}</button>
				</div>
			</header>
		</div>
	</div>

	<!-- RIGHT SIDE IMAGE -->
	<img src={image} alt="Landing" class="w-full h-48 object-cover sm:h-screen sm:w-4/12" />
</div>
