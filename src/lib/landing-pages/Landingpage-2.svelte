<script lang="ts">
	let {
		title = 'Discover Your New Home',
		backgroundImage = 'https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080',
		placeholder = 'Search...',
		buttonText = 'Search',
		onSubmit = () => {}
	}: {
		title?: string;
		backgroundImage?: string;
		placeholder?: string;
		buttonText?: string;
		onSubmit?: (value: string) => void;
	} = $props();

	let searchValue = $state('');
</script>

<section class="w-full h-screen">
	<div
		class="w-full h-full opacity-90 bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
		style={`background-image: url('${backgroundImage}')`}
	>
		<!-- Title -->
		<h1
			class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold p-2 bg-opacity-40 rounded-sm"
		>
			{title}
		</h1>

		<!-- Search Form -->
		<div class="w-full mx-auto">
			<form onsubmit={() => onSubmit(searchValue)}>
				<div class="xl:w-1/2 lg:w-[60%] sm:w-[70%] w-[90%] mx-auto flex gap-2 md:mt-6 mt-4">
					<input
						type="text"
						bind:value={searchValue}
						class="border w-full p-2 rounded-md text-xl pl-2"
						{placeholder}
					/>

					<button type="submit" class="btn btn-primary">
						{buttonText}
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
