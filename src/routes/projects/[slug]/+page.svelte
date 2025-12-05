<script lang="ts">
	import { base } from '$app/paths';
	import { getAssetURL } from '$lib/data/assets';
	import { title } from '@data/projects';

	import type { Project } from '$lib/types';

	import CardLogo from '$lib/components/Card/CardLogo.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import Markdown from '$lib/components/Markdown.svelte';
	import TabTitle from '$lib/components/TabTitle.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import Banner from '$lib/components/Banner/Banner.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';
	import Screenshot from '$lib/components/Screenshot/Screenshot.svelte';

	export let data: { project?: Project };

	const screenshots = data.project?.screenshots ?? [];

	let screenIndex: number | undefined = undefined;
	let currentSlide = 0;

	$: screenshot =
		typeof screenIndex !== 'undefined' && screenshots[screenIndex]
			? screenshots[screenIndex]
			: undefined;

	$: computedTitle = data.project ? `${data.project.name} - ${title}` : title;

	// Function to handle next/previous navigation with keyboard
	const handleKeydown = (event: KeyboardEvent) => {
		if (screenshots.length === 0) return;

		if (event.key === 'ArrowLeft') {
			currentSlide = Math.max(0, currentSlide - 1);
		} else if (event.key === 'ArrowRight') {
			currentSlide = Math.min(screenshots.length - 1, currentSlide + 1);
		}
	};

	// Function to check if a file is a video
	const isVideo = (src: string): boolean => {
		const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
		return videoExtensions.some(ext => src.toLowerCase().includes(ext));
	};
</script>

