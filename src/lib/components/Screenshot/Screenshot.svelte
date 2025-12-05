<script lang="ts">
	import UIcon from '../Icon/UIcon.svelte';

	export let screenshot: { src: string; label: string } | undefined = undefined;
	export let onClose = () => {
		screenshot = undefined;
	};
	export let onPrevious: (() => void) | undefined = undefined;
	export let onNext: (() => void) | undefined = undefined;
	export let canNavigatePrevious = false;
	export let canNavigateNext = false;

	$: show = typeof screenshot !== 'undefined';

	const handleKeydown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			onClose();
		} else if (event.key === 'ArrowLeft' && canNavigatePrevious && onPrevious) {
			onPrevious();
		} else if (event.key === 'ArrowRight' && canNavigateNext && onNext) {
			onNext();
		}
	};
</script>

{#if show}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0px top-51px bg-[#000000dd] col-center p-50px"
		on:click={onClose}
		on:keydown={handleKeydown}
		tabindex="0"
	>
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl relative"
			on:click={(e) => e.stopPropagation()}
		>
			<!-- Navigation Buttons -->
			{#if onPrevious && canNavigatePrevious}
				<button
					class="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-3 rounded-full border-[var(--border)] border-1px bg-[var(--main)] border-solid hover:border-[var(--border-hover)] hover:bg-[var(--main-hover)] z-10"
					on:click={onPrevious}
				>
					<UIcon icon="i-carbon-chevron-left" classes="text-xl" />
				</button>
			{/if}
			{#if onNext && canNavigateNext}
				<button
					class="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer p-3 rounded-full border-[var(--border)] border-1px bg-[var(--main)] border-solid hover:border-[var(--border-hover)] hover:bg-[var(--main-hover)] z-10"
					on:click={onNext}
				>
					<UIcon icon="i-carbon-chevron-right" classes="text-xl" />
				</button>
			{/if}

			<!-- Close Button -->
			<div class="self-end">
				<button
					class="cursor-pointer aspect-square rounded-full border-[var(--border)] border-1px bg-[transparent] border-solid hover:border-[var(--border-hover)]"
					on:click={onClose}
				>
					<UIcon icon={'i-carbon-close'} />
				</button>
			</div>
			<div
				class="aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"
				style={`background-image: url(${screenshot?.src});`}
			/>
			<p
				class="font-italic m-t-auto m-x-auto bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"
			>
				{screenshot?.label}
			</p>
		</div>
	</div>
{/if}