<TabTitle title={computedTitle} />

	<div class="pb-10 overflow-x-hidden col flex-1">
		<!-- Back Button -->
		<div class="px-10px pt-5">
			<a 
				href="{base}/projects" 
				class="inline-flex items-center gap-2 px-4 py-2 text-[var(--tertiary-text)] hover:text-[var(--primary-text)] transition-colors border border-[var(--border)] hover:border-[var(--border-hover)] rounded-md bg-[var(--main)] hover:bg-[var(--main-hover)]"
			>
				<UIcon icon="i-carbon-chevron-left" />
				Back to Projects
			</a>
		</div>
	{#if data.project === undefined}
		<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]">
			<UIcon icon="i-carbon-cube" classes="text-3.5em" />
			<p class="font-300">Could not load project data...</p>
		</div>
	{:else}
		<div class="flex flex-col items-center overflow-x-hidden">
			<Banner img={getAssetURL(data.project.logo)}>
				<div class="col-center p-y-20">
					<div class="text-0.9em">
						<MainTitle>{data.project.name}</MainTitle>
					</div>
					<p class="font-300 text-center text-[var(--tertiary-text)] m-y-2">{data.project.type}</p>
					<div class="w-75%">
						<CardDivider />
					</div>
					<div class="row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2">
						{#each data.project.links as item}
							<Chip href={item.to}>
								<div class="row-center gap-2">
									<UIcon icon="i-carbon-link" />
									<span>{item.label}</span>
								</div>
							</Chip>
						{/each}
					</div>
					<div class="row-center flex-wrap m-b-2">
						{#each data.project.skills as item}
							<Chip classes="inline-flex flex-row items-center justify-center pointer-events-none">
								<CardLogo
									src={getAssetURL(item.logo)}
									alt={item.name}
									radius={'0px'}
									size={15}
									classes="mr-2"
								/>
								<span class="text-[0.9em]">{item.name}</span>
							</Chip>
						{/each}
					</div>
				</div>
			</Banner>
			<div class="pt-3 pb-1 overflow-x-hidden w-full">
				<div class="px-10px m-y-5">
					{#if data.project.description}
						<div class="prose prose-lg max-w-none text-[var(--primary-text)] leading-relaxed">
							<Markdown content={data.project.description} />
						</div>
					{:else}
						<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
							<UIcon icon="i-carbon-text-font" classes="text-3.5em" />
							<p class="font-300">No description</p>
						</div>
					{/if}
				</div>
				<div class="w-100% m-t-8">
					<CardDivider />
				</div>
				{#if screenshots.length > 0}
					<div class="px-10px m-t-10">
						<h3 class="text-2xl font-semibold mb-5 text-[var(--primary-text)]">Screenshots & Videos</h3>
						<div class="screenshot-carousel w-full">
							<!-- Carousel Controls -->
							<div class="flex justify-center gap-4 mb-6">
								<button
									class="row-center font-500 p-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-[var(--main)] rounded-md hover:border-[var(--border-hover)] transition-colors"
									on:click={() => (currentSlide = Math.max(0, currentSlide - 1))}
									disabled={currentSlide === 0}
									class:opacity-50={currentSlide === 0}
								>
									<UIcon icon="i-carbon-chevron-left" />
									Previous
								</button>
								<span class="flex items-center px-4 text-[var(--tertiary-text)]">
									{currentSlide + 1} / {screenshots.length}
								</span>
								<button
									class="row-center font-500 p-10px cursor-pointer border-1px border-solid border-[var(--border)] bg-[var(--main)] rounded-md hover:border-[var(--border-hover)] transition-colors"
									on:click={() =>
										(currentSlide = Math.min(screenshots.length - 1, currentSlide + 1))}
									disabled={currentSlide === screenshots.length - 1}
									class:opacity-50={currentSlide === screenshots.length - 1}
								>
									Next
									<UIcon icon="i-carbon-chevron-right" />
								</button>
							</div>

							<!-- Screenshot/Video Display -->
							<div class="w-full flex justify-center mb-4">
								<div
									class="screenshot-container max-w-full"
									class:cursor-pointer={!isVideo(screenshots[currentSlide].src)}
									on:click={() => {
										if (!isVideo(screenshots[currentSlide].src)) {
											screenIndex = currentSlide;
										}
									}}
									on:keydown={(e) => {
										if (e.key === 'Enter' && !isVideo(screenshots[currentSlide].src)) {
											screenIndex = currentSlide;
										}
									}}
									on:keypress
									on:keyup
									role="button"
									tabindex="0"
								>
									{#if isVideo(screenshots[currentSlide].src)}
										<video
											src={screenshots[currentSlide].src}
											class="screenshot-video max-w-full h-auto rounded-lg shadow-lg"
											controls
											loop
											muted
											preload="metadata"
										>
											<track kind="captions" />
										</video>
									{:else}
										<img
											src={screenshots[currentSlide].src}
											alt={screenshots[currentSlide].label}
											class="screenshot-image max-w-full h-auto rounded-lg shadow-lg"
										/>
									{/if}
								</div>
							</div>

							<!-- Media Label -->
							<div class="text-center">
								<p class="text-lg font-medium text-[var(--primary-text)]">
									{screenshots[currentSlide].label}
								</p>
							</div>
						</div>
					</div>
				{:else}
					<div class="p-5 col-center gap-3 m-y-auto text-[var(--border)]">
						<UIcon icon="i-carbon-image" classes="text-3.5em" />
						<p class="font-300">No screenshots</p>
					</div>
				{/if}
			</div>
		</div>
	{/if}
</div>
<Screenshot 
	{screenshot} 
	onClose={() => (screenIndex = undefined)}
	onPrevious={screenIndex !== undefined && screenIndex > 0 ? () => {
		screenIndex = Math.max(0, (screenIndex ?? 0) - 1);
	} : undefined}
	onNext={screenIndex !== undefined && screenIndex < screenshots.length - 1 ? () => {
		screenIndex = Math.min(screenshots.length - 1, (screenIndex ?? 0) + 1);
	} : undefined}
	canNavigatePrevious={screenIndex !== undefined && screenIndex > 0}
	canNavigateNext={screenIndex !== undefined && screenIndex < screenshots.length - 1}
/>

<svelte:window on:keydown={handleKeydown} />

<style lang="scss">
	.screenshot-carousel {
		.screenshot-container {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.screenshot-image,
		.screenshot-video {
			// Responsive image/video handling
			max-width: 100%;
			max-height: 70vh; // Limit height for mobile screenshots
			width: auto;
			height: auto;

			// Ensure mobile screenshots don't get too tall
			@media (max-width: 768px) {
				max-height: 60vh;
			}

			// For very tall images (mobile screenshots), limit width
			&[src*='mobile'],
			&[src*='phone'],
			&[style*='aspect-ratio: 0.'] {
				max-width: 300px;
				max-height: 600px;
			}
		}

		.screenshot-video {
			// Video-specific styles
			min-width: 300px;
			
			// Prevent videos from getting too small on mobile
			@media (max-width: 768px) {
				min-width: 250px;
			}
		}

		.thumbnail-nav {
			&:hover {
				opacity: 1 !important;
				transform: scale(1.05);
			}
		}

		// Navigation button styles
		button:disabled {
			cursor: not-allowed;
			&:hover {
				border-color: var(--border);
			}
		}
	}
</style>
